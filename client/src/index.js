import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Footer from "./component/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Header />
    <h1>Hello React!</h1>
    <Footer />
  </React.StrictMode>
);
