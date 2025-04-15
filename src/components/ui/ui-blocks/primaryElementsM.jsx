export default function PrimaryElementM({ children }) {
    return (
      <div className="p-5 w-[40%] max-h-full bg-gray-600 flex flex-col items-center rounded-xl shadow-md">
        {children}
      </div>
    );
  }