import React from "react";
import "./header.sass";

export interface ILogoProps {}

export function Logo(props: ILogoProps) {
  return (
    <div className="logo-block">
      <i className="fas fa-film image"></i>
      <h2 className="name">
        Tenguu <br /> cinema
      </h2>
    </div>
  );
}
