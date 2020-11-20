import React, { useState } from "react";
import "../scss/RoomEntrance.scss";
import TabsCard from "./TabsCard";
import { Card } from "antd";
import Timer from "./Timer";
import AcheivementBoard from "./AchievementBoard";
import { Checkbox } from "antd";
import AchievementView from "./AchievementView";
import ButtonTemplate from "../../icon/view/ButtonTemplate";
import { Link } from "react-router-dom";
import AchievementContainer from "../container/AchievementContainer";

const RoomEntranceView = ({
    mySocket,
    room,
    rooms,
    match,
    owner,
    currentUser,
    updateIsPlaying,
}) => {
    // console.log(rooms);
    const params_id = match.params.id;
    //const data = tileData.find((tile) => tile.id === params_id);
    const data = rooms.find((tile) => tile.owner === params_id);
    // console.log(params_id);
    // const data = {};

    const [popUp, setPopUp] = useState(false);
    const duringPopUp = popUp ? "during-popup" : "";

    return (
        <>
            <div className="RoomEntrance_wrap" key={data.owner}>
                <div className="RoomEntrance_title">{data.title}</div>

                <div className="RoomEntrance_container">
                    <div className="RoomEntrance_left">
                        {/* <Card title="MY TODO LIST" className="RoomEntrance_left_item">
              <Checkbox onChange={onChange}>todo....</Checkbox>
              </Card>
            <Card title="Acheivement" className="RoomEntrance_left_item">
            <button onClick={() => setPopUp(true)} className={duringPopUp}>Acheivement</button>
            </Card>
          </div>
          
          <div className="RoomEntrance_right">
            <TabsCard roomData={data} mySocket={mySocket} owner={owner} room={room} />
            </div>
        </div>
        <div>
          {popUp && <PopUp setPopUp={setPopUp} mySocket={mySocket} />}
        </div>
        </div>
    </>
  );
            </Card> */}
            <TabsCard roomData={data} mySocket={mySocket} className="RoomEntrance_left_item" />


                        <Card
                            title="실적 게시판"
                            className="RoomEntrance_left_item"
                        >
                            <AcheivementBoard
                                mySocket={mySocket}
                                owner={owner}
                                room={room}
                                currentUser={currentUser}
                            />
                            <button
                                onClick={() => setPopUp(true)}
                                className={duringPopUp}
                            >
                                실적 게시판
                            </button>
                        </Card>
                    </div>

                    <div className="RoomEntrance_right">
                        {/* <TabsCard roomData={data} mySocket={mySocket} owner={owner} room={room}/> */}
                        <Card title="TIMER">
                            <Timer
                                mySocket={mySocket}
                                owner={owner}
                                room={room}
                                currentUser={currentUser}
                                updateIsPlaying={updateIsPlaying}
                            />
                        </Card>
                        <div className="exit_button">
                            <Link to="/room-list">
                                <ButtonTemplate text={"방 나가기"} />
                            </Link>
                        </div>
                    </div>
                </div>
                <div>
                    {/* {popUp && <AchievementView setPopUp={setPopUp} mySocket={mySocket} />} */}
                    {popUp && (
                        <AchievementContainer
                            popUp={popUp}
                            setPopUp={setPopUp}
                            mySocket={mySocket}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default RoomEntranceView;
