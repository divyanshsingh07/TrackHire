import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/app-layout";
import { ThemeProvider } from "./components/theme-provider";

import LandingPage from "./pages/landing";
import JobTracker from "./pages/JobTracker";
import JobPage from "./pages/job";
import BrowseJobs from "./pages/BrowseJobs";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/jobs",
        element: <BrowseJobs />,
      },
      {
        path: "/tracker",
        element: <JobTracker />,
      },
      {
        path: "/job/:id",
        element: <JobPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
