import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.sass";
import { IconButton, Menu, MenuItem } from "@material-ui/core/";
import { IHeader } from ".";
import { FormattedMessage } from "react-intl";
import { Switch } from "@material-ui/core";

export function MenuComponent(props: IHeader) {
  const history = useHistory();
  const [ticketsBtn, setTicketsBtn] = useState(null);

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
        <IconButton className={styles["menu-btn"]}>
          <i className="fas fa-search"></i>
        </IconButton>
        <IconButton className={styles["menu-btn"]} onClick={handleClick}>
          <i className="fas fa-bars"></i>
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
              {userData.status === "admin" && (
                <MenuItem onClick={() => history.push("/admin")}>
                  <FormattedMessage
                    id="homepage.header.menu.admin"
                    defaultMessage="Admin"
                  />
                </MenuItem>
              )}
              <MenuItem>
                <Switch
                  checked={props.lang === "ru"}
                  onChange={() => {
                    props.changeLang(props.lang === "ru" ? "en" : "ru");
                  }}
                />
                <FormattedMessage
                  id="homepage.header.menu.changeLang"
                  defaultMessage="Change lang"
                />
              </MenuItem>
              <MenuItem
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
