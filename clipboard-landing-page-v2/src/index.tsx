import { createRoot } from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");
if (!container) {
  throw new Error("No container to render to");
}

createRoot(container).render(<App />);
