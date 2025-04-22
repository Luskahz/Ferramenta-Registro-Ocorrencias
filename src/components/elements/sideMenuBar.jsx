import React from "react";
import { Navlist } from "../index";

export default function SideMenuBar({ onClose }) {
  return (
    <div
      className="sideBarLeft fixed top-0 right-0 bottom-0 left-0 z-50 bg-[rgba(0,0,0,0.5)]"
      onClick={onClose}
    >
      <div
        className="h-screen w-[20rem] bg-[var(--gray-90)]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="HEADER flex items-center justify-between p-2">
          <a
            href=""
            className="LOGO closeModalButton flex size-[2.5rem] items-center justify-center overflow-hidden rounded-full border-[0.5px] border-[var(--gray-80)] select-none hover:bg-[var(--gray-70)]"
          >
            <img
              src="picture.jpg"
              alt="menu Icon"
              className="aspect-square hover:brightness-90"
            />
          </a>
          <button
            className="CLOSE-MODAL-BUTTON flex size-[2.5rem] items-center justify-center rounded-sm border-[0.5px] border-[var(--gray-85)] pb-[3.5px] text-[var(--gray-50)] select-none hover:bg-[var(--gray-87)]"
            onClick={onClose}
          >
            &#x2A2F;
          </button>
        </header>
        <Navlist />
      </div>
    </div>
  );
}
