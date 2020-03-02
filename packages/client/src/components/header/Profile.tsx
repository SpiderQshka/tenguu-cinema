import React from "react";
import styles from "./header.module.sass";
import { config } from "config";

import SignUpModal from "containers/SignUpModalContainer";
import SignInModal from "containers/SignInModalContainer";
import { IHeader } from ".";

export function Profile(props: IHeader) {
  console.log(props);

  const {
    user: { data: userData, pending }
  } = props;
  return (
    <>
      {props.modals.isRegModalOpen ? (
        <SignUpModal />
      ) : props.modals.isLoginModalOpen ? (
        <SignInModal />
      ) : null}
      <div className={styles["profile-block"]}>
        {userData._id ? (
          <>
            <button
              className="waves-effect waves-light btn-large btn-flat btn orange"
              onClick={props.logout}
            >
              Log out
            </button>
            <div className={styles["vertical-line"]}></div>
            <div className={styles["user-block"]}>
              <span className={styles["user_name"]}>
                {pending ? "Loading" : userData.username}
              </span>
              <div className={styles["user_photo-block"]}>
                {props.user.data.photo ? (
                  <img
                    className={styles.photo}
                    src={config.baseUrl + props.user.data.photo}
                    alt={props.user.data.username}
                  />
                ) : (
                  <i
                    className={`far fa-user ${styles["photo-placeholder"]}`}
                  ></i>
                )}
              </div>
            </div>
            <div className={styles["vertical-line"]}></div>
            <div className={styles["tickets-block"]}>
              <span className={styles["text"]}>My Tickets</span>
              <div className={styles["info-block"]}>
                <span className={styles["info-text"]}>
                  {!pending && userData.tickets[0]
                    ? userData.tickets.length
                    : 0}
                </span>
              </div>
            </div>
            <div className={styles["vertical-line"]}></div>
          </>
        ) : (
          <div className={styles.unauth}>
            {pending ? (
              "Loading"
            ) : (
              <>
                <button
                  className="waves-effect waves-light btn-flat btn-large btn orange"
                  onClick={props.openRegisterModal}
                >
                  Sign Up
                </button>
                <button
                  className="waves-effect waves-light btn-large btn inherit-bgc btn-flat"
                  onClick={props.openLoginModal}
                >
                  Sign In
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
