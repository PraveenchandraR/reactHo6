import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
    return (
        <div className="nav">
            <Link to="/" className="link">Home</Link >
            <Link to="/Student" className="link">Student</Link >
      


        </div>
    );
};
export default Nav;