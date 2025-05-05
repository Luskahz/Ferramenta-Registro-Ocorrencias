// src/components/information/reversaoCard.jsx
import React from "react";
import { Block, Title } from "../index";

// Lista de ocorrências em vigor (scroll vertical)
export function OccurrenceList({ items = [] }) {
  return (
    <div className="scrollbar-custom overflow-y-auto max-h-24 mt-2 px-1 pb-3">
      {items.map((occ, idx) => (
        // componente: OccurrenceItem
        <div
          key={idx}
          className="flex justify-between items-center border-b border-[var(--gray-80)] py-1"
        >
          <span className="text-[var(--gray-60)] text-sm">{occ.label}</span>
          <span className="text-white text-sm">{occ.value}</span>
        </div>
      ))}
    </div>
  );
}

// Componente principal de reversão e ocorrências (bloco estático)
export default function ReversaoCard({
  qtdOcorrencias = 12,
  pctOcorrencias = 8,    // em %
  pctReversaoHl = 7,     // em %
  pctReversaoPdv = 5,    // em %
  ocorrencias = [
    { label: "Pedido atrasado", value: "5 casos" },
    { label: "Produto danificado", value: "3 casos" },
    { label: "Endereço incorreto", value: "4 casos" },
    { label: "Falta de estoque", value: "2 casos" },
    { label: "Erro de sistema", value: "1 caso" },
  ],
}) {
  return (
    <Block.Full className="flex flex-col h-full border-2 border-[var(--gray-80)] p-4 overflow-hidden">
      <Title.Sm_L>Reversão & Ocorrências</Title.Sm_L>

      {/* indicadores resumidos */}
      <div className="grid grid-cols-2 gap-2">
        {/* componente: IndicadorResumo */}
        <div className="flex flex-col">
          <span className="text-[var(--gray-40)] text-xs">Qtd. ocorrências</span>
          <span className="text-white text-lg font-bold">{qtdOcorrencias}</span>
        </div>
        {/* componente: IndicadorResumo */}
        <div className="flex flex-col">
          <span className="text-[var(--gray-40)] text-xs">% ocorrências</span>
          <span className="text-white text-lg font-bold">{pctOcorrencias}%</span>
        </div>
        {/* componente: IndicadorResumo */}
        <div className="flex flex-col">
          <span className="text-[var(--gray-40)] text-xs">% reversão HL</span>
          <span className="text-white text-lg font-bold">{pctReversaoHl}%</span>
        </div>
        {/* componente: IndicadorResumo */}
        <div className="flex flex-col">
          <span className="text-[var(--gray-40)] text-xs">% reversão PDV</span>
          <span className="text-white text-lg font-bold">{pctReversaoPdv}%</span>
        </div>
      </div>

      {/* spacer flex para empurrar a lista ao bottom */}
      <div className="flex-1"></div>

      {/* lista de ocorrências em vigor (scroll vertical) */}
      <div>
        <Title.Sm className="mt-2">Ocorrências em vigor</Title.Sm>
        <OccurrenceList items={ocorrencias} />
      </div>
    </Block.Full>
  );
}
