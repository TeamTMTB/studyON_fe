import React, { Component, useState, useEffect } from "react";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import TimePicker from "../Container/TimePicker";
import "../scss/roomCreate.scss";
import { Link } from "react-router-dom";
import tagData from "../../roomList/tagData";
import Chip from "@material-ui/core/Chip";

const RoomCreateForm = (props) => {
  const { mySocket, room, onSetRoom, onAddRoom } = props;
  const [tagName, setTagName] = React.useState([]);

  const handleChange = (event) => {
    setTagName(event.target.value);
    onSetRoom("tag", event.target.value.toString());
  };
  return (
    <div>
      {/* <button onClick={this.goBack}>취소</button> */}
      <div style={{ position: "relative" }}>
        <img
          src={require("../images/roomCreate.jpg")}
          alt="create_img"
          className="create_img"
          style={{ height: "350px", width: "500px", marginLeft: "-50px" }}
        />
        <div style={{ position: "absolute", left: "230px", top: "35rem", color: "red" }}>
          * 방 생성 시 100 포인트가 차감됩니다 *
        </div>
      </div>
      <form className="room_create_form" style={{ marginTop: "-350px" }}>
        <div>
          <strong>TITLE</strong> &nbsp;
          <Input
            //name="title"
            onChange={(e) => onSetRoom("title", e.target.value)}
            value={room.title}
            className="form_title"
            variant="outlined"
            color="secondary"
          />
        </div>
        <div>
          <br /> <strong>Description 공지</strong>&nbsp;
          <TextField
            multiline
            rows={3}
            fullWidth
            variant="outlined"
            //name="description"
            onChange={(e) => onSetRoom("description", e.target.value)}
            value={room.description}
            color="secondary"
            className="form_desc"
          />
        </div>
        <div>
          <br />
          <strong>Tag</strong> &nbsp;
          <Select
            //name="tag"
            // value={room.tag}
            onChange={handleChange}
            // onChange={(e) => onSetRoom("tag", e.target.value)}
            className="form_tag"
            color="secondary"
            multiple
            value={tagName}
            renderValue={(selected) => (
              <div className="chips">
                {selected.map((value) => (
                  <Chip key={value} label={value} className="chip" />
                ))}
              </div>
            )}
          >
            {tagData.map((tag) => (
              <MenuItem
                key={tag.id}
                value={tag.title}
              // style={getStyles(name, personName, theme)}
              >
                {tag.title}
              </MenuItem>
            ))}
          </Select>
        </div>

        <div>
          <br />
          <strong>People Number</strong> &nbsp; &nbsp;
          <TextField
            //name="maxPeopleNum"
            type="number"
            value={room.maxPeopleNum}
            onChange={(e) => onSetRoom("maxPeopleNum", e.target.value)}
            margin="normal"
            className="form_number"
            color="secondary"
          />
        </div>
        <div>
          <br />
          <strong>Start Time 시작시간</strong> &nbsp; &nbsp;
          <TimePicker
            value={room.startTime}
            onChange={(e) => onSetRoom("startTime", e)}
          //name="startTime"
          />
        </div>
        <div>
          <br />
          <span>
            <strong>StudyTime 공부시간</strong> &nbsp; &nbsp;
          <TextField
              //name="studyTime"
              type="number"
              value={room.studyTime}
              onChange={(e) => onSetRoom("studyTime", e.target.value)}
              margin="normal"
              className="form_number"
              color="secondary"
            />
          </span>
          <span style={{ marginLeft: "180px" }}>
            <strong>BreakTime 쉬는시간</strong> &nbsp; &nbsp;
          <TextField
              //name="breakTime"
              type="number"
              value={room.breakTime}
              onChange={(e) => onSetRoom("breakTime", e.target.value)}
              margin="normal"
              className="form_number"
              color="secondary"
            />
          </span>
        </div>
        <div>
          <br />
          <strong>Term 횟수</strong> &nbsp; &nbsp;
          <TextField
            //name="maxTerm"
            type="number"
            value={room.maxTerm}
            onChange={(e) => onSetRoom("maxTerm", e.target.value)}
            margin="normal"
            className="form_number"
            color="secondary"
          />
        </div>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={onAddRoom}
          style={{ float: "right", marginRight: "50px" }}
        >
          <Link to={`/room-entrance/${mySocket.id}`} className="button_text">
            등록
          </Link>
        </Button>
      </form>
    </div>
  );
};

export default RoomCreateForm;
