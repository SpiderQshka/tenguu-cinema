import React from "react";

import styles from "./loader.module.sass";
import { CircularProgress } from "@material-ui/core/";

export const Loader = () => {
  return <CircularProgress className={styles.loader} />;
};

export const PageLoader = () => {
  return (
    <div className={styles.pageLoader}>
      <Loader />
    </div>
  );
};

export const CenterLoader = () => {
  return (
    <div className={styles.centerLoader}>
      <Loader />
    </div>
  );
};
