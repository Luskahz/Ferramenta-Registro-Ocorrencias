import Background from "../components/background.jsx";
import { GlobalElements } from "../components/pageElements/layout.jsx";
import PrimaryElement from "../components/ui/ui-blocks/primaryElements.jsx";
import Title_M from "../components/ui/ui-typography/Title_M.jsx";
import Title_M_Left from "../components/ui/ui-typography/Title_M_Left.jsx";
import { useState } from 'react';
import UccurrenceCard from "../components/ui/ui-blocks/UccurrenceCard.jsx";

import React from "react";
function Dashboard() {
  const [hover, setHover] = useState(false);
  let hOcorrencias = hover? 20 : 4

  return (
    <Background>
      <GlobalElements >
        <main className="CONTENT gap-3 flex h-screen w-screen flex-col justify-baseline items-center">
          <div className="w-full h-full bg-gray-800 flex flex-col gap-1 rounded-lg">
            <div className="flex gap-2 w-full h-[18.8rem] bg-gray-700">
            </div>
            <div className="flex gap-2 w-full h-[18.8rem] bg-gray-700">
            </div>
            
          </div>





          <div className={`Occurrences z-0 p-1 pl-3 bg-gray-800 border-t-3 border-gray-900 w-full h-[${hOcorrencias}rem] absolute bottom-0 transition-all duration-300`}
          onMouseEnter = {() => setHover(true)}
          onMouseLeave = {()=> setHover(false)}
          >
            <Title_M_Left>Ocorrencias</Title_M_Left>
            <div className="OccurrencesList flex gap-5 overflow-x-auto">
              <UccurrenceCard></UccurrenceCard>
              <UccurrenceCard></UccurrenceCard>
              <UccurrenceCard></UccurrenceCard>
              <UccurrenceCard></UccurrenceCard>
              <UccurrenceCard></UccurrenceCard>
              <UccurrenceCard></UccurrenceCard>
              <UccurrenceCard></UccurrenceCard>

            </div>
          </div>
        </main>
        
      </GlobalElements>
    </Background>
  );
}

export default Dashboard;
