import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import useAuth from "../../../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();
  return (
    <Fragment className="topbar">
      <nav className="navbar navbar-expand-lg header-bg-color">
        <div className="container">
          <a className="navbar-brand nav-image" href="#">
            <img src="https://i.ibb.co/Lk5gB1x/cycle-house-logo.png" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <div className="me-auto"></div>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <Link className="Nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-2">
                  <Link className="Nav-link" to="/exploreCycle">
                    Explore
                  </Link>
                </li>
                {user.email ? (
                  <>
                    <li className="nav-item mx-2">
                      <Link className="Nav-link" to="/dashboard">
                        DashBoard
                      </Link>
                    </li>
                    <li className="nav-item mx-2">
                      <Link className="Nav-link" onClick={logout} to="/">
                        LogOut
                      </Link>
                    </li>
                  </>
                ) : (
                  <li className="nav-item mx-2">
                    <Link className="Nav-link" to="/dashboard">
                      Login
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;
