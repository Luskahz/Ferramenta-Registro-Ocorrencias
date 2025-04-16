export default function Wrapper({ children }) {
  return (
    <div className="WRAPPER scrollbar-custom mt-25 flex max-w-screen flex-wrap items-center justify-center gap-4 overflow-y-hidden bg-gray-900 p-5">
      {children}
    </div>
  );
}
