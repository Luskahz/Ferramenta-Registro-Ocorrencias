import React from "react";

const Background = ({ children }) => {
  return (
    <div className="relative flex h-full min-h-screen w-full min-w-screen flex-col items-center justify-center bg-[var(--gray-98)]">
      {children}
    </div>
  );
};

export default Background;
