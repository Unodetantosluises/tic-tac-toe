import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Header from "./Header";
import App from "./App";
import Footer from "./Footer";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode> 
    <Header />
      <App />
    <Footer />
  </StrictMode>
);