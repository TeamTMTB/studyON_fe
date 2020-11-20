import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import AchievementView from "../view/AchievementView";

@inject("TodoStore", "UserStore")
@observer
class AchievementContainer extends Component {
  componentDidMount() {
    console.log("achievementContainer: ");
    const { TodoStore } = this.props;
    let currentUser = this.props.UserStore.currentUser;
    let date = this.props.TodoStore.date;
    let dateTodo = this.props.TodoStore.dateTodo;
    dateTodo = TodoStore.todoList(currentUser.id, date);
  }

  onSetAchieveProp = (name, value) => {
    this.props.TodoStore.setAcheiveProp(name, value);
  };

  onClickGood = () => {
    this.props.setPopUp(false);
    let dateTodo = this.props.TodoStore.dateTodo;
    dateTodo.achievment = "good";
    this.props.TodoStore.achievementSave(dateTodo.id, dateTodo.achievment);
  };

  onClickNormal = () => {
    this.props.setPopUp(false);
    let dateTodo = this.props.TodoStore.dateTodo;
    dateTodo.achievment = "normal";
    this.props.TodoStore.achievementSave(dateTodo.id, dateTodo.achievment);
  };

  onClickBad = () => {
    this.props.setPopUp(false);
    let dateTodo = this.props.TodoStore.dateTodo;
    dateTodo.achievment = "bad";
    this.props.TodoStore.achievementSave(dateTodo.id, dateTodo.achievment);
  };

  render() {
    const { setPopUp, mySocket } = this.props;
    let achievements = this.props.TodoStore.achievements;
    console.log(achievements);
    return (
      <div>
        <AchievementView
          setPopUp={setPopUp}
          mySocket={mySocket}
          onClickGood={this.onClickGood}
          onClickNormal={this.onClickNormal}
          onClickBad={this.onClickBad}
        />
      </div>
    );
  }
}

export default AchievementContainer;
