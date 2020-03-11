import React from "react";

import "./ChatInput.css";

const ChatInput = ({ message, setMessage, sendMessage }) => (
  <form className="send-message-form">
    <input
      className="send-message-form__input"
      type="text"
      placeholder="Say something..."
      value={message}
      onChange={event => setMessage(event.target.value)}
      onKeyPress={event => (event.key === "Enter" ? sendMessage(event) : null)}
    />
    <div className="send-message-form__button-area">
      {message && (
        <button
          className="send-message-form__button"
          onClick={event => sendMessage(event)}
        >
          Send
        </button>
      )}
    </div>
  </form>
);

export default ChatInput;
