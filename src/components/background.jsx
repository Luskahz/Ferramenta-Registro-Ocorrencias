import React from "react";


const Background = ({ children }) => {
    return (
        <div className={ "relative bg-gray-950 min-h-screen w-screen flex flex-col overflow-hidden justify-center items-center" }>
            {children}
        </div>
    );
};

export default Background; 