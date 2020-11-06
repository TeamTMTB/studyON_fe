import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomListView from "../view/RoomListView";
import io from "socket.io-client";

@inject("Store")
@observer
class RoomListViewContainer extends Component {
  componentDidMount() {
    const { Store } = this.props;
    
    const socket = io.connect("http://localhost:8000");

    socket.on("your id", (id) => {
      console.log("서버로부터 받은 소켓 아이디 " + id);
      Store.setMySocketId(id);
    })
    //Store.initRoomList();
    socket.emit("test", "test send");
    Store.roomList();

  }

  render() {
    //const rooms = this.props.Store.getTileRooms;
    const rooms = this.props.Store.getRoomList;
    return <RoomListView rooms={rooms} />;
  }
}

export default RoomListViewContainer;
