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
      <div className="bg-gray-800 w-[95vw] max-w-[1200px] h-[95vh] max-h-[800px] overflow-auto mx-auto my-4 p-5 rounded-lg flex flex-wrap gap-5">
        {children}
      </div>
    );
  };  
  
