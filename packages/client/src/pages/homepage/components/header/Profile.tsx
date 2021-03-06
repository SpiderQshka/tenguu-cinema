import React from "react";
import styles from "./header.module.sass";
import { Button, Typography, Badge } from "@material-ui/core/";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { HeaderProps } from "containers/HeaderContainer";

export function Profile(props: HeaderProps) {
  const {
    users: { currentUser: userData, currentUserPending: pending },
    currentUserTickets,
  } = props;
  return (
    <>
      {props.isAuthentificate ? (
        <div className={`${styles["profile-block"]}`} id="profileBlock">
          <div className={`${styles["user-block"]}`} id="userBlock">
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
            <div className={styles["user_photo-block"]} id="userPhotoBlock">
              {userData.photo ? (
                <div
                  id="userPhoto"
                  className={styles.photo}
                  style={{ backgroundImage: `url(${userData.photo})` }}
                ></div>
              ) : (
                <FontAwesomeIcon
                  icon={faUser}
                  className={styles["photo-placeholder"]}
                  id="userPhotoPlaceholder"
                />
              )}
            </div>
          </div>
          <div className={styles["vertical-line"]}></div>

          <div className={`${styles["tickets-block"]}`} id="ticketsBlock">
            <Badge
              className={styles.badge}
              badgeContent={
                !pending && currentUserTickets[0]
                  ? currentUserTickets.length
                  : 0
              }
              color="primary"
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
        </div>
      ) : (
        <div className={`${styles.unauth}`} id="unauthBlock">
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
              <div className={styles.regAndLogBtns}>
                <Button
                  variant="contained"
                  color="primary"
                  className={styles.registerBtn}
                  onClick={props.openRegisterModal}
                >
                  <FormattedMessage
                    id="homepage.header.profile.signUp"
                    defaultMessage="Sign Up"
                  />
                </Button>
                <Button
                  className={styles.loginBtn}
                  onClick={props.openLoginModal}
                >
                  <FormattedMessage
                    id="homepage.header.profile.signIn"
                    defaultMessage="Sign In"
                  />
                </Button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
