import React from "react";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import Profile from "./Profile";
import "./header.sass";

export interface IHeaderProps {}

export function Header(props: IHeaderProps) {
  const isAuth = () => window.localStorage.getItem("auth-token");
  return (
    <div className="header-container">
      <header className="header">
        <Logo />
        <div className="content-block">
          {isAuth() && <Profile />}
          <Menu />
        </div>
      </header>
    </div>
  );
}
