import React from "react"

const GlobalHeader = ({children}) => {
    return (
        <>
        <header className="w-full h-[20hv] bg-">
            <div className="start-itens">
                <div className="side-menu-button">&#9776;</div>
                <div className="logo-icon-button"></div>
                <div className="context-icon-button"></div>
            </div>
            <div className="end-itens">
                <div className="profile-menu-button"></div>
                {children}
                <div className="search-icon-button"></div>
            </div>

        </header>
        </>
    )
}


export default GlobalHeader
