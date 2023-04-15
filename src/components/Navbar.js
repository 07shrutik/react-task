import React from "react";
import { Link } from "react-router-dom";
import "./Assign8.css";
const Navbar = () => {
  return (
    <>
      <nav>
        {/* <button></button> */}
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/create">Create Note</Link>
        </button>
      </nav>
      {/* <h1> Welcome to Home Page</h1> */}
    </>
  );
};

export default Navbar;
