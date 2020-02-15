import React, { useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { getCurrentUser } from "../../reducers/usersReducer";
import "./header.sass";

import { fetchUserInfo } from "../../actions/users";

const mapStateToProps = (state: any) => {
  return {
    currentUser: getCurrentUser(state)
  };
};

const connector = connect(mapStateToProps);

function Profile(props: ConnectedProps<typeof connector>) {
  console.log(props);

  useEffect(() => {
    fetchUserInfo(props.dispatch);
  }, [props.dispatch]);

  return (
    <div className="profile-block">
      <div className="user-block">
        <span className="username">{props.currentUser.name}</span>
        {/* <div className="photo-block">
          {user.image ? (
            <img className="photo" src={user.image} alt="User" />
          ) : (
            <i className="far fa-user photo-placeholder"></i>
          )}
        </div> */}
      </div>
      <div className="vertical-line"></div>
      {/* <div className="tickets-block">
        <span className="text">My Tickets</span>
        <div className="info-block">
          <span className="info-text">
            {user.newTicketsNumber ? user.newTicketsNumber : 0}
          </span>
        </div>
      </div> */}
      <div className="vertical-line"></div>
    </div>
  );
}

export default connector(Profile);
