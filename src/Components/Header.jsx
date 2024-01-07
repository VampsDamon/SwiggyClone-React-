import logo from "../images/SiteLogo.png";
import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Header = () => {
  const [btnName ,setBtnName]=useState("Login");
  const onlineStatus=useOnlineStatus();
  const {loggedInUser,setUserName}=useContext(UserContext);
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img className="logoimg" src={logo} />
        </Link>
      </div>
      <div className="user">
        <label className="mx-2">User :</label>
        <input
          className="bg-white text-black border-2 my-2 p-1 border-black rounded-md"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div>
      <div className="nav-item">
        <ul>
          <li>Online Status : {onlineStatus ? "🟢" : "🔴"}</li>
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
          <li>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );};

export default Header;