import React from "react";
import { Logo } from "./Logo";
import { MenuComponent } from "./Menu";
import { Profile } from "./Profile";
import styles from "./header.module.sass";
import { IUserPayload } from "interfaces/IUser";
import { IModalsPayload } from "interfaces/IModal";
import { ITicket } from "interfaces/ITicket";
import { IFilm } from "interfaces/IFilm";

export interface IHeader {
  users: IUserPayload;
  currentUserTickets: ITicket[];
  modals: IModalsPayload;
  lang: string;
  films: IFilm[];
  logout: () => void;
  openRegisterModal: () => void;
  openLoginModal: () => void;
  openUserTicketsModal: () => void;
  changeLang: (lang: string) => void;
  buyTicket: (filmId: string) => void;
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
