import React from "react";

import ReactEmogi from "react-emoji";

import "./SingleMessage.css";

const SingleMessage = ({ message, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if (message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isSentByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="setText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">
          {ReactEmogi.emojify(message.text)}
        </p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <div className="messageBox backgroundLight">
        <p className="messageText colorDark">
          {ReactEmogi.emojify(message.text)}
        </p>
      </div>
      <p className="setText pl-10">{message.user}</p>
    </div>
  );
};

export default SingleMessage;
