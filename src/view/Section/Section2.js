import React from "react";
import Background from "../../assets/images/mainpage-bg2.png";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

var sectionStyle = {
  width: "100%",
  height: "43rem",
  backgroundImage: `url(${Background})`,
};

const Section2 = () => {
  return (
    <>
      <section style={sectionStyle} id="section2">
        <div className="section2_desc">
          <div className="section2_desc_bold">지금, 여기서, study mode ON</div>
          <div>지금 바로 시작해보세요</div>
        </div>

        {/* 링크 */}
        <div className="section2_button_room">
          <Button variant="contained" color="secondary" size="large">
            <Link to="/room-create" className="button_text">
              방 만들기
            </Link>
          </Button>

          <Button variant="contained" color="secondary" size="large">
            <Link to="/room-list" className="button_text">
              방 찾기
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default Section2;
