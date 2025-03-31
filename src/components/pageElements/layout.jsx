import React, { useState } from "react";
import Header from "../header/componentHeader";
import SideMenuBar from "../sidebar/sideMenuBar";
import UserSideBar from "../sidebar/userSideBar";
import Wrapper from "./wrapper";

export function GlobalElements({ children }) {
  //variaveis para o SideMenubar
  const [isSideMenubarOpen, setIsSideMenubarOpen] = useState(false);
  const openSideMenubar = () => setIsSideMenubarOpen(true);
  const closeSideMenubar = () => setIsSideMenubarOpen(false);

  //variaveis para o UserSideBar
  const [isUserSidebarOpen, setIsUserSidebarOpen] = useState(false);
  const openUserSidebar = () => setIsUserSidebarOpen(true);
  const closeUserSidebar = () => setIsUserSidebarOpen(false);

  return (
    <>
      {isUserSidebarOpen && <UserSideBar onClose={closeUserSidebar} />}
      {isSideMenubarOpen && <SideMenuBar onClose={closeSideMenubar} />}
      <Header
        openSideMenubar={openSideMenubar}
        openUserSidebar={openUserSidebar}
      />
      <Wrapper>{children}</Wrapper>
    </>
  );
}
