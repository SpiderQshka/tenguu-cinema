import React, { FormEvent } from "react";
import styles from "./footer.module.sass";
import { Button, Typography, TextField } from "@material-ui/core/";
import { FormattedMessage } from "react-intl";
import emailjs from "emailjs-com";
import { FooterProps } from "containers/FooterContainer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";

export const Footer = (props: FooterProps) => {
  const handleEmail = (e: FormEvent) => {
    e.preventDefault();
    const form = document.forms[0] as any;
    const formData = {
      message: form.elements.message.value,
      userEmail: form.elements.userEmail.value,
      username: form.elements.username.value,
    };

    props.sendMessageRequest();
    emailjs
      .send(
        "default_service",
        "feedback",
        formData,
        "user_PT80SEaw3PHEOR3ymyCJl"
      )
      .then(() => props.sendMessageSuccess())
      .catch(() => props.sendMessageError());
  };
  return (
    <section className={styles.footerContainer}>
      <footer className={styles.footer}>
        <div className={styles.menuBlock}>
          <Typography variant="h6" className={styles.header}>
            <FormattedMessage id="homepage.footer.menu" defaultMessage="Menu" />
          </Typography>
          <div className={styles.line}></div>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Button href="#home" className={styles.menuBtn}>
                <FormattedMessage
                  id="homepage.footer.button.backToTop"
                  defaultMessage="Back to top"
                />
              </Button>
            </li>
            <li className={styles.menuItem}>
              <Button href="#now-playing" className={styles.menuBtn}>
                <FormattedMessage
                  id="homepage.footer.button.nowPlaying"
                  defaultMessage="Now playing"
                />
              </Button>
            </li>
            <li className={styles.menuItem}>
              <Button href="#coming-soon" className={styles.menuBtn}>
                <FormattedMessage
                  id="homepage.footer.button.comingSoon"
                  defaultMessage="Coming soon"
                />
              </Button>
            </li>
            <li className={styles.menuItem}>
              <Button href="#map" className={styles.menuBtn}>
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
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />{" "}
            admin@gmail.com
          </Typography>
          <Typography variant="overline" className={styles.tel}>
            <FontAwesomeIcon icon={faPhoneAlt} className={styles.icon} /> +1 23
            456 78 90
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
            onSubmit={handleEmail}
            name="feedbackForm"
          >
            <TextField
              type="text"
              name="username"
              label={
                <FormattedMessage
                  id="homepage.footer.name"
                  defaultMessage="Name"
                />
              }
              required
              fullWidth
            />
            <TextField
              type="email"
              name="userEmail"
              label={
                <FormattedMessage
                  id="homepage.footer.email"
                  defaultMessage="Email"
                />
              }
              required
              fullWidth
            />

            <TextField
              type="text"
              label={
                <FormattedMessage
                  id="homepage.footer.message"
                  defaultMessage="Message"
                />
              }
              name="message"
              required
              multiline
              fullWidth
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={styles.footerBtn}
            >
              <FormattedMessage
                id="homepage.footer.button.sendMessage"
                defaultMessage="Send to us"
              />
            </Button>
          </form>
        </div>
        <div className={styles.footerCopyrightBlock}></div>
      </footer>
    </section>
  );
};
