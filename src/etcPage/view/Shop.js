import React from "react";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import Premium from "../image/premium.png";
import PremiumImg1 from "../image/premium_item.png";
import PremiumImg2 from "../image/premium_item2.png";
import PremiumImg3 from "../image/premium_item3.png";
import Point from "../image/point.png";
import Point1 from "../image/point1.png";
import Point2 from "../image/point2.png";
import Point3 from "../image/point3.png";
import "../scss/Shop.scss";

const Shop = () => {
  return (
    <div>
      <Header />
      <div className="top">
        <div className="shop_text">&nbsp; ON SHOP</div>
        <img src={Premium} className="premium"></img>
      </div>

      <div className="middle1">
        <p className="shop_text_m">&nbsp;&nbsp;프리미엄 이용권</p>
        <img src={PremiumImg1} className="premium"></img> &nbsp;&nbsp;
        <img src={PremiumImg2} className="premium"></img> &nbsp;&nbsp;
        <img src={PremiumImg3} className="premium"></img>
      </div>

      <div className="middle1">
        <p className="shop_text_m">&nbsp;&nbsp; 포인트 구매</p>
        <img src={Point} className="premium"></img> &nbsp;&nbsp;
        <img src={Point1} className="premium"></img> &nbsp;&nbsp;
        <img src={Point2} className="premium"></img> &nbsp;&nbsp;
        <img src={Point3} className="premium"></img>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Shop;
