import React from "react"
import GlobalHeader from "./GlobalHeader";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sideBarRight";



const Page = ({ children }) => {

    return(
        <>
        <GlobalHeader />
        <SideBarRight />
        <SideBarLeft />
            <div className="page-content">
              <h1>PAGINA INICIAL</h1>
              <main className="main-content">
                {children}
              </main>
    
            </div>
        </>
       
    )
  }

export default Page;