import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
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
            <Button>
              <PersonOutlineIcon />
              <Link to="/myPages" className="button_login_text">
                Mypage
              </Link>
            </Button>
          </div>
          <div className="button_login">
            <Button>
              <AccountCircleIcon />
              <Link to="/login" className="button_login_text">
                Login
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
