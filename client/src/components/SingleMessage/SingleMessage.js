import React from "react";

import ReactEmogi from "react-emoji";

import "./SingleMessage.css";

const SingleMessage = ({ message, name }) => {
  let isSentByCurrentUser = false;
  let isAdminMessage = false;

  const trimmedName = name.trim().toLowerCase();

  if (message.user === "admin") {
    isAdminMessage = true;
  } else if (message.user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return isAdminMessage ? (
    <div className="admin-message">{message.text}</div>
  ) : isSentByCurrentUser ? (
    <div className="single-message justifyEnd">
      <div className="single-message__text-box backgroundPurple">
        <div className="messageText colorWhite">
          {ReactEmogi.emojify(message.text)}
        </div>
      </div>
      <div className="authorOfMessage pr-15">{trimmedName}</div>
    </div>
  ) : (
    <div className="single-message justifyStart">
      <div className="single-message__text-box backgroundLight">
        <div className="messageText colorDark">
          {ReactEmogi.emojify(message.text)}
        </div>
      </div>
      <div className="authorOfMessage pl-15">{message.user}</div>
    </div>
  );
};

export default SingleMessage;
