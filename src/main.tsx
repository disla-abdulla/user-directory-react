import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import FavoriteProvider from "./context/FavoriteContext.tsx";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <FavoriteProvider>
      <App />
    </FavoriteProvider>
  </BrowserRouter>
);
