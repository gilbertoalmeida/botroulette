import React from "react";

import "./InfoBar.css";

import onlineIcon from "../../icons/onlineIcon.png";
import closeIcon from "../../icons/closeIcon.png";

const InfoBar = ({ room }) => (
  <div className="infobar-container">
    <div className="infobar-container__room-name">
      <img
        className="infobar-container__room-name__online-icon"
        src={onlineIcon}
        alt="online icon"
      />
      <h3>'{room}'</h3>
    </div>
    <div className="infobar-container__close-button">
      <a href="/">
        <img src={closeIcon} alt="close chat icon" />
      </a>
    </div>
  </div>
);

export default InfoBar;
