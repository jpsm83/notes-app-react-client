import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./context/auth.context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
    {/* AuthProvider comes from context and wrap the application
    it allows the app to use all its methods in any component-
    isLoading, isLoggedin, user, signup, login, logout, edit */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
