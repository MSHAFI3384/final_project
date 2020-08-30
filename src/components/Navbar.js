import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ data }) => {
  const aMainStyle = {
    color: "green",
    fontWeight: "bold",
    fontSize: 20,
  };

  const aStyle = {
    color: "orange",
    margin: 10,
  };
  return (
    <React.Fragment>
      <nav className="navbar  bg-dark">

        <div class='row' style={{width:"100%"}}>
          
            <a  class='navbar nav' href="/" style={aMainStyle}>
              {data}
            </a>

            <a href="/resume" style={aStyle}>
              Resume
            </a>

            <a href="/project" style={aStyle}>
              Projects
            </a>

            <a href="/contact" style={aStyle}>
              Contact
            </a>

        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
