export default function PrimaryElement ({ children }) {
    return(
        <div className="p-5 h-full w-full bg-gray-600 flex flex-col justify-start items-center rounded-[1rem]">
        {children}
        </div>
    )
}