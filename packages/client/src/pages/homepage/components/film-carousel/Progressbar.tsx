import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progressbar.sass";

export interface IProgressbar {
  value: number;
  text: string;
}

export const Progressbar = (props: IProgressbar) => {
  return (
    <div className="progressbar-container">
      <CircularProgressbar
        styles={{}}
        value={props.value}
        text={props.text}
        background={true}
      />
    </div>
  );
};
