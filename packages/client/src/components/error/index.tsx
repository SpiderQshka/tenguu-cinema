import React from "react";

import styles from "./error.module.sass";

export interface IPageError {
  error: {
    message: string;
    code: number;
  };
}

export const PageError = (props: IPageError) => {
  return (
    <section className={styles.pageErrorContainer}>
      <div className={styles.content}>
        <h2 className={styles.errorCode}>{props.error.code}</h2>
        <p className={styles.errorMessage}>{props.error.message}</p>
      </div>
    </section>
  );
};
