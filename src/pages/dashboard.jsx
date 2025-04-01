import Background from "../components/background.jsx";
import { GlobalElements } from "../components/pageElements/layout.jsx";
import PrimaryElement from "../components/ui/ui-blocks/primaryElements.jsx";
import PrimaryElementTitle from "../components/ui/ui-typography/primaryElementTitle.jsx";
function Dashboard() {
  return (
    <Background>
      <GlobalElements>
        <main className="CONTENT flex h-screen w-screen justify-center">
          <div className=" grid h-[20rem] w-[85rem] grid-cols-1 gap-2 bg-gray-800 sm:grid-cols-2 md:grid-cols-4">
            <PrimaryElement>
             <PrimaryElementTitle>ENTREGAS RESTANTES</PrimaryElementTitle>
            <div className="DETAILS flex flex-row items-center gap-10 p-2 size-full">
              <h2 className="text-gray-300 text-2xl font-bold bg-gray-500 rounded-lg size-30 flex items-center justify-center pb-1">300/566</h2>
                <div className="GRAPICS size-30 bg-gray-200 rounded-full flex justify-center items-center">
                </div>
            </div>
            </PrimaryElement>
            <PrimaryElement>
             <PrimaryElementTitle>DEVOLUÇÕES TOTAIS</PrimaryElementTitle>
            <div className="DETAILS flex flex-col items-center gap-2 p-2 size-full">
              <div className="text-gray-300 text-2xl font-bold gap-1 rounded-lg size-full flex items-center justify-center">
                <h3 className="bg-gray-700 rounded-sm size-full">PDV</h3>
                <h3 className="bg-gray-700 rounded-sm size-full">%2,5</h3>
                <h3 className="bg-gray-700 rounded-sm size-full">10</h3>
              </div>
              <div className="text-gray-300 text-2xl font-bold gap-1 rounded-lg size-full flex items-center justify-center">
                <h3 className="bg-gray-700 rounded-sm size-full">HL</h3>
                <h3 className="bg-gray-700 rounded-sm size-full">%2,5</h3>
                <h3 className="bg-gray-700 rounded-sm size-full">10</h3>
              </div>
              </div>
            </PrimaryElement>
            
          </div>
        </main>
      </GlobalElements>
    </Background>
  );
}

export default Dashboard;
