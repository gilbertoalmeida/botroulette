import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Join.css";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div>
          <input
            placeholder="Name"
            className="joinInput"
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </div>
        <div>
          {/* mt-20 is margin-top20 */}
          <input
            placeholder="Room"
            className="joinInput mt-20"
            type="text"
            onChange={event => setRoom(event.target.value)}
          />
        </div>
        {/* since we are not using redux to chare state, we are only passing date through querystring in the URL.
        That is what is after ? in the URL, divided by & */}
        <Link to={`/chat?name=${name}&room=${room}`}>
          <button
            onClick={event => (!name || !room ? event.preventDefault() : null)}
            className="button mt-20"
            type="submit"
          >
            Sign In
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
