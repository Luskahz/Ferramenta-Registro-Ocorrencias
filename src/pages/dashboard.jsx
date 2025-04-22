import React from "react";
import { useState } from "react";

import {
  GlobalElements,
  Background,
  Wrapper,
  DevCard,
  LeftDeliver,
  UccurenceBar,
  TRCard,
} from "../components/index";

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
              <div className="h-48 w-full rounded-sm border-2 border-[var(--gray-80)] md:h-[50vh] md:w-2/7"></div>
            </div>

            <div className="flex w-full flex-col gap-2  sm:flex-row">
              <div className="h-42 w-full rounded-sm  sm:w-1/2 lg:w-1/4">
                <TRCard></TRCard>
              </div>
              <div className="h-42 w-full rounded-sm sm:w-1/2 lg:w-1/4">
                <TRCard></TRCard>
              </div>
              <div className="h-42 w-full rounded-sm sm:w-1/2 lg:w-1/4">
                <TRCard></TRCard>
              </div>
              <div className="h-42 w-full rounded-sm sm:w-1/2 lg:w-1/4">
                <TRCard></TRCard>
              </div>
            </div>
          </main>
        </Wrapper>
        <UccurenceBar hover={hover} setHover={setHover} />
      </GlobalElements>
    </Background>
  );
}

export default Dashboard;
