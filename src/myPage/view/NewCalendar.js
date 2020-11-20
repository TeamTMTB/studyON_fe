import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import "../scss/calendar.scss";

export default class NewCalendar extends React.Component {
  render() {
    const { handleDateClick, color } = this.props;
    let achievement = this.props.achievement;
    return (
      <div className="calendar_wrap">
        <FullCalendar
          defaultView="dayGridMonth"
          plugins={[dayGridPlugin, interactionPlugin]}
          events={achievement}
          dateClick={handleDateClick}
          //eventColor={color}
        />
      </div>
    );
  }
}
