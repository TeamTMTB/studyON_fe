import React from "react";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import "../scss/About.scss";
import UserGuide from "../image/userguide.png";
import HowToUse from "../image/howtouse1.png";
import HowToUse2 from "../image/howtouse2.png";
import Method from "../image/studymethod.png";
import PointGet from "../image/point_get.png";
import PointSub from "../image/point_sub.png";
import PointSub2 from "../image/point_sub2.png";
import PointRef from "../image/point_refund.png";
import PointRef2 from "../image/point_refund2.png";
import Calendar from "../image/calendar.png";
import Todo from "../image/todo.png";

const Shop = () => {
  return (
    <div>
      <Header />
      <div className="top_u">
        <img src={UserGuide}></img>
      </div>
      <div className="middle">
        <p className="guide_text_t">How to use</p>
        <p className="guide_text">
          1. 다른 사람과 함께 공부하고 싶다 ? ('방찾기' Click)
        </p>
        <img src={HowToUse}></img>
      </div>
      <div className="middle">
        <p className="guide_text">
          2. 나만의 공부 습관을 만들고 싶다 ? ('방만들기' Click)
        </p>
        <img src={HowToUse2}></img>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div className="middle2">
        <p className="guide_text_t">studyON's 공부법</p>
        <img src={Method}></img>
      </div>
      <br />
      <hr />
      <div className="bottom">
        <p className="guide_text_t">How to use 'POINT'</p>
        <p className="guide_text">1. 포인트 획득</p>
        <img src={PointGet}></img>
        <br /> <br />
        <p className="guide_text">2. 포인트 차감</p>
        <img src={PointSub}></img> &nbsp;
        <img src={PointSub2}></img>
        <br /> <br />
        <p className="guide_text">3. 포인트 환급</p>
        <p className="guide_text_u">
          for 오늘의 유저 : &nbsp;공부시간이 끝난 후 알람이 울릴때 마다 제때 끈
          유저
        </p>
        <img src={PointRef}></img> &nbsp;
        <img src={PointRef2}></img> &nbsp;
      </div>
      <br />
      <br />
      <br />
      <br />
      <hr />
      <div className="bottom">
        <p className="guide_text_t">How to use 'Calendar/Todo'</p>
        <p className="guide_text">Calendar</p>
        <img src={Calendar}></img> &nbsp;
        <br />
        <br />
        <br />
        <p className="guide_text">Todo</p>
        <img src={Todo}></img> &nbsp;
      </div>
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
