import React, { useState, ChangeEvent } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.sass";
import {
  IconButton,
  Menu,
  MenuItem,
  Typography,
  Badge,
  TextField,
} from "@material-ui/core/";
import { FormattedMessage, useIntl } from "react-intl";
import { Switch } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faBars, faUser } from "@fortawesome/free-solid-svg-icons";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { HeaderProps } from "containers/HeaderContainer";

export function MenuComponent(props: HeaderProps) {
  const history = useHistory();
  const [ticketsBtn, setTicketsBtn] = useState(null);
  const [isSearchBarOpen, openSearchBarHandler] = useState(false);
  const intl = useIntl();
  const {
    users: { currentUser: userData },
  } = props;

  const handleClick = (event: any) => {
    setTicketsBtn(event.currentTarget);
  };
  const handleClose = () => {
    setTicketsBtn(null);
  };
  return (
    <div className={styles["menu-block"]} id="menuBlock">
      <Autocomplete
        className={`${styles.searchBarContainer} ${isSearchBarOpen &&
          styles.activeSearchBar}`}
        options={props.films}
        onChange={(e: ChangeEvent<{}>, value: any) =>
          value && props.buyTicket(value.id)
        }
        getOptionLabel={(option) => intl.formatMessage({ id: option.name })}
        renderOption={(option) => (
          <Typography variant="overline">
            {intl.formatMessage({ id: option.name })}
          </Typography>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            className={styles.searchBarInput}
          />
        )}
        id="searchbar"
      />

      <IconButton
        className={`${styles["menu-btn"]} ${styles["search-btn"]}`}
        onClick={() => openSearchBarHandler(!isSearchBarOpen)}
        id="openSearchbarBtn"
      >
        <FontAwesomeIcon icon={faSearch} />
      </IconButton>
      <IconButton
        className={`${styles["menu-btn"]} ${styles["tabs-btn"]}`}
        onClick={handleClick}
        id="openMenuBtn"
      >
        <FontAwesomeIcon icon={faBars} />
      </IconButton>
      <Menu
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        transformOrigin={{ vertical: "top", horizontal: "center" }}
        anchorEl={ticketsBtn}
        keepMounted
        open={Boolean(ticketsBtn)}
        id="menu"
      >
        {userData.id && [
          <MenuItem className={`${styles.menuItem} ${styles.menuUserBlock}`}>
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
                  src={userData.photo}
                  alt={userData.username}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faUser}
                  className={styles["photo-placeholder"]}
                />
              )}
            </div>
          </MenuItem>,
          userData.status === "admin" && (
            <MenuItem
              onClick={() => history.push("/admin")}
              className={styles.menuItem}
              id="adminPanelTab"
            >
              <FormattedMessage
                id="homepage.header.menu.admin"
                defaultMessage="Admin"
              />
            </MenuItem>
          ),
          <MenuItem
            className={`${styles.menuItem} ${styles.menuTicketsBlock}`}
            onClick={() => {
              props.openUserTicketsModal();
              handleClose();
            }}
          >
            <Badge
              className={styles.badge}
              badgeContent={
                !props.users.currentUserPending && props.currentUserTickets[0]
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
          </MenuItem>,
          <MenuItem className={styles.menuItem}>
            <FormattedMessage
              id="homepage.header.menu.changeLang"
              defaultMessage="Change lang"
            />
            <Switch
              checked={props.lang === "ru"}
              color="primary"
              onChange={() => {
                window.localStorage.setItem(
                  "lang",
                  props.lang === "ru" ? "en" : "ru"
                );
                props.changeLang(props.lang === "ru" ? "en" : "ru");
              }}
              id="switchLangBtn"
            />
          </MenuItem>,
          <MenuItem
            className={styles.menuItem}
            onClick={() => {
              props.logout();
              handleClose();
            }}
            id="logoutBtn"
          >
            <FormattedMessage
              id="homepage.header.menu.logOut"
              defaultMessage="Log Out"
            />
          </MenuItem>,
        ]}
      </Menu>
    </div>
  );
}
