export default function Wrapper({ children }) {
  return (
    <div className="WRAPPER scrollbar-custom mt-25 flex max-w-screen min-w-[98vw] flex-wrap items-center justify-center gap-4 overflow-y-auto bg-gray-900 p-5 md:overflow-y-hidden">
      {children}
    </div>
  );
}
