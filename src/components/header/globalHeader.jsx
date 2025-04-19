import NavActions from "../navLinks/navActions";

export default function GlobalHeader({ openSideMenubar, openUserSidebar }) {
  return (
    <>
      <div className="GLOBAL-HEADER flex h-[var(--GlobalHeaderH)] w-screen flex-row items-center justify-between bg-gray-900">
        <div className="START-ITENS m-2 flex h-[50%] w-[40%] flex-row items-center gap-[0.5rem] bg-gray-900">
          <button
            className="side-menu-button flex h-full w-[2rem] cursor-pointer items-center justify-center rounded-sm border-[1.5px] border-gray-700 bg-gray-900 text-white select-none hover:bg-gray-800"
            onClick={openSideMenubar}
          >
            &#9776;
          </button>
          <a
            href="/"
            className="logo-icon-button h-full w-[2rem] rounded-full bg-gray-800 hover:bg-gray-700"
          ></a>
          <div className="BREADCRUMB h-full min-w-[10rem] rounded-sm bg-gray-700"></div>
        </div>
        <div className="END-ITENS m-2 flex h-[50%] w-[50%] flex-row-reverse items-center gap-5 bg-gray-900">
          <button
            className="profile-menu-button h-full w-[2rem] rounded-full bg-gray-800 hover:bg-gray-700"
            onClick={openUserSidebar}
          ></button>
          <nav className="navbar flex h-full min-w-[6rem] flex-row gap-2 bg-gray-900">
            <NavActions />
          </nav>
          <button className="search-icon-button h-full w-[20rem] cursor-pointer border-[1.5px] border-gray-700"></button>
        </div>
      </div>
    </>
  );
}
