import React, { useState } from "react"
import GlobalHeader from "./GlobalHeader";
import SideMenuBar from "./sideMenuBar";
import UserSideBar from "./userSideBar";


export const Wrapper = ({ children }) => {
  return (
    <div className="WRAPPER w-[80rem] h-[100rem] max-h-none  overflow-y-auto overflow-x-hidden flex flex-wrap gap-4 mt-17 p-4 bg-gray-900 justify-center items-center scrollbar-custom">
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
      {isUserSidebarOpen && <UserSideBar  onClose={closeUserSidebar}
      />}
      {isSideMenubarOpen && <SideMenuBar  onClose={closeSideMenubar}
      />}
      <GlobalHeader 
        openSideMenubar={openSideMenubar}
        openUserSidebar={openUserSidebar}
      />
      <Wrapper>
        {children}
      </Wrapper>
    </>
  );
}
 
  
