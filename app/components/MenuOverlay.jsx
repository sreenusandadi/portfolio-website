import React from "react";
import NavLink from "./NavLink";

export default function MenuOverlay({ links }) {
  return (
    <ul className="flex flex-col items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink title={link.title} href={link.href} />
        </li>
      ))}
    </ul>
  );
}
