import React from "react";
import styles from "./footer.module.sass";
import { Button, Typography, TextField, Input } from "@material-ui/core/";

export const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.menuBlock}>
            <Typography variant="h6" className={styles.header}>
              Menu
            </Typography>
            <div className={styles.line}></div>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Button href="#home">Back to top</Button>
              </li>
              <li className={styles.menuItem}>
                <Button href="#now-playing">Now playing</Button>
              </li>
              <li className={styles.menuItem}>
                <Button href="#coming-soon">Coming soon</Button>
              </li>
              <li className={styles.menuItem}>
                <Button href="#map">Where are we?</Button>
              </li>
            </ul>
          </div>
          <div className={styles.addressInfoBlock}>
            <Typography variant="h6" className={styles.header}>
              adress information
            </Typography>
            <div className={styles.line}></div>
            <Typography variant="body1" className={styles.addressData}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
              consectetur minus voluptatum tempore.
            </Typography>
            <Typography variant="subtitle1" className={styles.mail}>
              admin@gmail.com
            </Typography>
            <Typography variant="overline" className={styles.tel}>
              1234567890
            </Typography>
          </div>
          <div className={styles.leaveMsgBlock}>
            <Typography variant="h6" className={styles.header}>
              leave a message
            </Typography>
            <div className={styles.line}></div>
            <form
              action=""
              className={styles.footerForm}
              onSubmit={e => e.preventDefault()}
            >
              <Input
                type="text"
                name="name"
                placeholder="Name"
                required
                fullWidth
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                fullWidth
              />

              <TextField placeholder="Message" multiline fullWidth />
            </form>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={styles.footerBtn}
            >
              Send to us
            </Button>
          </div>
        </div>
        <div className={styles.footerCopyrightBlock}></div>
      </footer>
    </section>
  );
};
