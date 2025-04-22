import { Title } from "../index";

export function GestaoPages() {
  return (
    <>
      <li className="filter transition hover:brightness-75">
        <Title.Sm_L>
          <a href="/monitoramento">MONITORAMENTO</a>
        </Title.Sm_L>
      </li>
    </>
  );
}

export function Navlist() {
  return (
    <>
      <nav className="p-5 pt-10">
        <ul>
          <GestaoPages />
        </ul>
      </nav>
    </>
  );
}

export default Navlist;
