import { Link } from "react-router-dom"
import { Button } from "./ui/button"
import { useTheme } from "./theme-provider"
import { 
  Moon, 
  Sun, 
  Briefcase, 
  Search, 
  Bookmark, 
  Menu,
  X,
  LogIn,
  Bell
} from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-2">
          <Briefcase className="h-6 w-6" />
          <span className="text-xl font-bold">HireTech</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link to="/jobs" className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground">
            <Search className="h-4 w-4" />
            <span>Browse Jobs</span>
          </Link>
          <Link to="/tracker" className="flex items-center space-x-1 transition-colors hover:text-foreground/80 text-foreground">
            <Bookmark className="h-4 w-4" />
            <span>Job Tracker</span>
          </Link>
        </nav>

        {/* Right Section */}
        <div className="flex items-center space-x-2">
          {/* Theme Toggle and Notification Icons */}
          <div className="flex items-center space-x-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/notifications">
                <Bell className="h-5 w-5" />
              </Link>
            </Button>
          </div>
          {/* Desktop Sign In Button */}
          <div className="hidden md:block">
            <Button variant="default" size="sm" asChild>
              <Link to="/login" className="flex items-center space-x-1">
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            </Button>
          </div>
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <div className="border-t py-4 px-6 space-y-4 bg-background">
          <Link 
            to="/jobs" 
            className="flex items-center space-x-2 text-sm font-medium hover:text-foreground/80"
            onClick={() => setIsMenuOpen(false)}
          >
            <Search className="h-4 w-4" />
            <span>Browse Jobs</span>
          </Link>
          <Link 
            to="/tracker" 
            className="flex items-center space-x-2 text-sm font-medium hover:text-foreground/80"
            onClick={() => setIsMenuOpen(false)}
          >
            <Bookmark className="h-4 w-4" />
            <span>Job Tracker</span>
          </Link>
          <div className="pt-4 border-t">
            <Button variant="default" className="w-full" asChild>
              <Link to="/login" className="flex items-center justify-center space-x-2" onClick={() => setIsMenuOpen(false)}>
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 