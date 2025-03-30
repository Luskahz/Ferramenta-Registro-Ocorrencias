import React from "react";
import NavActions from "./navActions";

function GlobalHeader({ openSideMenubar, openUserSidebar }) {
  return (
    <>
      <div className="GLOBAL-HEADER flex h-[var(--GlobalHeaderH)] w-screen flex-row items-center justify-between bg-gray-900">
        <div className="START-ITENS m-2 flex h-[50%] w-[40%] flex-row items-center gap-[0.5rem] bg-gray-900">
          <button
            className="side-menu-button flex h-full w-[2rem] cursor-pointer items-center justify-center rounded-sm border-[1.5px] border-gray-700 bg-gray-900 text-white select-none hover:bg-gray-800"
            onClick={openSideMenubar}
          >
            &#9776;
          </button>
          <a className="logo-icon-button h-full w-[2rem] rounded-full bg-gray-800 hover:bg-gray-700"></a>
          <div className="Breadcrumb h-full min-w-[10rem] rounded-sm bg-gray-700"></div>
        </div>
        <div className="END-ITENS m-2 flex h-[50%] w-[50%] flex-row-reverse gap-5 bg-gray-900">
          <button
            className="profile-menu-button h-full w-[2rem] rounded-full bg-gray-800 hover:bg-gray-700"
            onClick={openUserSidebar}
          ></button>
          <nav className="navbar flex h-full min-w-[2rem] flex-row gap-2 bg-gray-900">
            <NavActions />
          </nav>
          <button className="search-icon-button h-full w-[20rem] cursor-pointer border-[1.5px] border-gray-700"></button>
        </div>
      </div>
    </>
  );
}

function LocalHeader({ children }) {
  return (
    <>
      <div className="LOCAL-HEADER h-[2rem] w-screen border-t-2 border-b-2 border-gray-800 bg-gray-950">
        {children}
      </div>
    </>
  );
}

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
