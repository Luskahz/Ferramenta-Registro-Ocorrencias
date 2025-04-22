import React from "react";

import { GlobalHeader, LocalHeader } from "../index";

function Header({ openSideMenubar, openUserSidebar }) {
  return (
    <header className="HEADER fixed top-0 z-10 flex flex-col">
      <GlobalHeader
        openSideMenubar={openSideMenubar}
        openUserSidebar={openUserSidebar}
      />
      <LocalHeader />
    </header>
  );
}

export default Header;
