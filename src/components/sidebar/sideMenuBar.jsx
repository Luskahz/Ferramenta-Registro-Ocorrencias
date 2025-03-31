import React from "react";
import { Navlist } from "../navLinks/navList";

const SideMenuBar = ({ onClose }) => {
  return (
    <div
      className="sideBarLeft fixed top-0 right-0 bottom-0 left-0 z-50 bg-[rgba(16,24,40,0.5)]"
      onClick={onClose}
    >
      <div
        className="h-screen w-[20rem] bg-gray-800"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="HEADER flex items-center justify-between p-2">
          <a
            href=""
            className="LOGO closeModalButton flex h-[2rem] w-[2rem] items-center justify-center rounded-full border border-gray-500 pb-[3.5px] select-none hover:bg-gray-700"
          >
            img
          </a>
          <button
            className="CLOSE-MODAL-BUTTON flex h-[2rem] w-[2rem] items-center justify-center rounded-sm pb-[3.5px] text-gray-200 select-none hover:bg-gray-700"
            onClick={onClose}
          >
            &#x2A2F;
          </button>
        </header>
        <Navlist />
      </div>
    </div>
  );
};

export default SideMenuBar;
