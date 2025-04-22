import { UccurrenceCard, Title } from "../index";

export default function UccurrenceBar({ setHover, hover }) {
  return (
    <div
      className={`Occurrences z-0 w-full border-t-3 border-[var(--gray-80)] bg-[var(--gray-90)] pl-3 ${hover ? "h-[12rem]" : "h-[6vh]"} absolute bottom-0 transition-all duration-300`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Title.Md_L className={"p-1.5 pb-6"}>Ocorrencias</Title.Md_L>
      <div className="OccurrencesList scrollbar-custom flex gap-5 overflow-x-auto">
        <UccurrenceCard></UccurrenceCard>
        <UccurrenceCard></UccurrenceCard>
        <UccurrenceCard></UccurrenceCard>
        <UccurrenceCard></UccurrenceCard>
        <UccurrenceCard></UccurrenceCard>
        <UccurrenceCard></UccurrenceCard>
        <UccurrenceCard></UccurrenceCard>
      </div>
    </div>
  );
}
