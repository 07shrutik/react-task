import React from "react";
import "./Assign8.css";
import { Link } from "react-router-dom";
const Assign8 = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <button>
              <Link to="/home">Home</Link>
            </button>
          </li>
          <li>
            <button>
              <Link to="/contact">Contact</Link>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Assign8;
