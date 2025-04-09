import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserButton, useAuth } from "@clerk/clerk-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, X, Briefcase, ClipboardList } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const { isSignedIn } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <svg
                className="w-8 h-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                TrackHire
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/jobs" className="flex items-center gap-2 text-2xl font-medium hover:text-primary">
              <Briefcase className="w-5 h-5" />
              Browse Jobs
            </Link>
            <Link to="/tracker" className="flex items-center gap-2 text-2xl font-medium hover:text-primary">
              <ClipboardList className="w-5 h-5" />
              Job Tracker
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            {isSignedIn ? (
              <UserButton afterSignOutUrl="/" />
            ) : (
              <Link to="/login">
                <Button variant="outline" className="text-base">Login</Button>
              </Link>
            )}
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col items-center gap-4">
              <Link
                to="/jobs"
                className="flex items-center gap-2 text-2xl font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Briefcase className="w-5 h-5" />
                Browse Jobs
              </Link>
              <Link
                to="/tracker"
                className="flex items-center gap-2 text-2xl font-medium hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ClipboardList className="w-5 h-5" />
                Job Tracker
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
