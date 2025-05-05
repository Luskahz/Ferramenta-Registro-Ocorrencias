// src/components/information/devCard.jsx
import { Block, Title } from "../index";

// Devoluções Hectolitro
export function DevHl({
  count = 12,         // quantidade devolvida em hl
  percent = 7,        // percentual devolução HL
  totalInRoute = 30,  // total HL ainda em rota
}) {
  return (
    <Block.Full className="flex flex-col border-2 border-[var(--gray-80)] p-4">
      <Title.Sm_L>Devoluções HL</Title.Sm_L>

      {/* destaque quantidade e percentual */}
      <div className="flex items-baseline gap-2 mt-2">
        {/* componente: IndicadorDestaque */}
        <span className="text-white text-2xl font-extrabold">{count} hl</span>
        {/* componente: IndicadorDestaque */}
        <span className="text-[var(--gray-40)] text-lg">({percent}%)</span>
      </div>

      {/* indicador secundário */}
      <div className="mt-4 text-[var(--gray-60)] text-sm">
        {/* componente: IndicadorSecundario */}
        Total HL em rota: {totalInRoute} hl
      </div>
    </Block.Full>
  );
}

// Devoluções PDV
export function DevPDV({
  count = 8,          // quantidade devolvida em PDV
  percent = 5,        // percentual devolução PDV
  totalInRoute = 20,  // total PDV ainda em rota
}) {
  return (
    <Block.Full className="flex flex-col border-2 border-[var(--gray-80)] p-4">
      <Title.Sm_L>Devoluções PDV</Title.Sm_L>

      {/* destaque quantidade e percentual */}
      <div className="flex items-baseline gap-2 mt-2">
        {/* componente: IndicadorDestaque */}
        <span className="text-white text-2xl font-extrabold">{count}</span>
        {/* componente: IndicadorDestaque */}
        <span className="text-[var(--gray-40)] text-lg">({percent}%)</span>
      </div>

      {/* indicador secundário */}
      <div className="mt-4 text-[var(--gray-60)] text-sm">
        {/* componente: IndicadorSecundario */}
        Total PDV em rota: {totalInRoute}
      </div>
    </Block.Full>
  );
}

// Card que agrupa ambas
export function DevCard() {
  return (
    <Block.Full className="gap-2 flex-col sm:flex-row">
      {/* Passar props quando integrar ao dashboard */}
      <DevHl count={12} percent={7} totalInRoute={30} />
      <DevPDV count={8} percent={5} totalInRoute={20} />
    </Block.Full>
  );
}

export default DevCard;
