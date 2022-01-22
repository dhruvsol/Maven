import React from "react";
// import { CardList } from "./cardList/cardList";
import "./feed.scss";
export const Feed = ({ groupName }) => {
  return (
    <div className="feed">
      <div className="feed-group">
        <span>Group Name</span>
        <a href="#chat">
          <img src="/images/arrow.svg" alt="arrow" />
        </a>
      </div>
      {/* <div className="Card-List">
        <CardList />
      </div> */}
      <div className="menu">
        <a href="/home">
          <img src="/images/home.svg" alt="Home" />
        </a>
        <a href="/home/image">
          <img src="/images/Add.svg" alt="Add" />
        </a>
        <a href="/home/profile">
          <img src="/images/Profile.svg" alt="profile" />
        </a>
      </div>
    </div>
  );
};
