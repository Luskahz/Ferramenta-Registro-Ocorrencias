import Background from "../components/background.jsx";
import { GlobalElements } from "../components/pageElements/layout.jsx";

function Dashboard() {
  return (
    <Background>
      <GlobalElements>
        <div className="flex h-screen w-screen justify-center bg-gray-200">
          <div className="CONTENT grid h-[20rem] w-[85rem] grid-cols-1 gap-2 bg-gray-800 sm:grid-cols-2 md:grid-cols-4">
            <div className="h-full w-full bg-gray-600">
              <h1>ENTREGAS RESTANTES</h1>
              <h2>200/500</h2>
              <div>
                <h2>GRAFICO</h2>
              </div>
            </div>
            <div className="h-full w-full bg-gray-600"></div>
            <div className="h-full w-full bg-gray-600"></div>
            <div className="h-full w-full bg-gray-600"></div>
          </div>
        </div>
      </GlobalElements>
    </Background>
  );
}

export default Dashboard;
