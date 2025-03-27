import React from "react";
import NavActions from "./navActions";
import { Children } from "react";

function GlobalHeader({Children}) {
  return (
    <>
    <header className="z-10 fixed flex top 0 justify-center items-start">
      <div className="fixed top-0 GLOBAL-HEADER flex h-[var(--GlobalHeaderH)] w-screen flex-row items-center justify-between bg-gray-900">
        <div className="start-itens m-2 flex h-[50%] w-[40%] flex-row items-center gap-[0.5rem] bg-gray-900">
          <button className="side-menu-button flex h-full w-[2rem] items-center justify-center text-white bg-gray-900 hover:bg-gray-800 rounded-sm cursor-pointer border-[1.5px] border-gray-700">&#9776;</button>
          <a className="logo-icon-button h-full w-[2rem] rounded-full bg-gray-800 hover:bg-gray-700"></a>
          <div className="Breadcrumb h-full min-w-[10rem] rounded-sm bg-gray-700"></div>
        </div>
        <div className="end-itens m-2 flex h-[50%] w-[50%] flex-row-reverse gap-5 bg-gray-900">
          <button className="profile-menu-button h-full w-[2rem] bg-gray-800 rounded-full hover:bg-gray-700"></button>
          <nav className="navbar h-full min-w-[2rem] bg-gray-900 flex flex-row gap-2">
            <NavActions />
          </nav>
          {/*<button className="search-icon-button h-full w-[20rem] border-gray-700 border-[1.5px] cursor-pointer"></button>*/}
        </div>
      </div>
      {Children}
    </header>
      
    </>
  );
};

export default GlobalHeader;
