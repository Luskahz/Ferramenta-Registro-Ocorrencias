import Background from "../components/background.jsx";
import { GlobalElements } from "../components/pageElements/layout.jsx";
import PrimaryElement from "../components/ui/ui-blocks/primaryElements.jsx";
import PrimaryElementTitle from "../components/ui/ui-typography/primaryElementTitle.jsx";
function Dashboard() {
  let TotDelivery = 500
  let finalizedDelivery = 200;

  return (
    <Background>
      <GlobalElements>
        <main className="CONTENT flex h-screen w-screen flex-col justify-baseline items-center">
          <div className="FIRST_LINE grid h-[10rem] w-[85rem] grid-cols-1 gap-2 bg-gray-800 sm:grid-cols-2 md:grid-cols-4">
          <PrimaryElement>
          <PrimaryElementTitle>ENTREGAS RESTANTES</PrimaryElementTitle>
            <div className="flex flex-row items-center justify-center gap-10 p-2 w-full">
                <h2 className="text-white text-2xl font-bold bg-gray-700 rounded-xl w-28 h-10 flex items-center justify-center shadow-inner ring-2 ring-gray-400">
                {`${TotDelivery}/${finalizedDelivery}`}
                </h2>
                <div className="w-10 h-10 relative bg-amber-50 rounded-full">
                </div>
              </div>
          </PrimaryElement>

            <PrimaryElement>
             <PrimaryElementTitle>DEVOLUÇÕES TOTAIS</PrimaryElementTitle>

            </PrimaryElement>
            <PrimaryElement>
             <PrimaryElementTitle>DEVOLUÇÕES TOTAIS</PrimaryElementTitle>

            </PrimaryElement>
            <PrimaryElement>
             <PrimaryElementTitle>DEVOLUÇÕES TOTAIS</PrimaryElementTitle>

            </PrimaryElement>
          </div>
          <div className="SECOND_LINE grid h-[10rem] w-[85rem] grid-cols-1 gap-2 bg-gray-800 sm:grid-cols-2 md:grid-cols-4 ">


          </div>
        </main>
      </GlobalElements>
    </Background>
  );
}

export default Dashboard;
