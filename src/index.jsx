import { createRoot } from "react-dom/client";
import { create } from "zustand";
import "./index.css";

import App from "./App";
import { ColorProvider } from "./color-context";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <ColorProvider>
    <App />
  </ColorProvider>
);
