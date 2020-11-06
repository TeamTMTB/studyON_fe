import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomEntranceView from "../view/RoomEntranceView";

@inject("Store")
@observer
class RoomEntranceContainer extends Component {
  componentDidMount() {
    const { Store } = this.props;
    Store.roomList();
  }

  render() {
    //const roomList = this.props.Store.getRoomList;
    const rooms = this.props.Store.getRoomList;
    console.log(this.props.match);
    console.log(rooms);
    return <RoomEntranceView rooms={rooms} match={this.props.match} />;
  }
}

export default RoomEntranceContainer;
