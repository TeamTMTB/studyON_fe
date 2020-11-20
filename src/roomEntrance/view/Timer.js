import React, { useEffect, useState, useRef } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import io from "socket.io-client";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import soundUrl from "../images/sound.mp3";
import Sound from "react-sound";
import "../scss/Timer.scss";

export default function Timer(props) {
    const { mySocket, owner, room, currentUser, updateIsPlaying } = props;
    const [playing, setPlaying] = useState(false);
    const [audioOn, setAudioOn] = useState("");
    const [yourID, setYourID] = useState();
    const [count, setCount] = useState(0);
    const [role, setRole] = useState(owner);
    const [study, setStudy] = useState(room.studyTime * 60);
    const [breakTime, setBreak] = useState(room.breakTime * 60000);
    const [key, setKey] = useState(0);
    const socketRef = useRef();
    const [remainingTime, setRemainingTime] = useState();
    const [open, setOpen] = React.useState(false);
    const [term, setTerm] = useState(room.maxTerm);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const children = ({ remainingTime }) => {
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        console.log("count");
        return (
            <div className="timer">
                <div className="text">Remaining</div>
                <div className="value">
                    {minutes}:{seconds}
                </div>
                <div className="text">minutes</div>
            </div>
        );
    };

    function sendTimerSign(bool) {
        console.log("dddddd");
        console.log(socketRef.current.id);
        console.log("okay");
        //if(socketRef.current.id === role){
        if (bool) {
            socketRef.current.emit(
                "timer start sign",
                owner,
                socketRef.current.id + "가 timer start!! " + owner
            );
            updateIsPlaying();
            console.log("got it");
        } else socketRef.current.emit("timer stop sign", "timer stop!!");
        //}
    }

    useEffect(() => {
        console.log(mySocket.id);
        socketRef.current = mySocket;
        socketRef.current.on("your id", (id) => {
            setYourID(id);
        });

        socketRef.current.on("timer start", (message) => {
            console.log(message);
            setPlaying(true);
        });
    }, []);

    function countAlarm() {
        setCount(count + 1);
        socketRef.current.emit("alarm off", owner, currentUser.name, count);
        setOpen(false);
    }

    function handleStudyTime(e) {
        setStudy(e.target.value * 60);
        //setStudy(room.studyTime * 60);
        setRemainingTime(study);
        setKey(!key);
    }

    function handleBreakTime(e) {
        //setBreak(e.target.value * 60000);
        setBreak(room.breakTime * 60000);
        setKey(!key);
    }

    return (
        <div className="App">
            <h1>StudyON Timer</h1>
            <div className="timer-wrapper">
                <CountdownCircleTimer
                    isPlaying={playing}
                    duration={study}
                    key={key}
                    colors={[["#004777", 0.33], ["#F7B801", 0.33], ["#A30000"]]}
                    onComplete={() => {
                        setTerm((preTerm) => preTerm + 1);
                        console.log("term: ", term);
                        setOpen(true);
                        setTimeout(handleClose, 5000);
                        return [true, breakTime];
                    }}
                >
                    {children}
                </CountdownCircleTimer>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"쉬는시간 시작"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        공부 끝! 쉬는 시간 시작입니다-!
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={countAlarm} color="primary" autoFocus>
                        Okay
                    </Button>
                </DialogActions>
            </Dialog>

            {/* <Sound
                url="audioFile"
                playStatus={Sound.status.PLAYING}
                playFromPosition={300}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying}
            /> */}

            <div>
                <input
                    type="number"
                    min="1"
                    max="60"
                    name="study"
                    placeholder="Study time"
                    onChange={handleStudyTime}
                />
                <input
                    type="number"
                    min="1"
                    max="60"
                    name="break"
                    placeholder="Break time"
                    onChange={handleBreakTime}
                />
                <button onClick={() => sendTimerSign(true)}>START</button>
            </div>
        </div>
    );
}
