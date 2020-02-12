import React from "react";
import "./header.sass";

export interface IHeaderProfileProps {
  username: string;
  image?: string;
  newTicketsNumber?: number;
}

export function Profile(props: IHeaderProfileProps) {
  return (
    <div className="profile-block">
      <div className="user-block">
        <span className="username">{props.username}</span>
        <div className="photo-block">
          {props.image ? (
            <img className="photo" src={props.image} alt="User" />
          ) : (
            <i className="far fa-user photo-placeholder"></i>
          )}
        </div>
      </div>
      <div className="vertical-line"></div>
      <div className="tickets-block">
        <span className="text">My Tickets</span>
        <div className="info-block">
          <span className="info-text">
            {props.newTicketsNumber ? props.newTicketsNumber : 0}
          </span>
        </div>
      </div>
      <div className="vertical-line"></div>
    </div>
  );
}
