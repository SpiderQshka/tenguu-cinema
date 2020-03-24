import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.sass";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Badge,
  TextField
} from "@material-ui/core/";
import { IHeader } from ".";
import { FormattedMessage } from "react-intl";
import { Switch } from "@material-ui/core";
import { config } from "config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "@material-ui/lab/Autocomplete";

export function MenuComponent(props: IHeader) {
  const history = useHistory();
  const [ticketsBtn, setTicketsBtn] = useState(null);
  const [isSearchBarOpen, openSearchBarHandler] = useState(false);
  const [searchData, searchDataHandler] = useState([]);

  const {
    users: { currentUser: userData }
  } = props;

  const handleClick = (event: any) => {
    setTicketsBtn(event.currentTarget);
  };
  const handleClose = () => {
    setTicketsBtn(null);
  };
  return (
    <>
      <div className={styles["menu-block"]}>
        {isSearchBarOpen && (
          <Autocomplete
            id="combo-box-demo"
            options={["!"]}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            renderInput={params => (
              <TextField
                {...params}
                label="Combo box"
                variant="outlined"
                className={styles.searchBarInput}
              />
            )}
          />
        )}
        <IconButton
          className={styles["menu-btn"]}
          onClick={() => openSearchBarHandler(!isSearchBarOpen)}
        >
          <FontAwesomeIcon icon={faSearch} />
        </IconButton>
        <IconButton className={styles["menu-btn"]} onClick={handleClick}>
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
        <Menu
          onClose={handleClose}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          transformOrigin={{ vertical: "top", horizontal: "center" }}
          id="simple-menu"
          anchorEl={ticketsBtn}
          keepMounted
          open={Boolean(ticketsBtn)}
        >
          {userData.id && (
            <>
              <MenuItem
                className={`${styles.menuItem} ${styles.menuUserBlock}`}
              >
                <Typography variant="body1" className={styles["user_name"]}>
                  {props.users.currentUserPending ? (
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
                    <FontAwesomeIcon
                      icon={faUser}
                      className={styles["photo-placeholder"]}
                    />
                  )}
                </div>
              </MenuItem>
              {userData.status === "admin" && (
                <MenuItem
                  onClick={() => history.push("/admin")}
                  className={styles.menuItem}
                >
                  <FormattedMessage
                    id="homepage.header.menu.admin"
                    defaultMessage="Admin"
                  />
                </MenuItem>
              )}
              <MenuItem
                className={`${styles.menuItem} ${styles.menuTicketsBlock}`}
                onClick={props.openUserTicketsModal}
              >
                <Badge
                  className={styles.badge}
                  badgeContent={
                    !props.users.currentUserPending &&
                    props.currentUserTickets[0]
                      ? props.currentUserTickets.length
                      : 0
                  }
                  color="primary"
                >
                  <Typography variant="body1" className={styles["text"]}>
                    <FormattedMessage
                      id="homepage.header.profile.tickets"
                      defaultMessage="My Tickets"
                    />
                  </Typography>
                </Badge>
              </MenuItem>
              <MenuItem className={styles.menuItem}>
                <FormattedMessage
                  id="homepage.header.menu.changeLang"
                  defaultMessage="Change lang"
                />
                <Switch
                  checked={props.lang === "ru"}
                  color="primary"
                  onChange={() => {
                    props.changeLang(props.lang === "ru" ? "en" : "ru");
                  }}
                />
              </MenuItem>
              <MenuItem
                className={styles.menuItem}
                onClick={() => {
                  props.logout();
                  handleClose();
                }}
              >
                <FormattedMessage
                  id="homepage.header.menu.logOut"
                  defaultMessage="Log Out"
                />
              </MenuItem>
            </>
          )}
        </Menu>
      </div>
    </>
  );
}
