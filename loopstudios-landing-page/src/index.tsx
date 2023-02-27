import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (container) {
  createRoot(container).render(<App />);
} else {
  throw new Error("No container to render to");
}
