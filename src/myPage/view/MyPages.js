import React, { Component } from "react";
import "../scss/MyPages.scss";
import { Card } from "antd";
import Profile from "../images/Profile.png";
import Header from "../../header/view/Header";
import Footer from "../../footer/view/Footer";
import TodoContainer from "../container/TodoContainer";
import CalendarContainer from "../container/CalendarContainer";
import { inject, observer } from "mobx-react";

@inject("TodoStore", "UserStore")
@observer
class MyPages extends Component {
  render() {
    const date = this.props.TodoStore.getDate;

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
              <p><strong>Name:</strong> &nbsp; {this.props.currentUser.name}</p>
              <p><strong>Email:</strong> &nbsp; {this.props.currentUser.email}</p>
              <p><strong>Your Point:</strong> &nbsp; {this.props.UserStore.getCurPoint}</p>
            </Card>
          </div>
        </div>

        <div className="row2">
          <div className="todo">
            <strong style={{ fontSize: "11px" }}>{date}</strong>
            <TodoContainer />
          </div>
          <CalendarContainer date={date} />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default MyPages;
