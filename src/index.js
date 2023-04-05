import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";

const dartTheme = {
  textColor:"Whitesmoke",
  backgroundColor:"#111",
}

const lightTheme = {
  textColor:"#111",
  backgroundColor:"Whitesmoke",
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dartTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
