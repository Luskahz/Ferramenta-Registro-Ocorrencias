import React from "react";

export default function UserSideBar({ onClose }) {
  return (
    <div
      className="USER-SIDE-BAR fixed top-0 right-0 bottom-0 left-0 z-50 bg-[rgba(0,0,0,0.5)]"
      onClick={onClose}
    >
      <div
        className="fixed right-0 h-screen w-[20rem] bg-[var(--gray-90)]"
        onClick={(e) => e.stopPropagation()}
      >
        <header className="flex items-center justify-between p-2">
          <div className="LOGO closeModalButton flex size-[2.5rem] items-center justify-center overflow-hidden rounded-full border border-gray-500 pb-[3.5px] hover:bg-gray-700">
            <img
              src="picture.jpg"
              alt="profile picture"
              className="aspect-square hover:brightness-90"
            />
          </div>
          <button
            className="closeModalButton flex size-[2.5rem] items-center justify-center border border-gray-500 pb-[3.5px] text-gray-50 hover:bg-gray-700"
            onClick={onClose}
          >
            &#x2A2F;
          </button>
        </header>
      </div>
    </div>
  );
}
