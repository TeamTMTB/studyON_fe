import React from 'react';
import '../scss/MyPages.scss'
import { Card } from 'antd';

import Profile from '../images/Profile.png'
import MyCalendar from './MyCalendar'

const MyPages = () => {
    return (
        <div>
            <div class="row">
                <div class="column" className="image">
                    <img class="disabled medium ui image" src={Profile} />
                </div>
                <div class="column" className="profile">
                    <p style={{ fontSize: "25px" }}><strong>Profile</strong></p>
                    <Card className="profileCard">
                        <p>Card content</p>
                        <p>Card content</p>
                        <p>Card content</p>
                    </Card>
                </div>
                <div class="row">
                    <div class="column" className="todo">
                        <Card className="todoCard">
                            <p style={{ fontSize: "18px" }}>
                                <strong>Todo List</strong>
                            </p>
                            <p>Card content</p>
                            <p>Card content</p>
                            <p>Card content</p>
                        </Card>
                    </div>
                    <div class="column" className="calendar">
                        <MyCalendar style={{ width: "100rem" }} />
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyPages;