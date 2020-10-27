import React from "react";
import Background from "../../images/mainpage-bg3.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import ButtonTemplate from "../../../icon/view/ButtonTemplate";

var sectionStyle = {
  width: "100%",
  height: "43rem",
  backgroundImage: `url(${Background})`,
};

const Section3 = () => {
  return (
    <>
      <section style={sectionStyle} id="section3">
        {/* <img
          src={require("../../assets/images/main_photo.png")}
          alt=""
          className="section3_photo"
        /> */}
        <div className="section3_photo_desc">
          <div className="section3_photo_desc_title">studyON은 </div>
          <br />
          <p>여러분의 공부시간을 응원합니다! </p>
          <p>하루의 공부시간을 설정하고 목표량을 달성해보세요.</p>
        </div>

        {/* 링크 */}
        <div className="section3_button_room">
          {/* <Button variant="contained" color="secondary" size="large">
            <Link to="/room-create" className="button_text">
              방 만들기
            </Link>
          </Button> */}

          <Link to="/room-create" className="button_text">
            <ButtonTemplate text={"방 만들기"} />
          </Link>

          <Link to="/room-list" className="button_text">
            <ButtonTemplate text={"방 찾기"} />
          </Link>

          {/* <Button variant="contained" color="secondary" size="large">
            <Link to="/room-list" className="button_text">
              방 찾기
            </Link>
          </Button> */}
        </div>
      </section>
    </>
  );
};

export default Section3;
