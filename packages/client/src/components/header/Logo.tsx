import React from "react";
import "./header.sass";

export interface ILogoProps {}

export function Logo(props: ILogoProps) {
  return (
    <div className="logo-block">
      <img src="#" alt="Logo" className="image" />
      <h2 className="info">
        Tenguu <br /> cinema
      </h2>
    </div>
  );
}
