import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <>
      <img
        src="https://yt3.ggpht.com/ytc/AKedOLR09bCpy_XTq2scU91URc0pWG0EqS_Yc_Zg-r9pBQ=s900-c-k-c0x00ffffff-no-rj"
        alt="logo"
        className="logo"
      />
      {auth ? (
        <ul className="nav-ul">
          <li>
            <NavLink to="/">Products</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add Products</NavLink>
          </li>
          <li>
            <NavLink to="/update">Update Products</NavLink>
          </li>

          <li>
            <NavLink to="/signup" onClick={logout}>
              Logout ({JSON.parse(auth).name})
            </NavLink>
          </li>
        </ul>
      ) : (
        <ul className="nav-ul nav-right">
          <li>
            <NavLink to="/signup">SignUp</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Nav;
