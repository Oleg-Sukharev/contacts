import "./styles/styles.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom"

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routes } from "./routes"

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement) throw new Error("Failed to find the root element");

createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(routes)} />
  </StrictMode>,
);
