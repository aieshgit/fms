import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/Context";
import { useHistory } from "react-router-dom";

const Navbar = () => {
  const [loginState, setLoginState] = useContext(LoginContext);
  let history = useHistory();

  //when clicked on logout button
  const logout = () => {
    window.localStorage.removeItem("auth");
    setLoginState(null);
    history.push("/login");
  };
  /*   console.log(
    "in Login: user: " + loginState.user + " token: " + loginState.token
  ); */
  // check if user is logged in (that is token is assigned or not)
  if (loginState !== null) {
    //can also use the below condition
    //if (loginState && loginState.token)
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#" to="/dashboard">
            FleetBuddy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler1"
            aria-controls="navbarToggler1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler1">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact
                  to="/dashboard"
                >
                  Dashboard
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact
                  to="/employees"
                >
                  Employees
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact
                  to="/vehicles"
                >
                  Vehicles
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  aria-current="page"
                  exact
                  to="/services"
                >
                  Services
                </NavLink>
              </li>
              {/*             <li className="nav-item">
              <NavLink className="nav-link" exact to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" exact to="/contact">
                Contact
              </NavLink>
            </li> */}
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/odoReadings">
                  Odometer
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to="/fuel">
                  Fuel
                </NavLink>
              </li>
            </ul>
          </div>
          <Link onClick={logout} className="btn btn-outline-light" to="/">
            Logout
          </Link>
        </div>
      </nav>
    );
  } //if
  else {
    return false;
  }
};

export default Navbar;
