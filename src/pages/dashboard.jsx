import Background from "../components/background.jsx";
import { GlobalElements } from "../components/pageElements.jsx";

function Dashboard() {
  return (
    <Background>
      <GlobalElements>
        <div className="h-[1000rem] w-[60rem] bg-gray-300"></div>
      </GlobalElements>
    </Background>
  );
}

export default Dashboard;
