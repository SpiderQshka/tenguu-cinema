import React, { MouseEvent } from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Profile } from "./Profile";
import styles from "./header.module.sass";
import { IUserPayload } from "interfaces/IUser";
import { IModalsPayload } from "interfaces/IState";

export interface IHeader {
  users: IUserPayload;
  modals: IModalsPayload;
  logout: (event: MouseEvent<HTMLButtonElement>) => void;
  openRegisterModal: (event: MouseEvent<HTMLButtonElement>) => void;
  openLoginModal: (event: MouseEvent<HTMLButtonElement>) => void;
}

export function Header(props: IHeader) {
  console.log(props);

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
