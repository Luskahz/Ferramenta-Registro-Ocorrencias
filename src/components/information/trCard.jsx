import { Title, Block } from "../index";

export default function TRCard({
  pctTempoRota = 75,  // em %
  pctTml       = 60,  // em %
}) {
  return (
    <Block.Full className="flex flex-col border-2 border-[var(--gray-80)] p-4">
      <Title.Sm_L>Percentuais de Tempo</Title.Sm_L>
      <div className="mt-2 grid grid-cols-2 gap-4">
        {/* componente: IndicadorResumo */}
        <div className="flex flex-col">
          <span className="text-[var(--gray-40)] text-sm">Tempo em rota</span>
          <span className="text-white text-xl font-bold">{pctTempoRota}%</span>
        </div>
        {/* componente: IndicadorResumo */}
        <div className="flex flex-col">
          <span className="text-[var(--gray-40)] text-sm">TML</span>
          <span className="text-white text-xl font-bold">{pctTml}%</span>
        </div>
      </div>
    </Block.Full>
  );
}