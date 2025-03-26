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
      <div className="absolute z-1 w-full max-w-[75rem] min-h-[80vh] mx-auto flex flex-wrap gap-4 bg-gray-900 top-20">
        {children}
      </div>
    );
  };  
  
