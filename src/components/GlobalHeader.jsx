import React from "react"



const GlobalHeader = ({children}) => {
    return (
        <>
        <header className="absolute justify-between itens-center w-full h-[var(--GlobalHeaderH)] z-10 bg-gray-900 flex flex-row ">
            <div className="start-itens w-[200px] h-[calc(var(--GlobalHeaderH)-3vh)] bg-amber-50 ">
                <div className="side-menu-button w-[20px] h-[20px] bg-amber-400">&#9776;</div>
                <div className="logo-icon-button w-[20px] h-[20px]"></div>
                <div className="context-icon-button w-[20px] h-[20px]"></div>
            </div>
            <div className="end-itens w-[200px] h-[calc(var(--GlobalHeaderH)-3vh)] bg-amber-400 ">
                <div className="profile-menu-button w-[20px] h-[20px] bg-orange-200"></div>
                {children}
                <div className="search-icon-button w-[20px] h-[20px] bg-amber-700"></div>
            </div>

        </header>
        </>
    )
}


export default GlobalHeader
