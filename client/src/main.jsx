import React from "react";
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App";
import { DataProvider } from "./assets/Component/DataContext";
ReactDOM.render(<DataProvider><App/></DataProvider>,document.getElementById("root"))