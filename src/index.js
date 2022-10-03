import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BookContextProvider } from "./store/book-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BookContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </BookContextProvider>
);
