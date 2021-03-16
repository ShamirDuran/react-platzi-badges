import React from "react"; // necesario pra uar jsx, escribir html dentro de js
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
import App from "./components/App";

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(<App />, container);
