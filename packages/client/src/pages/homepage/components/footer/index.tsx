import React from "react";
import styles from "./footer.module.sass";
import { Button, Typography, TextField, Input } from "@material-ui/core/";
import { FormattedMessage } from "react-intl";

export const Footer = () => {
  return (
    <section className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.menuBlock}>
            <Typography variant="h6" className={styles.header}>
              <FormattedMessage
                id="homepage.footer.menu"
                defaultMessage="Menu"
              />
            </Typography>
            <div className={styles.line}></div>
            <ul className={styles.menuList}>
              <li className={styles.menuItem}>
                <Button href="#home">
                  <FormattedMessage
                    id="homepage.footer.button.backToTop"
                    defaultMessage="Back to top"
                  />
                </Button>
              </li>
              <li className={styles.menuItem}>
                <Button href="#now-playing">
                  <FormattedMessage
                    id="homepage.footer.button.nowPlaying"
                    defaultMessage="Now playing"
                  />
                </Button>
              </li>
              <li className={styles.menuItem}>
                <Button href="#coming-soon">
                  <FormattedMessage
                    id="homepage.footer.button.comingSoon"
                    defaultMessage="Coming soon"
                  />
                </Button>
              </li>
              <li className={styles.menuItem}>
                <Button href="#map">
                  {" "}
                  <FormattedMessage
                    id="homepage.footer.button.map"
                    defaultMessage="Where are we?"
                  />
                </Button>
              </li>
            </ul>
          </div>
          <div className={styles.addressInfoBlock}>
            <Typography variant="h6" className={styles.header}>
              <FormattedMessage
                id="homepage.footer.adressInfo"
                defaultMessage="Adress information"
              />
            </Typography>
            <div className={styles.line}></div>
            <Typography variant="body1" className={styles.addressData}>
              <FormattedMessage
                id="homepage.footer.adressData"
                defaultMessage="lorem ipsum sir amet"
              />
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
              <FormattedMessage
                id="homepage.footer.leaveMessage"
                defaultMessage="Leave a message"
              />
            </Typography>
            <div className={styles.line}></div>
            <form
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
              <FormattedMessage
                id="homepage.footer.button.sendMessage"
                defaultMessage="Send to us"
              />
            </Button>
          </div>
        </div>
        <div className={styles.footerCopyrightBlock}></div>
      </footer>
    </section>
  );
};
