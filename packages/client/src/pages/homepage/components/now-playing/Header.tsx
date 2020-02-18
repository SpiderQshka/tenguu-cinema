import React from "react";

export interface INowPlayingHeaderProps {}

export function Header(props: INowPlayingHeaderProps) {
  return (
    <header className="header">
      <h2 className="text">Now playing</h2>
      <div className="line"></div>
    </header>
  );
}
