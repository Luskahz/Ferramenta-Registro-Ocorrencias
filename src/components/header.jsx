import React from "react"
import "./styles/header.css"

const Header = ({children}) => {
    return (
        <>
        <header>
            <div className="start-itens">
                <div className="side-menu-button">&#9776;</div>
                <div className="context-icon-button"></div>
                <div className="logo-icon-button"></div>
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
