import { UccurrenceCard, Title } from "../index";
import { useEffect, useRef } from "react";

export default function UccurrenceBar({ setHover, hover }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    const handleWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault(); // evita scroll vertical
        el.scrollLeft += e.deltaY;
      }
    };

    if (el) {
      el.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (el) {
        el.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div
      className={`Occurrences z-0 w-full border-t-3 border-[var(--gray-80)] bg-[var(--gray-90)] pl-3 ${hover ? "h-[24rem] sm:h-[12rem]" : "h-[12vh] sm:h-[6vh] "} absolute bottom-0 transition-all duration-500`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Title.Md_L className={"p-1.5 pb-6"}>Ocorrencias</Title.Md_L>
      <div 
      ref={scrollRef}
      className="OccurrencesList scrollbar-custom flex gap-5 overflow-x-auto">
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
