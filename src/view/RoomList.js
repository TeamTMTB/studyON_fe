import React, { Component } from "react";
import { Link } from "react-router-dom";
import ListView from "./ListView";
import SearchBar from "./SearchBar";

function RoomList() {
    return (
        <div className="App">
            <SearchBar />

            <ListView />
        </div>
    );
}

export default RoomList;
