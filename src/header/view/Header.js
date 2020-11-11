import React, { Component } from "react";
import {Link, NavLink } from "react-router-dom";
import "../scss/Navbar.scss";
import Navbar from "./Navbar/Navbar";
import Button from "@material-ui/core/Button";

import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

class Header extends Component {
  
  render() {
    return (
      <div>
        {/* header */}
        <div className="header">
          <Navbar className="navbar" />
          <img
            src={require("../images/logo_mini1.gif")}
            alt=""
            className="header_logo"
          />
            <div className="button_myPages">
            { this.props.authenticated ? (
                <ul>
                    <li>
                        <NavLink to="/profile">Profile</NavLink>
                    </li>
                    <li>
                        <a onClick={this.props.onLogout}>Logout</a>
                    </li>
                </ul>
            ): (
                <ul>
                    <li>
                        <NavLink to="/login">Login</NavLink>        
                    </li>
                    <li>
                        <NavLink to="/signup">Signup</NavLink>        
                    </li>
                </ul>
            )}
              
            </div>
        </div>
      </div>
    );
  }
}

export default Header;
