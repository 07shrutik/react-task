import React from "react";
import Assign8 from "./components/Assign8";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Assign8 />} />
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
