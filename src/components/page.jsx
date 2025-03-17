import React from "react"
import Header from "./header";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sideBarRight";



const Page = ({ children }) => {

    return(
        <div className="page-container">
            <Header />
        <div className="main-content">
            <SideBarRight />
            <SideBarLeft />
          <main className="content">
            {children}
          </main>

        </div>
      </div>
    );
  }

export default Page;