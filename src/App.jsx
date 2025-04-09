import { RouterProvider, createBrowserRouter, Navigate } from "react-router-dom";
import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import AppLayout from "./layouts/app-layout";
import { ThemeProvider } from "./components/theme-provider";

import LandingPage from "./pages/landing";
import JobTracker from "./pages/JobTracker";
import JobPage from "./pages/job";
import BrowseJobs from "./pages/BrowseJobs";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

import "./App.css";

// Get Clerk publishable key from environment variables
const clerkPubKey = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Clerk publishable key. Please add VITE_CLERK_PUBLISHABLE_KEY to your .env file");
}

const ProtectedRoute = ({ children }) => {
  const { isSignedIn } = useAuth();
  if (!isSignedIn) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/jobs",
        element: (
          <ProtectedRoute>
            <BrowseJobs />
          </ProtectedRoute>
        ),
      },
      {
        path: "/tracker",
        element: (
          <ProtectedRoute>
            <JobTracker />
          </ProtectedRoute>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoute>
            <JobPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <ClerkProvider publishableKey={clerkPubKey}>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </ClerkProvider>
  );
}

export default App;
