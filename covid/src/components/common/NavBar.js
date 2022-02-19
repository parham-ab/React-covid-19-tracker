import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container">
      <ul>
        <li>
          <Link to="/countries">Country Lists</Link>
        </li>
        <li>
          <Link to="/worldwide">Covid-19 Worldwide</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
