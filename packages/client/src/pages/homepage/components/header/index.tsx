import React from "react";
import { Logo } from "./Logo";
import { MenuComponent } from "./Menu";
import { Profile } from "./Profile";
import styles from "./header.module.sass";

import { HeaderProps } from "containers/HeaderContainer";

export function Header(props: HeaderProps) {
  return (
    <section className={styles["header-container"]} id="home">
      <header className={styles["header"]}>
        <Logo />
        <div className={styles["content-block"]}>
          <Profile {...props} />
          {props.users.currentUser && props.users.currentUser.id && (
            <MenuComponent {...props} />
          )}
        </div>
      </header>
    </section>
  );
}
