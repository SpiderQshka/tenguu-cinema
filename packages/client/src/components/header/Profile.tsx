import React from "react";
import styles from "./header.module.sass";

import SignUpModal from "containers/SignUpModalContainer";
import SignInModal from "containers/SignInModalContainer";
import { IUserPayload } from "interfaces/IUser";

export function Profile(props: any) {
  const { data: userData, pending, error } = props;
  if (error) return null;

  return (
    <>
      <SignUpModal />
      <SignInModal />
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
                {null ? (
                  <img className={styles.photo} src="#" alt="User" />
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
                <a
                  className="waves-effect waves-light btn-flat btn-large btn orange modal-trigger"
                  href="#signUpModal"
                >
                  Sign Up
                </a>
                <a
                  className="waves-effect waves-light btn-large btn inherit-bgc btn-flat modal-trigger"
                  href="#signInModal"
                >
                  Sign In
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
