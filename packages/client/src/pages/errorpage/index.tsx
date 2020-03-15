import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./error.module.sass";
import { Typography } from "@material-ui/core";
export interface IPageError {
  error: {
    message: string;
    code: number;
  } | null;
}

export const PageError = (props: any) => {
  return (
    <section className={styles.pageErrorContainer}>
      <div className={styles.content}>
        <h2 className={styles.errorCode}> {props.error.code}</h2>
        <Typography variant="overline" className={styles.errorMessage}>
          <FormattedMessage
            id="errorpage.message"
            defaultMessage="Whops, something went wrong"
          />
        </Typography>
      </div>
    </section>
  );
};
