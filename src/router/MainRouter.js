import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../view/Home";
import Login from "../view/Login";
import RoomCreate from "../view/RoomCreate";
import RoomList from "../view/RoomList";

class MainRouter extends Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/room-create" component={RoomCreate} />
            <Route path="/room-list" component={RoomList} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default MainRouter;
