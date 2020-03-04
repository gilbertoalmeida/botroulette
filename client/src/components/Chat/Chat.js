import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import "./Chat.css";

import InfoBar from "../InfoBar/InfoBar";
import ChatInput from "../ChatInput/ChatInput";
import MessagesBox from "../MessagesBox/MessagesBox";

let socket;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  /* define for production or dev */
  const ENDPOINT = "localhost:5000";
  /* const ENDPOINT = "https://lit-brushlands-08881.herokuapp.com/"; */

  /* the Effect hook runs everytime the component is rendered. It is
  basically a mix of ComponentDidMount and ComponentDidUpdate */
  useEffect(() => {
    /* retrieve the data from Join that is in the URL */
    /* location is a prop that Router gives, that is why is passed up there,
    location.search is giving only the parameters of the URL after ? */
    const data = queryString.parse(
      location.search
    ); /* Object of the parameters */

    const { name, room } = data;

    /* what is in the URL goes to both states of this component */
    setName(name);
    setRoom(room);

    socket = io(ENDPOINT);

    /* sending to the backend this emit called join with the user data */
    socket.emit("join", { name, room }, error => {
      if (error) {
        /* this error includes when there is a repetitive username. Handle this better */
        alert(error);
      }
    });

    /* this is the componentDidUnmount of the effect */
    return () => {
      socket.emit("disconnect");

      socket.off();
    };
  }, [ENDPOINT, location.search]);
  /* this array in the end of the Effect specifies when the effect is called.
  Just when these variables change */

  useEffect(() => {
    socket.on("message", message => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log("messages");
  console.log(messages);

  return (
    <div className="outerContainer">
      <div className="Container">
        <InfoBar room={room} />
        <MessagesBox messages={messages} name={name} />
        <ChatInput
          message={message}
          sendMessage={sendMessage}
          setMessage={setMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
