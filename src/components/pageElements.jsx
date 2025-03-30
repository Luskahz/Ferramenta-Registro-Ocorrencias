import React, { useState } from "react";
import Header from "../components/Header";
import SideMenuBar from "./sideMenuBar";
import UserSideBar from "./userSideBar";

export const Wrapper = ({ children }) => {
  return (
    <div className="WRAPPER scrollbar-custom mt-25 flex flex-wrap items-center justify-center gap-4 overflow-y-auto bg-gray-900 p-5">
      {children}
    </div>
  );
};

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
