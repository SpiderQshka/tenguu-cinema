import React from "react";
import { IState } from "interfaces/IState";
import styles from "./adminpage.module.sass";
import { TabsType } from "interfaces/IPages";
import { IUserPayload } from "interfaces/IUser";
import { Table } from "./Tables";
import { IFilmPayload } from "interfaces/IFilm";
import { ISessionsPayload } from "interfaces/ISession";
import { IGenresPayload } from "interfaces/IGenre";
import { IHallPayload } from "interfaces/IHall";
import { ITicketsPayload } from "interfaces/ITicket";

export interface IAdminPage extends IState {
  changeTab: (tab: TabsType) => void;
}

export interface IAdminTablePayload {
  films: IFilmPayload;
  sessions: ISessionsPayload;
  users: IUserPayload;
  genres: IGenresPayload;
  halls: IHallPayload;
  tickets: ITicketsPayload;
}

export const AdminPage = (props: IAdminPage) => {
  const {
    films,
    mainPage,
    sessions,
    users,
    genres,
    halls,
    tickets,
    changeTab,
    adminPage: { currentTab }
  } = props;
  const payload: IAdminTablePayload = {
    films,
    sessions,
    users,
    genres,
    halls,
    tickets
  };
  return (
    <section className={styles.wrapper}>
      <aside className={styles.aside}>
        <ul className={styles.asideMenu}>
          <li
            className={`${styles.asideMenuItem} ${
              currentTab === "users" ? styles.asideMenuItemActive : null
            }`}
          >
            <a href="#" onClick={() => changeTab("users")}>
              Users
            </a>
          </li>
          <li
            className={`${styles.asideMenuItem} ${
              currentTab === "films" ? styles.asideMenuItemActive : null
            }`}
          >
            <a href="#" onClick={() => changeTab("films")}>
              Films
            </a>
          </li>
          <li
            className={`${styles.asideMenuItem} ${
              currentTab === "genres" ? styles.asideMenuItemActive : null
            }`}
          >
            <a href="#" onClick={() => changeTab("genres")}>
              Genres
            </a>
          </li>
          <li
            className={`${styles.asideMenuItem} ${
              currentTab === "halls" ? styles.asideMenuItemActive : null
            }`}
          >
            <a href="#" onClick={() => changeTab("halls")}>
              Halls
            </a>
          </li>
          <li
            className={`${styles.asideMenuItem} ${
              currentTab === "tickets" ? styles.asideMenuItemActive : null
            }`}
          >
            <a href="#" onClick={() => changeTab("tickets")}>
              Tickets
            </a>
          </li>
          <li
            className={`${styles.asideMenuItem} ${
              currentTab === "sessions" ? styles.asideMenuItemActive : null
            }`}
          >
            <a href="#" onClick={() => changeTab("sessions")}>
              Sessions
            </a>
          </li>
        </ul>
      </aside>
      <main className={styles.main}>
        <h3 className={styles.header}>{currentTab}</h3>
        <Table name={currentTab} payload={payload} />
      </main>
    </section>
  );
};
