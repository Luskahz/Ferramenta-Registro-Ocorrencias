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
      <div className="w-[80%] min-h-screen h-auto flex flex-wrap gap-4 bg-gray-400">
        {children}
      </div>
    );
  };  
  
