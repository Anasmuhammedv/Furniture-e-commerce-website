import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import Home from "./Home";
import Collection from "./Collection";
import { UserContextProvider } from "./UserContextProvider";
import { Globalcontext } from "./GlobalContext";
import { HiOutlineLogout } from "react-icons/hi";
import { FaUserLock } from "react-icons/fa6";

function Header() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState("");
  const [user, setUser] = useContext(Globalcontext);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/Search/${searchData}`);
    setSearchData("");
  };

  return (
    <nav
      className="custom-navbar navbar navbar-expand-md navbar-dark bg-dark"
      aria-label="Furni navigation bar "
    >
      <div className="container ">
        <NavLink className="navbar-brand fs-2"  to={"/"}>
          Haven Home<span>...</span>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsFurni"
          aria-controls="navbarsFurni"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarsFurni">
          <form className="d-flex" role="search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchData(e.target.value)}
            />
          </form>

          <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Bed"}>
                Bed
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Sofa"}>
                Sofa
              </NavLink>
             
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Table"}>
                Table
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Chair"}>
                Chair
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Wardrobe"}>
                Wardrobe
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/Collection"}>
                Collections
              </NavLink>
            </li>
          </ul>

          <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5 ">
            <li className="nav-item ms-1">
              {user ? (
                <HiOutlineLogout
                  onClick={() => setUser("")}
                  style={{ color: "red" }}
                />
              ) : (
                setUser(null)
              )}
            </li>
            <li className="nav-item ">
              <NavLink className="nav-link" to={'/LoginForm'}>
                <FaUser />
              </NavLink>
              <p className="mt-100px text-start" style={{ color: "white" }}>
                {user ? user.name : "not logged"}{" "}
              </p>
            </li>

            <li
              className="nav-item m-l-19px"
              onClick={() =>
                user ? navigate("/cart") : navigate("/Loginform")
              }
            >
              <h4 style={{ color: "blue" }}>{user ? user.cart.length : ""}</h4>
              <NavLink className="nav-link " to={"/Cart"}>
                <FaShoppingCart />
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={"/AdminLogin"}>
                {" "}
                <FaUserLock style={{ color: "white" }} />{" "}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
