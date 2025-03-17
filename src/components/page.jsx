import React from "react"
import Header from "./header";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sideBarRight";



const Page = ({ children }) => {

    return(
        <>
        <Header />
        <SideBarRight />
        <SideBarLeft />
            <div className="page-content">
              <h1>PAGINA INICIAL</h1>
              <main className="main-content">
                {children}
              </main>
    
            </div>
        </>
       
    );
  }

export default Page;