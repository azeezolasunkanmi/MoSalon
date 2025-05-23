import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BookingContextProvider } from "./store/BookingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BookingContextProvider>
      <App />
    </BookingContextProvider>
  </StrictMode>
);
