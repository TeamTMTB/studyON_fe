import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import RoomEntranceView from "../view/RoomEntranceView";

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
        Store.mySocket.on("enter event", (res) => {
            console.log(res + "가 입장!");
        });
        Store.mySocket.on("leave event", (res) => {
            console.log(res + "가 나감!");
        });
    }

    componentWillUnmount() {
        const { Store } = this.props;
        Store.mySocket.emit("leave room", {
            owner: this.props.match.params.id,
        });
    }
    updateIsPlaying = () => {
        const { Store } = this.props;
        let room = this.props.Store.room;
        Store.updateIsPlaying(room);
    };
    render() {
        //const roomList = this.props.Store.getRoomList;
        const mySocket = this.props.Store.mySocket;
        const room = this.props.Store.getRoom;
        const rooms = this.props.Store.getRoomList;
        const currentUser = this.props.UserStore.getCurrentUser;
        console.log(this.props.match);
        console.log(rooms);

        return (
            <RoomEntranceView
                mySocket={mySocket}
                room={room}
                rooms={rooms}
                match={this.props.match}
                owner={this.props.match.params.id}
                currentUser={currentUser}
                updateIsPlaying={this.updateIsPlaying}
            />
        );
    }
}

export default RoomEntranceContainer;
