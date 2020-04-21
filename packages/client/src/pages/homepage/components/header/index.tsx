import React from "react";
import { Logo } from "./Logo";
import { MenuComponent } from "./Menu";
import { Profile } from "./Profile";
import styles from "./header.module.sass";

import { HeaderProps } from "containers/HeaderContainer";
import { IconButton } from "@material-ui/core";

export function Header(props: HeaderProps) {
  return (
    <section className={styles["header-container"]} id="home">
      <header className={styles["header"]}>
        <Logo />
        <div className={styles["content-block"]}>
          <Profile {...props} />
          {props.isAuthentificate && <MenuComponent {...props} />}
          {!props.users.currentUserPending && (
            <IconButton
              className={`${styles.changeLangBtn} ${styles[props.lang]}`}
              onClick={() =>
                props.changeLang(props.lang === "ru" ? "en" : "ru")
              }
            ></IconButton>
          )}
        </div>
      </header>
    </section>
  );
}
