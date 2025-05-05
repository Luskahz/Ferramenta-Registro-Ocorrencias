{/*import { GlobalElements, Background } from "../components/index";

export const CME = () => {
  return (
    <>
      <Background>
        <GlobalElements>
        </GlobalElements>
      </Background>
    </>
  );
};

*/}
import React, { useState } from "react";
import {
  GlobalElements,
  Background,
  Wrapper,
  UccurenceBar,
  Title,
  Block
} from "../components/index";
import { PieChart, Pie, Cell } from "recharts";

export default function CME() {
  const [hover, setHover] = useState(false);

  // Dados fictícios para gráficos
  const adherenceRealizedData = [
    { name: "Dentro", value: 85 },
    { name: "Fora", value: 15 }
  ];
  const adherenceReturnedData = [
    { name: "Dentro", value: 70 },
    { name: "Fora", value: 30 }
  ];

  return (
    <Background>
      <GlobalElements>
        <Wrapper>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <main className="CONTENT mx-auto flex min-h-screen w-[100vw] flex-col items-center justify-start gap-3 overflow-y-auto px-4 sm:px-6 md:px-8">

            {/* Linha de indicadores de totais */}
            <div className="flex w-full flex-col gap-2 md:flex-row">
              <div className="h-48 w-full md:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>120</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-48 w-full md:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>95</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-48 w-full md:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>50</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-48 w-full md:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>30</Title.Lg>
                </Block.Full>
              </div>
            </div>

            {/* Linha de indicadores de entregas */}
            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <div className="h-48 w-full sm:w-1/2 lg:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>Total frotas válidas em rota</Title.Sm>
                  <Title.Lg>15</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-48 w-full sm:w-1/2 lg:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>110</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-48 w-full sm:w-1/2 lg:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>10</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-48 w-full sm:w-1/2 lg:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>5</Title.Lg>
                </Block.Full>
              </div>
            </div>

            {/* Linha de indicadores de percentuais e farol */}
            <div className="flex w-full flex-col gap-2 md:flex-row">
              <div className="h-42 w-full md:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>PDV: 8% / HL: 12%</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-42 w-full md:w-1/4">
                {/* Farol de devoluções com botão para detalhes */}
                <Block.Full className="flex flex-col border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm_L>Farol de devoluções</Title.Sm_L>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                      <div className="h-3 w-3 bg-red-500 rounded-full mr-2"></div>
                      <span className="text-sm text-[var(--gray-60)]">Atenção</span>
                    </div>
                    <button className="border border-[var(--gray-80)] text-[var(--gray-60)] px-2 py-1 rounded">
                      Detalhes
                    </button>
                  </div>
                </Block.Full>
              </div>
              <div className="h-42 w-full md:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>12</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-42 w-full md:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>xx</Title.Sm>
                  <Title.Lg>PDV: 5% / HL: 7%</Title.Lg>
                </Block.Full>
              </div>
            </div>

            {/* Linha de indicadores de aderência com gráficos */}
            <div className="flex w-full flex-col gap-2 md:flex-row">
              <div className="h-48 w-full md:w-1/2">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>Aderência ao raio (entregas)</Title.Sm>
                  {/* gráfico de pizza */}
                  <PieChart width={100} height={100}>
                    <Pie
                      data={adherenceRealizedData}
                      dataKey="value"
                      cx={50}
                      cy={50}
                      innerRadius={30}
                      outerRadius={50}
                    >
                      <Cell fill="#4ade80" />
                      <Cell fill="#f87171" />
                    </Pie>
                  </PieChart>
                </Block.Full>
              </div>
              <div className="h-48 w-full md:w-1/2">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>Aderência ao raio (devoluções)</Title.Sm>
                  {/* gráfico de pizza */}
                  <PieChart width={100} height={100}>
                    <Pie
                      data={adherenceReturnedData}
                      dataKey="value"
                      cx={50}
                      cy={50}
                      innerRadius={30}
                      outerRadius={50}
                    >
                      <Cell fill="#4ade80" />
                      <Cell fill="#f87171" />
                    </Pie>
                  </PieChart>
                </Block.Full>
              </div>
            </div>

            {/* Linha de indicadores de equipes e tempos */}
            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <div className="h-42 w-full sm:w-1/2 lg:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>Equipes em rota</Title.Sm>
                  <Title.Lg>8</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-42 w-full sm:w-1/2 lg:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>Equipes que chegaram</Title.Sm>
                  <Title.Lg>5</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-42 w-full sm:w-1/2 lg:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>Tempo em rota (chegada)</Title.Sm>
                  <Title.Lg>02:15 h</Title.Lg>
                </Block.Full>
              </div>
              <div className="h-42 w-full sm:w-1/2 lg:w-1/4">
                {/* componente: IndicadorCard */}
                <Block.Full className="flex flex-col items-center justify-center border-2 border-[var(--gray-80)] p-4">
                  <Title.Sm>Tempo médio de liberação</Title.Sm>
                  <Title.Lg>00:45 h</Title.Lg>
                </Block.Full>
              </div>
            </div>

            {/* Top 5 motoristas críticos (lista horizontal) */}
            <div className="w-full">
              <Title.Sm_L>Top 5 Motoristas Críticos</Title.Sm_L>
              <div className="flex overflow-x-auto gap-2 py-2">
                {/* componente: IndicadorCard */}
                <div className="flex flex-col border-2 border-[var(--gray-80)] rounded-sm min-w-[12rem] p-4">
                  <Title.Sm>Motorista A</Title.Sm>
                  <Title.Xs>3 PDVs restantes</Title.Xs>
                </div>
                <div className="flex flex-col border-2 border-[var(--gray-80)] rounded-sm min-w-[12rem] p-4">
                  <Title.Sm>Motorista B</Title.Sm>
                  <Title.Xs>2 PDVs restantes</Title.Xs>
                </div>
                <div className="flex flex-col border-2 border-[var(--gray-80)] rounded-sm min-w-[12rem] p-4">
                  <Title.Sm>Motorista C</Title.Sm>
                  <Title.Xs>5 PDVs restantes</Title.Xs>
                </div>
                <div className="flex flex-col border-2 border-[var(--gray-80)] rounded-sm min-w-[12rem] p-4">
                  <Title.Sm>Motorista D</Title.Sm>
                  <Title.Xs>1 PDV restante</Title.Xs>
                </div>
                <div className="flex flex-col border-2 border-[var(--gray-80)] rounded-sm min-w-[12rem] p-4">
                  <Title.Sm>Motorista E</Title.Sm>
                  <Title.Xs>4 PDVs restantes</Title.Xs>
                </div>
              </div>
            </div>

          </main>
        </Wrapper>
        <UccurenceBar hover={hover} setHover={setHover} />
      </GlobalElements>
    </Background>
  );
}

