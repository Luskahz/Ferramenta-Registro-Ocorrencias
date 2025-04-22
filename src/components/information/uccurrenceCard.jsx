import { Title } from "../index";

export default function OccurrenceCard() {
  return (
    <div className="OccurrenceCard overflow-hidden w-[20rem] h-[6rem] shrink-0 transform rounded-sm  border-1  border-[var(--gray-80)] hover:border-[var(--gray-65)] transition-colors duration-1000  flex flex-col items-start gap-3  px-4 py-2  ">
        <Title.Xs_L className={"p-0 pb-0"}>12345 - Super Bebidas</Title.Xs_L>
      <div className=" flex flex-row justify-between items-center">
        <Title.Xs>R$ 1.250,00 • 5,2 hl</Title.Xs>
        <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-semibold whitespace-nowrap">
          Pedido Cancelado
        </div>
      </div>
     
    </div>
  );
}
