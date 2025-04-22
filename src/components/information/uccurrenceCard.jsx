import { Title } from "../index";

export default function OccurrenceCard() {
  return (
    <div className="OccurrenceCard overflow-hidden w-[20rem] h-[6rem] shrink-0 transform rounded-sm  border-1  border-[var(--gray-80)] hover:border-[var(--gray-65)] transition-colors duration-1000  flex flex-col items-start gap-3  px-4 py-2  ">
        <Title.Xs_L className={"p-0 pb-0"}>12345 - Super Bebidas</Title.Xs_L>
      <div className=" flex flex-row justify-between gap-5">
        <Title.Xs className={"overflow-hidden p-0"}>R$ 1.250,00 • 5,2 hl</Title.Xs>
        <Title.Xs className={"overflow-hidden p-0"}>Pedido Cancelado</Title.Xs>
      </div>
     
    </div>
  );
}
