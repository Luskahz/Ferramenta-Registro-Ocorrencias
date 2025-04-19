import Background from "../components/background.jsx";
import { GlobalElements } from "../components/pageElements/layout.jsx";
import PrimaryElement from "../components/ui/ui-blocks/primaryElements.jsx";
import Title_M from "../components/ui/ui-typography/Title_M.jsx";
import Title_M_Left from "../components/ui/ui-typography/Title_M_Left.jsx";
import { useState } from "react";
import UccurrenceCard from "../components/ui/ui-blocks/UccurrenceCard.jsx";

import React from "react";
import Wrapper from "../components/pageElements/wrapper.jsx";
import DevCard from "../components/information/devCard.jsx";
import LeftDeliver from "../components/information/leftDeliver.jsx";
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
              <div className="h-48 w-full rounded-sm border-2 border-gray-400 md:h-[50vh] md:w-2/5">
                <LeftDeliver />
              </div>
              <div className="h-48 w-full rounded-sm border-2 border-gray-400 md:h-[50vh] md:w-3/5">
                <DevCard />
              </div>
              <div className="h-48 w-full rounded-sm border-2 border-gray-400 md:h-[50vh] md:w-2/7"></div>
            </div>

            <div className="flex w-full flex-col gap-2 border-2 border-gray-400 sm:flex-row">
              <div className="h-42 w-full rounded-sm border-2 border-gray-700 sm:w-1/2 lg:w-1/4"></div>
              <div className="h-42 w-full rounded-sm border-2 border-gray-700 sm:w-1/2 lg:w-1/4"></div>
              <div className="h-42 w-full rounded-sm border-2 border-gray-700 sm:w-1/2 lg:w-1/4"></div>
              <div className="h-42 w-full rounded-sm border-2 border-gray-700 sm:w-1/2 lg:w-1/4"></div>
            </div>
            <div
              className={`Occurrences z-0 w-full border-t-3 border-gray-950 bg-gray-900 p-1 pl-3 ${hover ? "h-[20rem]" : "h-[6vh]"} absolute bottom-0 transition-all duration-300`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <Title_M_Left>Ocorrencias</Title_M_Left>
              <div className="OccurrencesList scrollbar-custom flex gap-5 overflow-x-auto">
                <UccurrenceCard></UccurrenceCard>
                <UccurrenceCard></UccurrenceCard>
                <UccurrenceCard></UccurrenceCard>
                <UccurrenceCard></UccurrenceCard>
                <UccurrenceCard></UccurrenceCard>
                <UccurrenceCard></UccurrenceCard>
                <UccurrenceCard></UccurrenceCard>
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
        </Wrapper>
      </GlobalElements>
    </Background>
  );
}

export default Dashboard;
