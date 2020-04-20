import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./error.module.sass";
import { Typography } from "@material-ui/core";
export interface IPageError {
  error: {
    message: string;
    code: number;
  };
}

export interface IPageUIError {
  error: Error;
}

export const PageError = (props: IPageError) => {
  return (
    <section className={styles.pageErrorContainer}>
      <div className={styles.content}>
        <Typography variant="h2" className={styles.errorCode}>
          {props.error.code}
        </Typography>
        <Typography variant="overline" className={styles.errorMessage}>
          <FormattedMessage
            id="errorpage.message"
            defaultMessage="Whops, something went wrong"
            values={{
              linebreak: <br />,
            }}
          />
        </Typography>
      </div>
    </section>
  );
};

export const PageUIError = (props: IPageUIError) => {
  console.log(props);

  return (
    <section className={styles.pageErrorContainer}>
      <div className={styles.content}>
        <Typography variant="h2" className={styles.errorUIMainMessage}>
          <FormattedMessage
            id="errorpage.uimessage"
            defaultMessage="Whops, something went wrong"
            values={{
              linebreak: <br />,
            }}
          />
        </Typography>
        <Typography variant="overline" className={styles.errorUIMessage}>
          {props.error.message}
        </Typography>
      </div>
    </section>
  );
};
