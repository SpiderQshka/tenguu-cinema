import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Profile } from "./Profile";
import "./header.sass";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  return (
    <header className="header">
      <Logo />
      <div className="content-block">
        <Profile username="Test" />
        <Menu />
      </div>
    </header>
  );
}
