import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import Profile from "containers/HeaderProfileContainer";
import styles from "./header.module.sass";

export function Header() {
  return (
    <section className={styles["header-container"]} id="home">
      <header className={styles["header"]}>
        <Logo />
        <div className={styles["content-block"]}>
          <Profile />
          <Menu />
        </div>
      </header>
    </section>
  );
}
