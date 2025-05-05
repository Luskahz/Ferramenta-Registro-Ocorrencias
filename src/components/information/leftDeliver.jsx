// src/components/information/leftDeliver.jsx
import { Title, Block } from "../index";

export default function LeftDeliver({
  totalFaturadas = 120,
  totalEmRota   = 95,
  mapasFaturados = 50,
  mapasEmRota    = 30,
  realizadas     = 110,
  restantes      = 10,
}) {
  return (
    <Block.Full className="flex flex-col border-2 border-[var(--gray-80)] p-4">
      {/* título do bloco */}
      <Title.Sm_L>Entregas</Title.Sm_L>

      {/* indicadores de prioridade (em destaque) */}
      <div className="mt-2 flex flex-col gap-2">
        {/* componente: IndicadorDestaque */}
        <div>
          <span className="text-[var(--gray-40)] text-lg font-bold">Realizadas:</span>{" "}
          <span className="text-white text-2xl font-extrabold">{realizadas}</span>
        </div>
        {/* componente: IndicadorDestaque */}
        <div>
          <span className="text-[var(--gray-40)] text-lg font-bold">Restantes:</span>{" "}
          <span className="text-white text-2xl font-extrabold">{restantes}</span>
        </div>
      </div>

      {/* indicadores secundários (menos proeminentes) */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-[var(--gray-60)] text-sm">
        {/* componente: IndicadorSecundario */}
        <div>
          <span className="font-medium">Faturadas:</span> {totalFaturadas}
        </div>
        <div>
          <span className="font-medium">Em rota:</span> {totalEmRota}
        </div>
        <div>
          <span className="font-medium">Mapas faturados:</span> {mapasFaturados}
        </div>
        <div>
          <span className="font-medium">Mapas em rota:</span> {mapasEmRota}
        </div>
      </div>

      {/* futuro componente: botão detalhes / modal */}
      {/* <button className="mt-4 self-end text-sm text-[var(--gray-60)] hover:text-white">
        Ver detalhes
      </button> */}
    </Block.Full>
  );
}
