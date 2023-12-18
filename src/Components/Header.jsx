import logo from "../images/SiteLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName ,setBtnName]=useState("Login");
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="logoimg" src={logo} />
        </Link>
      </div>
      <div className="nav-item">
        <ul>
          <li>
            <Link className="links" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="links" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="links" to="/cart">
              Cart
            </Link>
          </li>
          <li>
            <button
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );};

export default Header;