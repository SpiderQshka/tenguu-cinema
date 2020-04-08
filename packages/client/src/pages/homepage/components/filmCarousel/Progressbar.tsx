import React from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Typography } from "@material-ui/core/";
import "./progressbar.sass";

export interface IProgressbar {
  value: number;
  text: string;
}

export const Progressbar = (props: IProgressbar) => {
  return (
    <div className="progressbar-container">
      <CircularProgressbarWithChildren
        styles={{}}
        value={props.value}
        // text={props.text}
        background={true}
      >
        <Typography variant="overline" className="progressbarValue">
          {props.value}
        </Typography>
      </CircularProgressbarWithChildren>
    </div>
  );
};
