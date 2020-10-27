import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import Background from "../../images/mainpage-bg.png";
import "../../scss/Home.scss";

var sectionStyle = {
  width: "100%",
  height: "43rem",
  backgroundImage: `url(${Background})`,
};
class Section1 extends Component {
  render() {
    return (
      <>
        <section style={sectionStyle} id="section1">
          <img
            src={require("../../images/studyon.png")}
            alt=""
            className="logo"
          />
          <div className="logo_desc">
            Take responsibility for your study time
          </div>

          <Link
            activeClass="active"
            to="section2"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <h3 className="scroll_next">Study Mode ON</h3>
          </Link>
        </section>
      </>
    );
  }
}

export default Section1;
