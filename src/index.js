import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { makeServer } from "./server";
import {BrowserRouter as Router} from 'react-router-dom'
import { HomeProvider } from "./context/HomeContext";
import { AuthProvider } from "./context/AuthContext";
import { ProductListProvider } from "./context/ProductListContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <HomeProvider>
          <ProductListProvider>
            <App />
          </ProductListProvider>
        </HomeProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);