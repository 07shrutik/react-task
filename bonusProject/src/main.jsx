import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User.jsx";
import Score from "./Score.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/user" element={<User />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </RecoilRoot>
  </React.StrictMode>
);
