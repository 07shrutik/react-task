import React from "react";
import "./Home.css";
import SearchInput from "../components/SearchInput";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="main_div">
      <div className="myapp">
        <h1>My App</h1>
      </div>
      <div className="listLink">
        <span>
          <Link to="/favorite_list">Go to my favorite package list</Link>
        </span>
      </div>
      <div className="searchBox">
        <h2>Search for NPM Packages</h2>
        <SearchInput placeholder="Search NPM Packages" />
      </div>
    </div>
  );
}
