import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
//import { tileData } from "../tileData.json";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import ButtonTemplate from "../../icon/view/ButtonTemplate";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import { PropTypes } from "mobx-react";

const UseStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: "100%",
        padding: "0 5rem 0 5rem",
        // height: 450,
    },
    icon: {
        color: "rgba(255, 255, 255, 0.54)",
    },
    img: {
        width: "252px",
        position: "absolute",
        top: "-60px",
    },
}));

// function DialogView(room) {
//     // const { room } = props;
//     const [open, setOpen] = useState(false);
//     // const isPlaying = room.isPlaying;
//     const handleClose = () => {
//         setOpen(false);
//         console.log(room.isPlaying);
//     };
//     return room.isPlaying ? (
//         <Dialog
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//             className="dialog"
//         >
//             <DialogTitle id="alert-dialog-title" className="dialog-title">
//                 {`${room.title}에 입장하시겠습니까?`}
//             </DialogTitle>
//             <DialogContent className="big-input-block">
//                 <div class="input-block">
//                     <span className="content-title">공부 시작 시간</span>
//                     <span>
//                         {moment(room.startTime).format("YYYY-MM-DD hh:mm a")}
//                     </span>
//                 </div>
//                 <div class="input-block">
//                     <span className="content-title">공부 시간</span>
//                     <span>{room.studyTime} 분</span>
//                 </div>
//                 <div class="input-block">
//                     <span className="content-title">쉬는 시간</span>
//                     <span>{room.breakTime} 분</span>
//                 </div>
//                 <div class="input-block">
//                     <span className="content-title">현재 인원</span>
//                     <span>1 바꿔야됨</span>
//                 </div>
//                 <div class="input-block">
//                     <span className="content-title">최대 인원</span>
//                     <span>{room.maxPeopleNum} 명</span>
//                 </div>
//                 <div class="input-block">
//                     <span className="content-title">현재 싸이클</span>
//                     <span>1 바꿔야됨</span>
//                 </div>
//                 <div class="input-block">
//                     <span className="content-title">총 싸이클 횟수</span>
//                     <span>{room.maxTerm} 회</span>
//                 </div>
//             </DialogContent>
//             <DialogActions>
//                 <Link to={`/room-entrance/${room.owner}`}>
//                     <ButtonTemplate text={"방 입장"} />
//                 </Link>
//             </DialogActions>
//         </Dialog>
//     ) : (
//         <Dialog
//             open={open}
//             onClose={handleClose}
//             aria-labelledby="alert-dialog-title"
//             aria-describedby="alert-dialog-description"
//             className="dialog"
//         >
//             <DialogTitle id="alert-dialog-title" className="dialog-title">
//                 이미 공부 시작된 방입니다!
//             </DialogTitle>
//             <DialogActions>
//                 <ButtonTemplate onClick={handleClose} text={"나가기"} />
//             </DialogActions>
//         </Dialog>
//     );
// }

// DialogView.propTypes = {
//     open: PropTypes.bool.isRequired,
// };

export default function RoomListView(props) {
    const classes = UseStyles();
    const { rooms, room, setRoom, mySocket } = props;
    const [open, setOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const socketRef = useRef();

    const handleClickOpen = (owner) => {
        setOpen(true);
        setRoom(owner);
    };
    // const handleClickOpen = (owner) => {
    //     DialogView();
    // };

    const handleClose = () => {
        setOpen(false);
        console.log(room.isPlaying);
    };

    // const modalOpen = () =>
    // useEffect(() => {
    //     socketRef.current = mySocket;
    //     socketRef.current.on("start", (isPlaying) => {
    //         setIsPlaying(isPlaying);
    //     });
    // }, []);

    // console.log(isPlaying);
    // console.log(JSON.parse(room.isPlaying);

    return (
        <div className={classes.root}>
            <GridList cols={5} cellHeight={180} className={classes.gridList}>
                {rooms.map((room) => {
                    return (
                        <GridListTile
                            key={room.owner}
                            // onClick={() => handleClickOpen(room.owner)}
                            onClick={() => handleClickOpen(room.owner)}
                        >
                            <img
                                src={require("../../home/images/studyon.png")}
                                alt=""
                                className={classes.img}
                            />
                            <GridListTileBar
                                title={room.title}
                                subtitle={
                                    <span>
                                        {" "}
                                        {room.tag
                                            ? room.tag
                                                  .split(",")
                                                  .map((tag) => `#${tag} `)
                                            : null}
                                    </span>
                                }
                                actionIcon={
                                    <IconButton
                                        aria-label={`info about ${room.title}`}
                                        className={classes.icon}
                                    >
                                        <InfoIcon />
                                    </IconButton>
                                }
                            />
                        </GridListTile>
                    );
                })}
            </GridList>
            {room.isPlaying === "false" ? (
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="dialog"
                >
                    <DialogTitle
                        id="alert-dialog-title"
                        className="dialog-title"
                    >
                        {`${room.title}에 입장하시겠습니까?`}
                    </DialogTitle>
                    <DialogContent className="big-input-block">
                        <div class="input-block">
                            <span className="content-title">
                                공부 시작 시간
                            </span>
                            <span>
                                {moment(room.startTime).format(
                                    "YYYY-MM-DD hh:mm a"
                                )}
                            </span>
                        </div>
                        <div class="input-block">
                            <span className="content-title">공부 시간</span>
                            <span>{room.studyTime} 분</span>
                        </div>
                        <div class="input-block">
                            <span className="content-title">쉬는 시간</span>
                            <span>{room.breakTime} 분</span>
                        </div>
                        <div class="input-block">
                            <span className="content-title">현재 인원</span>
                            <span>1 바꿔야됨</span>
                        </div>
                        <div class="input-block">
                            <span className="content-title">최대 인원</span>
                            <span>{room.maxPeopleNum} 명</span>
                        </div>
                        <div class="input-block">
                            <span className="content-title">현재 싸이클</span>
                            <span>1 바꿔야됨</span>
                        </div>
                        <div class="input-block">
                            <span className="content-title">
                                총 싸이클 횟수
                            </span>
                            <span>{room.maxTerm} 회</span>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Link to={`/room-entrance/${room.owner}`}>
                            <ButtonTemplate text={"방 입장"} />
                        </Link>
                    </DialogActions>
                </Dialog>
            ) : (
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    className="dialog"
                >
                    <DialogTitle
                        id="alert-dialog-title"
                        className="dialog-title"
                    >
                        이미 공부 시작된 방입니다!
                    </DialogTitle>
                    <DialogActions>
                        <ButtonTemplate onClick={handleClose} text={"나가기"} />
                    </DialogActions>
                </Dialog>
            )}
        </div>
    );
}
