import React from 'react';

const SideBarLeft = ({ onClose }) => {
  return (
    <div 
      className="sideBarLeft fixed z-50 top-0 left-0 right-0 bottom-0 bg-[rgba(16,24,40,0.5)]"
      onClick={onClose} 
    >
      <div 
        className="bg-gray-800 h-screen w-[20rem]" 
        onClick={(e) => e.stopPropagation()}
      >
        <header className='flex justify-between items-center p-2'>
          <div className='LOGO closeModalButton h-[3rem] w-[3rem] flex justify-center items-center rounded-full hover:bg-gray-700 border-gray-500 border pb-[3.5px]'>
            img
          </div>
          <button 
            className="closeModalButton text-gray-50 h-[2rem] w-[2rem] flex justify-center items-center hover:bg-gray-700 border-gray-500 border pb-[3.5px]"
            onClick={onClose}
          >
            &#x2A2F;
          </button>
        </header>
      </div>
    </div>
  );
};

export default SideBarLeft;