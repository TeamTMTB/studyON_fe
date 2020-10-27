import React, { Component } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import "../scss/Navbar.scss";
import Navbar from "./Navbar/Navbar";
import ButtonTemplate from "../../icon/view/ButtonTemplate";

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

          <div className="button_login">
            <Link to="/login" className="button_text">
              <ButtonTemplate text={"LOGIN"} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
