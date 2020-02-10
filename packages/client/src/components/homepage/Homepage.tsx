import React from "react";
import "./homepage.sass";
import { Header } from "./homepageHeader/Header";
import { Slider } from "./homepageSlider/Slider";

export interface IHomepageProps {}

export function Homepage(props: IHomepageProps) {
  return (
    <>
      <Header />
      <Slider />
    </>
  );
}
