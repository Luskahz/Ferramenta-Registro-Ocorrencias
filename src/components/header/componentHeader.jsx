import React from "react";
import GlobalHeader from "./globalHeader";
import LocalHeader from "./localHeader";

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
