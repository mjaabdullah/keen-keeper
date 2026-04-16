import "@fontsource/geist";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { ToastContainer } from "react-toastify";
import TimelineProvider from "./context/TimelineContext";
import "./index.css";
import { router } from "./routes/Routes";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TimelineProvider>
      <RouterProvider router={router} />
    </TimelineProvider>
    <ToastContainer position="top-center" theme="light" />
  </StrictMode>,
);
