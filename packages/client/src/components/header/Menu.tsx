import React from "react";
import "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import "./header.sass";

export interface IMenuProps {}

export function Menu(props: IMenuProps) {
  return (
    <div className="menu-block">
      <IconButton className="menu-btn">
        <i className="fas fa-search"></i>
      </IconButton>
      <IconButton className="menu-btn">
        <i className="fas fa-bars"></i>
      </IconButton>
    </div>
  );
}
