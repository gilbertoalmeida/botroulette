import React from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import SingleMessage from "../SingleMessage/SingleMessage";

import "./MessagesBox.css";

const MessagesBox = ({ messages, name }) => (
  <ScrollToBottom className="messages">
    {messages.map((message, i) => (
      <div key={i}>
        <SingleMessage message={message} name={name} />
      </div>
    ))}
  </ScrollToBottom>
);

export default MessagesBox;
