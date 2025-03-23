import React from "react"
import GlobalHeader from "./GlobalHeader";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sideBarRight";



const Page = ({ children }) => {

    return(
        <>
        <SideBarRight />
        <SideBarLeft />
        <GlobalHeader />
        <div className="page-content">
          {children}
        </div>
        </>
       
    )
  }

export default Page;