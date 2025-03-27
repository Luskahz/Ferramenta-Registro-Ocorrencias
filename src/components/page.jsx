import React from "react"
import GlobalHeader from "./GlobalHeader";
import SideBarLeft from "./sideBarLeft";
import SideBarRight from "./sideBarRight";


export const Wrapper = ({ children }) => {
  return (
    <div className=" Wrapper w-[99%] min-h-[80vh] mx-auto overflow-y-auto flex flex-wrap gap-4 mt-10 p-4 bg-gray-900 justify-center items-center scrollbar-custom">
      {children}
    </div>
  );
}; 

export const Content = ({ children }) => {
  return (
    <main className="w-[50rem] h-auto bg-gray-200 rounded-lg ">
      {children}
    </main>
    
  );
}; 



export function GlobalElements({ children }) {

  return (
    <>
      <SideBarRight />
      <SideBarLeft/>
      <GlobalHeader />
      <Wrapper>
        <Content>{children}</Content>
      </Wrapper>
    </>
  );
}
 
  
