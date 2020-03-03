import React from "react";
import { IState } from "interfaces/IState";
import styles from "./adminpage.module.sass";

export const AdminPage = (props: IState) => {
  const { films, mainPage, sessions, users, genres, halls, tickets } = props;
  console.log(users.data);

  return (
    <section className={styles.wrapper}>
      <aside className={styles.aside}>
        <ul className={styles.asideMenu}></ul>
      </aside>
      <main className={styles.main}>
        <h2 className={styles.header}>Admin Page</h2>
        <h3>Users</h3>
        <table className={`striped responsive-table`}>
          <thead>
            <tr>
              {Object.entries(users.currentUser).map(field => (
                <th>{field[0]}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {users.data.map(user => (
              <tr>
                {Object.values(user).map(field => {
                  if (typeof field === "object") return null;
                  return <td>{field}</td>;
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </section>
  );
};
