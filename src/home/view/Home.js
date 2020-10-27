import React, { Component } from "react";
import "../scss/Home.scss";
import Footer from "../../footer/view/Footer";
import Header from "../../header/view/Header";
import Section1 from "../view/Section/Section1";
import Section2 from "../view/Section/Section2";
import Section3 from "../view/Section/Section3";

class Home extends Component {
  render() {
    return (
      <>
        {/* header */}
        <Header />

        {/* section1 */}
        <Section1 />
        {/* section2 */}
        <Section2 />
        {/* section3 */}
        <Section3 />
        {/* footer */}
        <Footer />
      </>
    );
  }
}

export default Home;
