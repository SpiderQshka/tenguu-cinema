import React from "react";
import styles from "./header.module.sass";

export function Profile(props: any) {
  const { user: userData, isAuthorized, pending } = props;
  return (
    <div className={styles["profile-block"]}>
      {isAuthorized ? (
        <>
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
                <i className={`far fa-user ${styles["photo-placeholder"]}`}></i>
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
          {pending ? "Loading" : <span>Please sign up or sign in</span>}
        </span>
      )}
    </div>
  );
}
