import React from "react";


const Background = ({ children, className = "" }) => {
    return (
        <div className={`relative bg-gray-950 min-h-screen flex ${className}`}>
            {children}
        </div>
    );
};

export default Background;