import React from "react";
import "../scss/RoomEntrance.scss";
import TabsCard from "./TabsCard";
import { Card } from "antd";
import { Checkbox } from "antd";

function onChange(e) {
  console.log(`checked = ${e.target.checked}`);
}

const RoomEntrance = () => {
  return (
    <div className="RoomEntrance_wrap">
      <div className="RoomEntrance_title">title</div>

      <div className="RoomEntrance_container">
        <div className="RoomEntrance_left">
          <Card title="MY TODO LIST" className="RoomEntrance_left_item">
            <Checkbox onChange={onChange}>todo....</Checkbox>
          </Card>
          <Card title="Acheivement" className="RoomEntrance_left_item"></Card>
        </div>

        <div className="RoomEntrance_right">
          <TabsCard />
        </div>
      </div>
    </div>
  );
};

export default RoomEntrance;
