import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomEntranceView from "../view/RoomEntranceView";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

@inject("Store", "UserStore")
@observer
class RoomEntranceContainer extends Component {
  componentDidMount() {
    const { Store } = this.props;
    const { UserStore } = this.props;
    const currentUser = UserStore.getCurrentUser;
    console.log("roomentrance did mount!!!");
    // Store.roomList();
    //Store.mySocket.emit("enter room", {owner: this.props.match.params.id, userId: Store.mySocket.id});
    Store.mySocket.emit("enter room", {
      owner: this.props.match.params.id,
      userId: currentUser.name,
    });
    Store.mySocket.on("enter event", (owner, res) => {
      console.log(res + "가 입장!");
      Store.mySocket.emit("send user", owner, res);
    });

    //방 입장시 포인트 차감(일반유저)
    const notify = () => toast("포인트가 차감되었습니다.");
    notify();

    //방 나가기
    Store.mySocket.on("leave event", (res) => {
      console.log(res + "가 나감!");
    });

    //방 텀 보여주기
    Store.mySocket.on("show the current term", (owner, term) => {
      console.log("term: " + term);
    });
  }

  componentDidUpdate(prevProps, prevState) {
    const { Store } = this.props;
    Store.mySocket.on("enter event", (owner, res) => {
      Store.mySocket.emit("send user", owner, res);
    });
  }
  componentWillUnmount() {
    const { Store } = this.props;
    Store.mySocket.emit("leave room", {
      owner: this.props.match.params.id,
    });
  }
  onUpdateIsPlaying = () => {
    const { Store } = this.props;
    let room = this.props.Store.room;
    Store.updateIsPlaying(room);
  };

  onRefundPoint = () => {
    const { UserStore } = this.props;
    UserStore.setUserPointProp("state", "refund");
    UserStore.modifyPoint(UserStore.point);
    console.log("studyking 포인트 50 환급", UserStore.point);
  };

  onRecreateCheck = () => {
    this.props.Store.setContinueRoom(true);
    console.log("getContinueRoom: ***" + this.props.Store.getContinueRoom);
  };

  onRecreateRoom = () => {
    const { Store, UserStore } = this.props;
    console.log("my socket id is: " + Store.mySocket.id);
    let room = this.props.Store.room;
    Store.roomRecreate(room);
    this.props.Store.setContinueRoom(true);
    UserStore.setUserPointProp("state", "makeRoom");
    UserStore.setUserPointProp("owner", true);
    UserStore.modifyPoint(UserStore.point);
  };

  render() {
    const mySocket = this.props.Store.mySocket;
    const room = this.props.Store.getRoom;
    const rooms = this.props.Store.getRoomList;
    const currentUser = this.props.UserStore.getCurrentUser;
    console.log(this.props.match);
    console.log(rooms);

    return (
      <div>
        <RoomEntranceView
          store={this.props.Store}
          mySocket={mySocket}
          room={room}
          rooms={rooms}
          match={this.props.match}
          owner={this.props.match.params.id}
          currentUser={currentUser}
          onUpdateIsPlaying={this.onUpdateIsPlaying}
          onRefundPoint={this.onRefundPoint}
          onRecreateCheck={this.onRecreateCheck}
          onRecreateRoom={this.onRecreateRoom}
        />
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default RoomEntranceContainer;
