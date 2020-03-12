import React, { useState } from "react";
import styles from "./header.module.sass";
import { config } from "config";
import SignUpModal from "containers/modals/SignUpModalContainer";
import SignInModal from "containers/modals/SignInModalContainer";
import BuyTicketModal from "containers/modals/BuyTicketModalContainer";
import { Button, Typography, Menu, MenuItem } from "@material-ui/core/";
import { IHeader } from ".";

export function Profile(props: IHeader) {
  const {
    users: { currentUser: userData, currentUserPending: pending }
  } = props;
  return (
    <>
      <SignUpModal />
      <SignInModal />
      <BuyTicketModal />
      <div className={styles["profile-block"]}>
        {userData.id ? (
          <>
            <div className={styles["user-block"]}>
              <Typography variant="overline" className={styles["user_name"]}>
                {pending ? "Loading" : userData.username}
              </Typography>
              <div className={styles["user_photo-block"]}>
                {userData.photo ? (
                  <img
                    className={styles.photo}
                    src={config.baseUrl + userData.photo}
                    alt={userData.username}
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
              {/* <Button onClick={handleClick}> */}
              <Typography variant="overline" className={styles["text"]}>
                My Tickets
              </Typography>
              {/* </Button> */}
              <div className={styles["info-block"]}>
                <Typography className={styles["info-text"]}>
                  {!pending && userData.tickets[0]
                    ? userData.tickets.length
                    : 0}
                </Typography>
              </div>
            </div>
            <div className={styles["vertical-line"]}></div>
          </>
        ) : (
          <div className={styles.unauth}>
            {pending ? (
              <Typography
                variant="overline"
                component="span"
                className={styles.loadingText}
              >
                Loading
              </Typography>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.openRegisterModal}
                >
                  Sign Up
                </Button>
                <Button onClick={props.openLoginModal}>Sign In</Button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
