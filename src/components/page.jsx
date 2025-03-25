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
        <div className="page-content flex flex-row justify-center items-center min-h-full min-w-full z-2">
          {children}
        </div>
        </>
       
    )
  }

export const Content =({ children }) =>{

  return(
    <div className="flex flex-row justify-center items-center  bg-gray-100" >
        {children}
    </div>
  )
}
