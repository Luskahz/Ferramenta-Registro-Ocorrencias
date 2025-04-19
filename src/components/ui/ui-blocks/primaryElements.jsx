export default function PrimaryElement({ children }) {
  return (
    <div className="flex max-h-full w-full flex-col items-center rounded-xl bg-gray-600 p-5 shadow-md">
      {children}
    </div>
  );
}
