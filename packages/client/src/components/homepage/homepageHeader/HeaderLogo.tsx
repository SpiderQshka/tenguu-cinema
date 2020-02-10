import React from "react";

export interface IHeaderLogoProps {}

export function HeaderLogo(props: IHeaderLogoProps) {
  return (
    <div className="logo-block">
      <img src="#" alt="Logo" className="image" />
      <div className="info">
        <h2 className="info-header">Tenguu</h2>
        <p className="info-text">cinema</p>
      </div>
    </div>
  );
}
