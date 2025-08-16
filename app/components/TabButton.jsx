import React from "react";

export default function TabButton({ active, selectTab, children }) {
  const tabClass = active
    ? "hover:text-white border-b border-purple-500"
    : "text-[#ADB7BE]";
  return (
    <button className={`hover:text-white ${tabClass}`} onClick={selectTab}>
      {children}
    </button>
  );
}
