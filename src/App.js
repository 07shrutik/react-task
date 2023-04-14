import React from "react";
import Assign8 from "./components/Assign8";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Assign8 />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
