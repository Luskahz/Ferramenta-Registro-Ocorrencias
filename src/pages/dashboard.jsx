import React, { useState } from "react";

import ReversaoCard, { OccurrenceList } from "../components/information/ReversaoCard.jsx"
import EquipeCard from "../components/information/EquipeCard.jsx";
import AderenciaEntregaCard from "../components/information/AderenciaEntregaCard.jsx";
import AderenciaDevolucaoCard from "../components/information/AderenciaDevolucaoCard.jsx";
import FarolDevolucoesCard from "../components/information/FarolDevolucoesCard.jsx";
import {
  GlobalElements,
  Background,
  Wrapper,
  DevCard,
  LeftDeliver,
  UccurenceBar,
  TRCard,
} from "../components/index";

const listaDevolucoesDoDia = [
  { motivo: "Produto danificado", qtd: 4 },
  { motivo: "Cliente não estava", qtd: 2 },
  { motivo: "Erro de sistema", qtd: 1 },
  { motivo: "NF divergente", qtd: 3 },
  { motivo: "Sem caixa de proteção", qtd: 1 },
];

function Dashboard() {
  const [hover, setHover] = useState(false);

  return (
    <Background>
      <GlobalElements>
        <Wrapper>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <main className="CONTENT mx-auto flex min-h-screen w-[100vw] flex-col items-center justify-start gap-3 overflow-y-auto px-4 sm:px-6 md:px-8">
            <div className="flex w-full flex-col gap-2 md:max-h-[50vh] md:flex-row md:overflow-y-auto">
              <div className="h-48 w-full rounded-sm md:h-[50vh] md:w-2/5">
                <LeftDeliver />
              </div>
              <div className="h-48 w-full rounded-sm md:h-[50vh] md:w-3/5">
                <DevCard />
              </div>
              <div className="h-48 w-full rounded-sm md:h-[50vh] md:w-2/7 overflow-hidden">
                <ReversaoCard />
              </div>
            </div>

            <div className="flex w-full flex-col gap-2 sm:flex-row">
              <div className="h-42 w-full sm:w-1/2 lg:w-1/4">
                <EquipeCard emRota={8} chegaram={5} />
              </div>
              <div className="h-42 w-full sm:w-1/2 lg:w-1/4">
                <TRCard pctTempoRota={75} pctTml={60} />
              </div>
              {/* ...outros cards */}
              <div className="h-42 w-full md:w-1/2">
                <AderenciaEntregaCard dentro={85} fora={15} />
              </div>
              <div className="h-42 w-full md:w-1/2">
                <AderenciaDevolucaoCard dentro={70} fora={30} />
              </div>
            </div>
            <div className="flex w-full flex-col gap-2 md:max-h-[50vh] md:flex-row md:overflow-hidden pb-20">
              <FarolDevolucoesCard devolucoes={listaDevolucoesDoDia} />
            </div>
          </main>
        </Wrapper>
        <UccurenceBar hover={hover} setHover={setHover} />
      </GlobalElements>
    </Background>
  );
}

export default Dashboard;
