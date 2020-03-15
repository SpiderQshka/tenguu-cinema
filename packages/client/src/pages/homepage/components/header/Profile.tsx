import React from "react";
import styles from "./header.module.sass";
import { config } from "config";
import SignUpModal from "containers/modals/SignUpModalContainer";
import SignInModal from "containers/modals/SignInModalContainer";
import BuyTicketModal from "containers/modals/BuyTicketModalContainer";
import UserTicketsModal from "containers/modals/UserTicketsModalContainer";
import { Button, Typography, Badge } from "@material-ui/core/";
import { IHeader } from ".";
import { FormattedMessage } from "react-intl";

export function Profile(props: IHeader) {
  const {
    users: { currentUser: userData, currentUserPending: pending }
  } = props;
  return (
    <>
      <SignUpModal />
      <SignInModal />
      <BuyTicketModal />
      <UserTicketsModal />
      <div className={styles["profile-block"]}>
        {userData.id ? (
          <>
            <div className={styles["user-block"]}>
              <Typography variant="overline" className={styles["user_name"]}>
                {pending ? (
                  <FormattedMessage
                    id="homepage.header.profile.loading"
                    defaultMessage="Loading"
                  />
                ) : (
                  userData.username
                )}
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
              <Badge
                className={styles.badge}
                badgeContent={
                  !pending && userData.tickets[0] ? userData.tickets.length : 0
                }
                color="primary"
                showZero
              >
                <Button
                  onClick={props.openUserTicketsModal}
                  className={styles["text"]}
                >
                  <Typography variant="overline">
                    <FormattedMessage
                      id="homepage.header.profile.tickets"
                      defaultMessage="My Tickets"
                    />
                  </Typography>
                </Button>
              </Badge>
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
                <FormattedMessage
                  id="homepage.header.profile.loading"
                  defaultMessage="Loading"
                />
              </Typography>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={props.openRegisterModal}
                >
                  <FormattedMessage
                    id="homepage.header.profile.signUp"
                    defaultMessage="Sign Up"
                  />
                </Button>
                <Button onClick={props.openLoginModal}>
                  <FormattedMessage
                    id="homepage.header.profile.signIn"
                    defaultMessage="Sign In"
                  />
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
}
