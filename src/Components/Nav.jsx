import React from "react";
import {Link} from "react-router-dom";

// images
import logo from "../img/k-logo-02-white.png";


const Nav = () => {

    return (
      <nav className="main-nav">
         <Link to="/"><img className="nav-logo" src={logo} alt="K"/></Link>
        <ul>
            <Link to="/"><li>Portfolio</li></Link>
            <Link to="/AboutMe"><li>About Me</li></Link>
            
        </ul>
      </nav>
    );
  };
  
  export default Nav;