import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-social/bootstrap-social.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Home from "./components/HomeComponent";
import Main from "./components/MainComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/HeaderComponent";
import Footer from "./components/FooterComponent";
import Menu from "./components/MenuComponent";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <div className="App">
      <Main />
    </div>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
