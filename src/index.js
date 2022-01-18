import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth.context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    {/* AuthProvider comes from context and wrap the application
    it allows the app to use all its methods in any component-
    isLoading, isLoggedIn, user, signup, login, logout, edit */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
