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
    <div className="single-message justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="single-message__text-box backgroundBlue">
        <div className="messageText colorWhite">
          {ReactEmogi.emojify(message.text)}
        </div>
      </div>
    </div>
  ) : (
    <div className="single-message justifyStart">
      <div className="single-message__text-box backgroundLight">
        <div className="messageText colorDark">
          {ReactEmogi.emojify(message.text)}
        </div>
      </div>
      <p className="sentText pl-10">{message.user}</p>
    </div>
  );
};

export default SingleMessage;
