// src/components/information/FarolDevolucoesCard.jsx
import React from "react";
import { Title, Block } from "../index";

export default function FarolDevolucoesCard({
  devolucoes = [
    { motivo: "Produto danificado", qtd: 4 },
    { motivo: "Cliente não estava", qtd: 2 },
    { motivo: "Erro de sistema", qtd: 1 },
    // …mais itens
  ],
}) {
  return (
    <Block.Full className="flex flex-col border-2 border-[var(--gray-80)] p-4 w-full">
      <Title.Sm_L>Farol de Devoluções</Title.Sm_L>

      {/* Lista rolável de devoluções do dia */}
      <div className="overflow-y-auto max-h-[200px] mt-2">
        {devolucoes.map((dev, idx) => (
          // componente: FarolItem
          <div
            key={idx}
            className="flex justify-between items-center border-b border-[var(--gray-80)] py-2"
          >
            <span className="text-[var(--gray-60)] text-sm">
              {dev.motivo}
            </span>
            <span className="text-white text-sm">{dev.qtd} casos</span>
          </div>
        ))}
      </div>
    </Block.Full>
  );
}
