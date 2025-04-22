export default function LocalHeader({ children }) {
  return (
    <>
      <div className="LOCAL-HEADER h-[2rem] w-screen border-t-2 border-b-2 border-[var(--gray-85)] bg-[var(--gray-97)]">
        {children}
      </div>
    </>
  );
}
