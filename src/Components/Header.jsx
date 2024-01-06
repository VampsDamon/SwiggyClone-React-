import logo from "../images/SiteLogo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName ,setBtnName]=useState("Login");
  const onlineStatus=useOnlineStatus();
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
            Online Status : {onlineStatus?"🟢":"🔴"}
          </li>
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