import React, { useEffect, useState, useRef } from "react";


export default function RoomMember(props) {
    const {mySocket} = props;
    const [members, setMembers] = useState([]);
    const [name, setName] = useState("hi");
    const socketRef = useRef();

    useEffect(() => {
        console.log(mySocket.id);
        socketRef.current = mySocket;
        socketRef.current.on("방 멤버", (name) => {
            setMembers((oldMsgs) => [...oldMsgs, name]);
            setName(name);
            
        });
        socketRef.current.on("show user name", (name, count) => {
            setName(name);
        });
    }, []);
    return (
        <div className="App">
            <h1>
                함께 공부할 토마토들
                <div>{name}</div> 
            </h1>
        <div>
        
        {members.map((member) => {
            return (
                <div>{member}</div>
            );
        })}
        </div>
           
        </div>
    );
}
