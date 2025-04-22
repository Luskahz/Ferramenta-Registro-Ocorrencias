export default function UccurrenceCard({ children }) {
  return (
    <div className="OccurrenceCard size-[15rem] shrink-0 transform rounded-sm border-1 border-[var(--gray-80)] hover:border-[var(--gray-65)] transition-colors duration-1000">
      {children}
    </div>
  );
}
