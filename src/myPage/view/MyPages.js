import React from "react";
import "../scss/MyPages.scss";
import { Card } from "antd";
import Profile from "../images/Profile.png";
import MyCalendar from "./MyCalendar";
import Header from "../../header/view/Header";

const MyPages = () => {
  return (
    <div className="mypage">
      <Header />
      <div className="row">
        <div className="image">
          <img class="disabled medium ui image" src={Profile} />
        </div>
        <div className="profile">
          <strong style={{ fontSize: "25px" }}>Profile</strong>
          <Card className="profileCard">
            <p>Name: </p>
            <p>Email: </p>
            <p>Your Point: </p>
          </Card>
        </div>

        <div className="row2">
          <div className="todo">
            <Card className="todoCard">
              <strong style={{ fontSize: "18px" }}>Todo List</strong>
              <p>todo1....</p>
              <p>todo2....</p>
              <p>todo3....</p>
            </Card>
          </div>
          <div className="calendar">
            <MyCalendar style={{ width: "100rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPages;
