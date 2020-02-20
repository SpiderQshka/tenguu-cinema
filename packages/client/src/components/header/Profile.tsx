import React from "react";
import styles from "./header.module.sass";
import { IUserPayload } from "interfaces/IUser";

import { SignUpModal } from "components/modals/SignUpModal";
import { SignInModal } from "components/modals/SignInModal";

export function Profile(props: IUserPayload) {
  const { data: userData, isAuthorized, pending } = props;

  return (
    <>
      <SignUpModal />
      <SignInModal />
      <div className={styles["profile-block"]}>
        {isAuthorized ? (
          <>
            <button
              className="waves-effect waves-light btn-flat btn orange"
              onClick={() => window.localStorage.clear()}
            >
              Log out
            </button>
            <div className={styles["vertical-line"]}></div>
            <div className={styles["user-block"]}>
              <span className={styles["user_name"]}>
                {pending
                  ? "Loading"
                  : isAuthorized
                  ? userData.username
                  : "Unregistered"}
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
                <span className={styles["info-text"]}>{null ? null : 0}</span>
              </div>
            </div>
            <div className={styles["vertical-line"]}></div>
          </>
        ) : (
          <span className={styles.unauth}>
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
          </span>
        )}
      </div>
    </>
  );
}
