import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./User.jsx";
import Score from "./Score.jsx";
import AdminLogin from "./Admin/AdminLogin.jsx";
import AdminRegister from "./Admin/AdminRegister.jsx";
import StudentLogin from "./Student/StudentLogin.jsx";
import StudentResgiter from "./Student/StudentResgiter.jsx";
import Admin from "./Admin.jsx";
import UserScore from "./Admin/UserScore.jsx";
import AdminHome from "./Admin/AdminHome.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/adminLogin" element={<AdminLogin />} />
          <Route path="/adminRegister" element={<AdminRegister />} />
          <Route path="/studentLogin" element={<StudentLogin />} />
          <Route path="/studentRegister" element={<StudentResgiter />} />
          <Route path="/userScore" element={<UserScore />} />
          <Route path="/studentRegister" element={<StudentResgiter />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user" element={<User />} />
          <Route path="/score" element={<Score />} />
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </RecoilRoot>
  </React.StrictMode>
);
