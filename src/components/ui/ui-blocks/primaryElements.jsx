export default function PrimaryElement({ children }) {
    return (
      <div className="p-5 w-full max-h-full bg-gray-600 flex flex-col items-center rounded-xl shadow-md">
        {children}
      </div>
    );
  }