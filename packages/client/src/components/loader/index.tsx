import React from "react";

import styles from "./loader.module.sass";

export const Loader = () => {
  return (
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-orange-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div>
        <div className="gap-patch">
          <div className="circle"></div>
        </div>
        <div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
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
