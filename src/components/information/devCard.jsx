import { Block, Title } from "../index";

export function DevHl() {
  return (
    <Block.Full className="flex-col border-2 border-[var(--gray-80)]">
      <Title.Sm_L>Devoluções Hectolitro</Title.Sm_L>
      <div className="Content h-full w-full"></div>
    </Block.Full>
  );
}
export function DevPDV() {
  return (
    <Block.Full className="flex-col border-2 border-[var(--gray-80)]">
      <Title.Sm_L>Devoluções PDV</Title.Sm_L>
      <div className="Content h-full w-full"></div>
    </Block.Full>
  );
}

export function DevCard() {
  return (
    <Block.Full className="gap-2">
      <DevHl />
      <DevPDV />
    </Block.Full>
  );
}

export default DevCard;
