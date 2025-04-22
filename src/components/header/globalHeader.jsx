import { NavActions } from "../index";

export default function GlobalHeader({ openSideMenubar, openUserSidebar }) {
  return (
    <>
      <div className="GLOBAL-HEADER flex h-[var(--GlobalHeaderH)] w-screen flex-row items-center justify-between bg-[var(--gray-95)]">
        <div className="START-ITENS m-2 flex h-[50%] w-[40%] flex-row items-center gap-[0.5rem] bg-[var(--gray-95)]">
          <button
            className="SIDE-MENU-BUTTON flex h-full w-[2rem] cursor-pointer items-center justify-center rounded-sm border-[0.5px] border-[var(--gray-80)] bg-[var(--gray-90)] text-white select-none hover:bg-[var(--gray-87)]"
            onClick={openSideMenubar}
          >
            &#9776;
          </button>
          <a
            href="/"
            className="LOGO-ICON-BUTTON h-full w-[2rem] rounded-full bg-[var(--gray-90)] hover:bg-[var(--gray-87)]"
          ></a>
          <div className="BREADCRUMB h-full min-w-[10rem] rounded-sm border-[0.5px] border-[var(--gray-80)]"></div>
        </div>
        <div className="END-ITENS m-2 flex h-[50%] w-[50%] flex-row-reverse items-center gap-5 bg-[var(--gray-95)]">
          <button
            className="PROFILE-MENU-BUTTON h-full w-[2rem] rounded-full bg-[var(--gray-90)] hover:bg-[var(--gray-87)]"
            onClick={openUserSidebar}
          ></button>
          <nav className="NAVBAR flex h-full min-w-[6rem] flex-row gap-2">
            <NavActions />
          </nav>
          <button className="search-icon-button h-full w-[20rem] cursor-pointer border-[1.5px] border-[var(--gray-80)]"></button>
        </div>
      </div>
    </>
  );
}
