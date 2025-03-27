import React from 'react';


const SideBarLeft = ({isOpen, closeModal }) => {
    if (isOpen) return null;

    return (
        <div className="sideBarLeft absolute z-50 top-0 left-0 right-0 bottom-0 bg-[rgba(16,24,40,0.3)]">
            <div className="bg-gray-800 h-screen w-[20rem]">   
                <header className='flex flex-row justify-between p-2'>
                <div className='LOGO'>a</div>
                <button className="CloseModalButton flex h-full w-[2rem] items-center justify-center text-white bg-gray-900 hover:bg-gray-800 rounded-sm cursor-pointer border-[1.5px] border-gray-700"
                onClick={closeModal}
                >x</button>

                </header> 

            </div>


        </div>
    )
}



export default SideBarLeft