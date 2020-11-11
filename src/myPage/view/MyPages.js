import React, { Component } from 'react';
import "../scss/MyPages.scss";
import { Card } from "antd";
import Profile from "../images/Profile.png";
import Header from "../../header/view/Header";
import TodoContainer from "./TodoContainer";
import CalendarContainer from "./calendar/CalendarContainer";

class MyPages extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state ={
          date: null,
        }
    }
    render(){
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
                  <p>Name: {this.props.currentUser.name}</p>
                  <p>Email: {this.props.currentUser.email}</p>
                  <p>Your Point: </p>
                </Card>
              </div>
            </div>
      
            <div className="row2">
              <div className="todo">
                <strong style={{ fontSize: "11px" }}>{this.props.date}</strong>
                <TodoContainer />
       
              </div>
              <CalendarContainer date={this.state.date} />
              {/* <div className="calendar">
      
                </div> */}
            </div>
          </div>
        );
              }
}

export default MyPages