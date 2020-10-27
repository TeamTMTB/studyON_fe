import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../home/view/Home";
import Login from "../login/view/Login";
import RoomCreate from "../view/RoomCreate";
import RoomList from "../roomList/view/RoomList";
import RoomEntrance from "../roomEntrance/view/RoomEntrance";

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
            <Route path="/room-entrance" component={RoomEntrance} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}

export default MainRouter;
