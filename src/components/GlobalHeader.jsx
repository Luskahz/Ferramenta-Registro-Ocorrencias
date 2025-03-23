import React from "react"



const GlobalHeader = ({children}) => {
    return (
        <>
        <header className="absolute justify-between items-center w-full h-[var(--GlobalHeaderH)] z-10 bg-gray-900 flex flex-row ">
            <div className="border-2 start-itens w-[40%] m-2 h-[calc(var(--GlobalHeaderH)-3vh)] bg-gray-900 flex flex-row items-center gap-5 ">
                <div className="side-menu-button w-[5%] h-full text-white border-1 flex items-center justify-center" >&#9776;</div>
                <div className="logo-icon-button w-[20px] h-full bg-amber-600">a</div>
                <div className="context-icon-button w-[20px] h-full bg-amber-900">a</div>
            </div>
            <div className="border-2 end-itens w-[40%] m-2 h-[calc(var(--GlobalHeaderH)-3vh)] bg-gray-900 flex flex-row">
                <div className="profile-menu-button w-[20px] h-full bg-orange-200"></div>
                <nav className="bg-amber-800 h-full w-[200px]">
                    {children}
                </nav>
                <div className="search-icon-button w-[20px] h-full bg-amber-700"></div>
            </div>

        </header>
        </>
    )
}


export default GlobalHeader
