import React from "react";

export interface IHeaderMenuProps {}

export function HeaderMenu(props: IHeaderMenuProps) {
  return (
    <div className="menu-block">
      <button className="btn search-btn">
        <i className="fas fa-search"></i>
      </button>
      <button className="btn menu-btn">
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}
