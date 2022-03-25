import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import jwtDecode from "jwt-decode";
import refreshToken from "./components/auth/refreshToken";
//import { refreshToken } from "./components/utilities/Helpers";

// gets triggered before each axios request
axios.interceptors.request.use(
  async (config) => {
    if (
      // !config.url.includes("user-auth") &&
      !config.url.includes("refresh-token") &&
      !config.url.includes("login")
    ) {
      let currentDate = new Date();
      const decodedToken = jwtDecode(
        JSON.parse(window.localStorage.getItem("auth")).accessToken
      );
      //  console.log("Inside interceptor");
      if (decodedToken.exp * 1000 < currentDate.getTime()) {
        // get new tokens
        const data = await refreshToken();
        //window.localStorage.setItem("auth", JSON.stringify(data));
        config.headers["authorization"] = "Bearer " + data.accessToken;
      } //if
      else {
        config.headers["authorization"] =
          "Bearer " +
          JSON.parse(window.localStorage.getItem("auth")).accessToken;
      }
    } //if
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

ReactDOM.render(
  /* <React.StrictMode> */
  <App />,
  /* </React.StrictMode> */
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
