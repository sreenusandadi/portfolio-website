import React from "react";

export default function ProjectTag({ name, onClick, isSelected }) {
  const selectedStyles = isSelected
    ? "border-purple-500"
    : "border-slate-500 hover:border-white";
  return (
    <button
      onClick={() => onClick(name)}
      className={`rounded-full border-2 px-6 py-3 cursor-pointer ${selectedStyles}`}
    >
      {name}
    </button>
  );
}
