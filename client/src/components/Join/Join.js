import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="screen-container">
      <div className="screen-container__title">
        <h1>botroulette</h1>
      </div>
      <div className="join-container">
        <h1 className="join-container__title">Join a room</h1>
        <div>
          <input
            placeholder="your nickname"
            className="join-container__input"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          {/* mt-20 is margin-top20 */}
          <input
            placeholder="room name"
            className="join-container__input mt-20"
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        {/* since we are not using redux to chare state, we are only passing date through querystring in the URL.
        That is what is after ? in the URL, divided by & */}
        <Link to={`/chat?name=${name}&room=${room}`}>
          <button
            onClick={event => (!name || !room ? event.preventDefault() : null)}
            className="join-container__button mt-20"
            type="submit"
          >
            Get in
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
