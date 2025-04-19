import BlockFull from "../ui/ui-blocks/blockFull";
import PrimaryElement from "../ui/ui-blocks/primaryElements";
import Title_M_Left from "../ui/ui-typography/Title_M_Left";

function DevHl() {
  return (
    <BlockFull className="flex-col border-2 border-gray-800">
      <Title_M_Left>Devoluções Hectolitro</Title_M_Left>
      <div className="Content h-full w-full bg-gray-900"></div>
    </BlockFull>
  );
}
function DevPDV() {
  return (
    <BlockFull className="flex-col border-2 border-gray-800">
      <Title_M_Left>Devoluções Hectolitro</Title_M_Left>
      <div className="Content h-full w-full"></div>
    </BlockFull>
  );
}

export default function DevCard() {
  return (
    <BlockFull className="gap-2">
      <DevHl />
      <DevPDV />
    </BlockFull>
  );
}
