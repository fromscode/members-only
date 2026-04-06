import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./pages/App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Join from "./pages/Join.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    Component: App
  },
  {
    path: '/join',
    Component: Join
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>
)
