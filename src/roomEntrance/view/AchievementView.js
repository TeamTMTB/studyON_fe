import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import studyKing from "./studyKing";
// styling
import "../scss/Achievement.css";
import Column from "antd/lib/table/Column";
import { Socket } from "socket.io-client";
// images

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",

    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    flexWrap: "wrap",
    alignItems: "flex-start",

    "& > *": {
      margin: theme.spacing(0),
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  },
}));

const AchievementView = (props) => {
  const { setPopUp, mySocket } = props;
  // const [studyKings, setStudyKings] = useState();
  const classes = useStyles();
  const studyKings = studyKing;
  // useEffect(() => {
  //     mySocket.on("study king", studyKings);
  //     setStudyKings(studyKings);
  // })

  const { onClickGood, onClickNormal, onClickBad } = props;

  return (
    <div className="PopUp">
      {/* x close window */}
      <button className="popup-x" onClick={() => setPopUp(false)}>
        X
      </button>
      <div className="today-king">
        <h3>오늘의 공부왕</h3>
      </div>
      <div className="study-king-container">
        {studyKings?.map((value) => {
          return (
            <div className={classes.root}>
              <Avatar alt="T" src={require("./popup/tomato.jpg")} />
              <p className="study-king">{value.name}</p>
            </div>
          );
        })}
      </div>
      <div className="pu-content-container">
        {/* <img className="pu-img" alt="bone" /> */}
        <h2>오늘 한 공부에 만족하셨습니까? ^_^</h2>
      </div>
      {/* button controls */}
      <div classes="three-btn">
        <button onClick={onClickBad} className="left_btn">
          불만족!
        </button>
        <button onClick={onClickNormal} className="center_btn">
          보통!
        </button>
        <button onClick={onClickGood} className="right_btn">
          만족!
        </button>
      </div>
    </div>
  );
};

export default AchievementView;
