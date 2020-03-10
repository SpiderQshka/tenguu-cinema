import React from "react";
import styles from "./header.module.sass";
import { config } from "config";
import { useHistory } from "react-router-dom";
import { Button, Typography } from "@material-ui/core/";
import SignUpModal from "containers/modals/SignUpModalContainer";
import SignInModal from "containers/modals/SignInModalContainer";
import { IHeader } from ".";

export function Profile(props: IHeader) {
  const history = useHistory();

  const {
    users: { currentUser: userData, currentUserPending: pending }
  } = props;
  return (
    <>
      {props.modals.isRegModalOpen ? (
        <SignUpModal />
      ) : props.modals.isLoginModalOpen ? (
        <SignInModal />
      ) : null}
      <div className={styles["profile-block"]}>
        {userData.id ? (
          <>
            <Button variant="contained" color="primary" onClick={props.logout}>
              Log out
            </Button>
            <div className={styles["vertical-line"]}></div>
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
            <Button
              variant="contained"
              color="primary"
              onClick={() => history.push("/admin")}
            >
              Admin
            </Button>
            <div className={styles["vertical-line"]}></div>
            <div className={styles["tickets-block"]}>
              <Typography variant="overline" className={styles["text"]}>
                My Tickets
              </Typography>
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
