import Title_P_Left from "../ui/ui-typography/Title_P_Left";

const GestaoPages = () => {
  return (
    <>
      <li className="filter transition hover:brightness-75">
        <Title_P_Left>
          <a href="/monitoramento">MONITORAMENTO</a>
        </Title_P_Left>
      </li>
    </>
  );
};

export const Navlist = () => {
  return (
    <>
      <nav className="p-5 pt-10">
        <ul>
          <GestaoPages />
        </ul>
        <ul>
          <GestaoPages />
        </ul>
        <ul>
          <GestaoPages />
        </ul>
        <ul>
          <GestaoPages />
        </ul>
      </nav>
    </>
  );
};
