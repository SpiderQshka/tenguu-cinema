import React from "react";
import { Button } from "react-bootstrap";

import "./header.sass";

export interface IMenuProps {}

export function Menu(props: IMenuProps) {
  return (
    <div className="menu-block">
      <Button variant="light" className="search-btn">
        <i className="fas fa-search"></i>
      </Button>
      <Button variant="light" className="menu-btn">
        <i className="fas fa-bars"></i>
      </Button>
    </div>
  );
}
