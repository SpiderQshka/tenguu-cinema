import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styles from "./header.module.sass";
import { IconButton, Menu, MenuItem } from "@material-ui/core/";
import { IHeader } from ".";

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
                  Admin
                </MenuItem>
              )}
              <MenuItem
                onClick={() => {
                  props.logout();
                  handleClose();
                }}
              >
                Log out
              </MenuItem>
            </>
          )}
        </Menu>
      </div>
    </>
  );
}
