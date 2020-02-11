import React from "react";
import "./header.sass";

export interface IHeaderProfileProps {
  username: string;
  newTicketsNumber?: number;
}

export function Profile(props: IHeaderProfileProps) {
  return (
    <div className="profile-block">
      <div className="user-block">
        <span className="username">{props.username}</span>
        <img className="photo" src="#" alt="User" />
      </div>
      <div className="tickets-block">
        <span>My Tickets</span>
        <div className="info-block">
          <span className="info-text">
            {props.newTicketsNumber ? props.newTicketsNumber : 0}
          </span>
        </div>
      </div>
    </div>
  );
}
