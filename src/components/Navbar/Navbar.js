import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { ReactComponent as CloseMenu } from "./x.svg"
import { ReactComponent as MenuIcon } from "./menu.svg"
import LoginHooks from "../LoginHooks"
import LogoutHooks from "../LogoutHooks"

import "./Navbar.scss"

const Navbar = ({ logIn, setUser, setLogIn }) => {
  const [click, setClick] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const changeBackground = () => {
    if (window.scrollY >= 711) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener("scroll", changeBackground)
  return (
    <div className="main">
      <div className={navbar ? "header active" : "header"}>
        <div className="title">
          <h2>MARK NOTE</h2>
        </div>

        <ul className={click ? "nav-options active" : "nav-options"}>
          <li
            className={navbar ? "option active" : "option"}
            onClick={closeMobileMenu}
          >
            <NavLink
              exact
              to="/"
              className="nav-item"
              activeClassName="nav-active"
            >
              <p>About Us</p>
            </NavLink>
          </li>
          <li
            className={navbar ? "option active" : "option"}
            onClick={closeMobileMenu}
          >
            <NavLink
              exact
              to="/contact"
              className="nav-item"
              activeClassName="nav-active"
            >
              <p>Contact</p>
            </NavLink>
          </li>
          <li
            className={navbar ? "option active" : "option"}
            onClick={closeMobileMenu}
          >
            {logIn ? (
              <NavLink
                exact
                to="/signin"
                className="nav-item"
                activeClassName="nav-active"
              >
                <LogoutHooks setLogIn={setLogIn} />
              </NavLink>
            ) : (
              <NavLink
                exact
                to="/signin"
                className="nav-item"
                activeClassName="nav-active"
              >
                <LoginHooks setLogIn={setLogIn} setUser={setUser} />
              </NavLink>
            )}
          </li>
        </ul>
        <div className="mobile-menu" onClick={handleClick}>
          {click ? (
            <CloseMenu className="menu-icon" />
          ) : (
            <MenuIcon className="menu-icon" />
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
