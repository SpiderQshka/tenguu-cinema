import React from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderMenu } from "./HeaderMenu";
import { HeaderProfile } from "./HeaderProfile";
import "./header.sass";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <header className="header">
      <HeaderLogo />
      <div className="content-block">
        <HeaderProfile username="Test" />
        <HeaderMenu />
      </div>
    </header>
  );
}
