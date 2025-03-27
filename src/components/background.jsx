import React from "react";


const Background = ({ children }) => {
    return (
        <div className={ "relative bg-gray-950 w-full h-full min-w-screen min-h-screen flex flex-col justify-center items-center" }>
            {children}
        </div>
    );
};

export default Background; 