import React from "react";
import styles from "./footer.module.sass";

export const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.menuBlock}>
            <h4 className={styles.header}>Menu</h4>
            <div className={styles.line}></div>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <a className="waves-effect waves-light btn black" href="#home">
                  Home
                </a>
              </li>
              <li className={styles.menuItem}>
                <a
                  className="waves-effect waves-light btn black"
                  href="#now-playing"
                >
                  Now playing
                </a>
              </li>
              <li className={styles.menuItem}>
                <a
                  className="waves-effect waves-light btn black"
                  href="#coming-soon"
                >
                  Coming soon
                </a>
              </li>
              <li className={styles.menuItem}>
                <a className="waves-effect waves-light btn black" href="#map">
                  Where are we?
                </a>
              </li>
              <li className={styles.menuItem}>
                <a className="waves-effect waves-light btn black" href="#home">
                  Term of Service
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.addressInfoBlock}>
            <h4 className={styles.header}>address information</h4>
            <div className={styles.line}></div>
            <p className={styles.addressData}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              consectetur minus voluptatum tempore.
            </p>
            <p className={styles.mail}>admin@gmail.com</p>
            <p className={styles.tel}>1234567890</p>
          </div>
          <div className={styles.leaveMsgBlock}>
            <h4 className={styles.header}>leave a message</h4>
            <div className={styles.line}></div>
            <form
              action=""
              className={styles.footerForm}
              onSubmit={e => e.preventDefault()}
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input-field inline validate"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="validate"
                required
              />
              <textarea
                name="msg"
                placeholder="Message"
                className="materialize-textarea validate"
                required
              ></textarea>
            </form>
            <button
              className={`waves-effect waves-light btn orange ${styles.footerBtn}`}
              type="submit"
            >
              Send to us
            </button>
          </div>
        </div>
        <div className={styles.footerCopyrightBlock}></div>
      </footer>
    </section>
  );
};
