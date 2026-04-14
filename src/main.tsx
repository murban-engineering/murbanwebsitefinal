import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const redirectedPath = new URLSearchParams(window.location.search).get("p");
if (redirectedPath) {
  window.history.replaceState(null, "", redirectedPath);
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
);
