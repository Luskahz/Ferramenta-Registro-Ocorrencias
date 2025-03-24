import React from "react";

const GlobalHeader = ({ children }) => {
  return (
    <>
      <header className="absolute z-10 flex h-[var(--GlobalHeaderH)] w-full flex-row items-center justify-between bg-gray-900">
        <div className="start-itens m-2 flex h-[50%] w-[40%] flex-row items-center gap-5 bg-gray-900">
          <div className="side-menu-button flex h-full w-[2rem] items-center justify-center border-1 text-white">&#9776;</div>
          <div className="logo-icon-button h-full w-[2rem] bg-gray-700"></div>
          <div className="Breadcrumb h-full min-w-[2rem] bg-gray-700"></div>
        </div>
        <div className="end-itens m-2 flex h-[50%] w-[50%] flex-row-reverse gap-5 bg-gray-900">
          <div className="profile-menu-button h-full w-[2rem] bg-gray-700">P</div>
          <nav className="navbar h-full min-w-[2rem] bg-gray-700">{children}</nav>
          <div className="search-icon-button h-full w-[4rem] bg-gray-700">S</div>
        </div>
      </header>
    </>
  );
};

export default GlobalHeader;
