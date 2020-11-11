import React from 'react'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from "@fullcalendar/interaction";
import "./calendar.scss"

export default class NewCalendar extends React.Component {

    render() {
        const { handleDateClick } = this.props;
        return (
            <div className="calendar_wrap">
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[dayGridPlugin, interactionPlugin]}
                    events={[{ title: "출석완료", date: "2020-10-31" }]}
                    dateClick={handleDateClick}
                    backgroundColor={'#378006'}
                />
            </div>

        )
    }
}