import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import theme from './theme';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from 'styled-components'



ReactDOM.render(
<ThemeProvider theme={theme}>
<App /> 
</ThemeProvider>,
document.getElementById("root"));
