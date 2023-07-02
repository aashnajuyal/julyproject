import React from 'react'
import { Link } from "react-router-dom"
import "./navbar.css"
function Navbar() {
  return (
    <header>
        <div id="navbar">
        <div id="navbarcontent">
        <img src="https://cginfinity.com/wp-content/uploads/2022/04/cgi-logo.svg" alt="companyLogo" />
           
        </div>
        <div id="registration">
          <Link to="/login" className="navelements">LOGIN</Link>
          <Link to="/signup" className="navelements">SIGNUP</Link>
          </div>
        </div>
    </header>
  )
}

export default Navbar
