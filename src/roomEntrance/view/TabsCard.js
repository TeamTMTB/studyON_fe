import { Card } from "antd";
import React from "react";

const tabListNoTitle = [
  {
    key: "timer",
    tab: "타이머",
  },
  {
    key: "notice_board",
    tab: "공지",
  },
  {
    key: "member",
    tab: "멤버",
  },
];

const contentListNoTitle = {
  timer: <p>타이머~~</p>,
  notice_board: <p>공지~~</p>,
  member: <p>멤버~~</p>,
};

class TabsCard extends React.Component {
  state = {
    noTitleKey: "timer",
  };

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <>
        <Card
          style={{ width: "100%", height: "40rem" }}
          tabList={tabListNoTitle}
          activeTabKey={this.state.noTitleKey}
          onTabChange={(key) => {
            this.onTabChange(key, "noTitleKey");
          }}
        >
          {contentListNoTitle[this.state.noTitleKey]}
        </Card>
      </>
    );
  }
}
export default TabsCard;
