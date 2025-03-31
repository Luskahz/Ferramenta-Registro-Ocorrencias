export default function LocalHeader({ children }) {
  return (
    <>
      <div className="LOCAL-HEADER h-[2rem] w-screen border-t-2 border-b-2 border-gray-800 bg-gray-950">
        {children}
      </div>
    </>
  );
}
