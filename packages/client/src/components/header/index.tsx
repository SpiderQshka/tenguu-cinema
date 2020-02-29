import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Profile } from "./Profile";
// import Profile from "containers/HeaderProfileContainer";
import styles from "./header.module.sass";
import { IUser, IUserPayload } from "interfaces/IUser";

export function Header(props: IUserPayload) {
  if (props.error) return null;
  return (
    <section className={styles["header-container"]} id="home">
      <header className={styles["header"]}>
        <Logo />
        <div className={styles["content-block"]}>
          <Profile {...props} />
          <Menu />
        </div>
      </header>
    </section>
  );
}
