
import React, { useContext, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaUserLock } from "react-icons/fa";
import { HiOutlineLogout } from "react-icons/hi";
import { Globalcontext } from "./GlobalContext";

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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <NavLink className="navbar-brand fs-2" to={"/"}>
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
          <form className="d-flex me-auto my-2 my-lg-0" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setSearchData(e.target.value)}
            />
          </form>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
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

          <ul className="navbar-nav d-flex align-items-center justify-content-center">
            <li className="nav-item">
              {user && (
                <HiOutlineLogout
                  onClick={() => {
                    setUser("");
                    navigate("/");
                  }}
                  style={{ color: "red", cursor: "pointer" }}
                />
              )}
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/LoginForm"}>
                <FaUser />
                <span className="ms-1">{user ? user.name : "Not logged"}</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to={user ? "/Cart" : "/LoginForm"}
                onClick={() => navigate(user ? "/Cart" : "/LoginForm")}
              >
                <FaShoppingCart />
                {user && <span className="badge bg-dark ms-1"><h5>{user.cart.length}</h5></span>}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/AdminLogin"}>
                <FaUserLock />
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
