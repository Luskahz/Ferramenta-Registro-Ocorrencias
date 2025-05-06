// src/components/information/AderenciaEntregaCard.jsx
import React from "react";
import { Title, Block } from "../index";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

export default function AderenciaEntregaCard({
  dentro = 85,
  fora   = 15,
}) {
  const data = [
    { name: "Dentro", value: dentro },
    { name: "Fora",  value: fora   },
  ];

  return (
    <Block.Full className="flex flex-col border-2 border-[var(--gray-80)] p-4">
      <Title.Sm_L>Aderência ao Raio (Entregas)</Title.Sm_L>

      <div className="flex items-center h-full">
        {/* Texto lateral */}
        <div className="w-2/3 text-[var(--gray-60)] text-sm">
          Dentro: {dentro}%<br/>
          Fora: {fora}%
        </div>

        {/* Gráfico ocupa 1/3 do espaço */}
        <div className="w-1/3 h-full">
          {/* componente: PieChartAderencia */}
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="50%"
                outerRadius="80%"
                dataKey="value"
              >
                <Cell fill="#4ade80" />
                <Cell fill="#f87171" />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Block.Full>
  );
}
