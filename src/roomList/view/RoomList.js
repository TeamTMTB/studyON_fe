import React, { Component } from "react";
import RoomListView from "./RoomListView";
import SearchBar from "./SearchBar";

function RoomList() {
  return (
    <>
      <SearchBar />
      <RoomListView />
    </>
  );
}

export default RoomList;
