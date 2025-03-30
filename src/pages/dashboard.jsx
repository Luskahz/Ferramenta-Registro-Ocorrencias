import Background from "../components/background.jsx";
import { GlobalElements } from "../components/pageElements.jsx";

function Dashboard() {
  return (
    <Background>
      <GlobalElements>
        <div className="CONTENT grid h-[20rem] w-[85rem] grid-cols-1 gap-2 bg-gray-800 sm:grid-cols-2 md:grid-cols-4">
          <div className="h-full w-full bg-gray-600"></div>
          <div className="h-full w-full bg-gray-600"></div>
          <div className="h-full w-full bg-gray-600"></div>
          <div className="h-full w-full bg-gray-600"></div>
        </div>
      </GlobalElements>
    </Background>
  );
}

export default Dashboard;
