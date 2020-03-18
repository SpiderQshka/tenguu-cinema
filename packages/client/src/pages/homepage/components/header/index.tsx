import React from "react";
import { Logo } from "./Logo";
import { MenuComponent } from "./Menu";
import { Profile } from "./Profile";
import styles from "./header.module.sass";
import { IUserPayload } from "interfaces/IUser";
import { IModalsPayload } from "interfaces/IState";

export interface IHeader {
  users: IUserPayload;
  modals: IModalsPayload;
  lang: string;
  logout: () => void;
  openRegisterModal: () => void;
  openLoginModal: () => void;
  openUserTicketsModal: () => void;
  changeLang: (lang: string) => void;
}

export function Header(props: IHeader) {
  return (
    <section className={styles["header-container"]} id="home">
      <header className={styles["header"]}>
        <Logo />
        <div className={styles["content-block"]}>
          <Profile {...props} />
          {props.users.currentUser.id && <MenuComponent {...props} />}
        </div>
      </header>
    </section>
  );
}
