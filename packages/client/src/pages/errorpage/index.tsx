import React from "react";
import styles from "./error.module.sass";
import { Redirect } from "react-router-dom";
export interface IPageError {
  error: {
    message: string;
    code: number;
  } | null;
}

export const PageError = (props: any) => {
  if (!props.error) return <Redirect to="/" />;

  return (
    <section className={styles.pageErrorContainer}>
      <div className={styles.content}>
        <h2 className={styles.errorCode}>{props.error.code}</h2>
        <p className={styles.errorMessage}>
          Whops, looks like the <span className={styles.lined}>film</span>{" "}
          server ran out
        </p>
      </div>
    </section>
  );
};
