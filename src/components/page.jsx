import React from "react"
import GlobalHeader from "./GlobalHeader";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sideBarRight";



export const Page = ({ children }) => {

    return(
        <>
        <SideBarRight />
        <SideBarLeft />
        <GlobalHeader />
          {children}
        </>
    )
  }

  export const Content = ({ children }) => {
    return (
      <div className="absolute z-1 min-w-[95%] min-h-[95%] flex flex-wrap gap-4 bg-gray-400 top-20">
        {children}
      </div>
    );
  };  
  
