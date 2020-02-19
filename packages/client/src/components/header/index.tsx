import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import Profile from "containers/HeaderProfileContainer";
import styles from "./header.module.sass";

export function Header() {
  return (
    <div className={styles["header-container"]}>
      <header className={styles["header"]}>
        <Logo />
        <div className={styles["content-block"]}>
          <Profile />
          <Menu />
        </div>
      </header>
    </div>
  );
}
