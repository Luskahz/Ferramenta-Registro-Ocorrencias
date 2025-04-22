export function BlockFull({ children, className }) {
  return (
    <div className={`flex h-full w-full rounded-sm ${className}`}>
      {children}
    </div>
  );
}
