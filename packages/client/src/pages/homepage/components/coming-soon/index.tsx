import React from "react";
import { SectionTitle } from "components/section-title";
import FilmBlock from "containers/SessionsContainer";
// import { CarouselComponent } from "components/carousel";
// import { FilmCard } from "components/film-card";

import styles from "./coming-soon.module.sass";

export interface IComingSoonProps {}

export function ComingSoon(props: IComingSoonProps) {
  return (
    <section className={styles["coming-soon"]}>
      <SectionTitle isDark={false} message="Coming soon" />
      <FilmBlock />
      {/* carousel */}
    </section>
  );
}
