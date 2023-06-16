import { NavLink } from "react-router-dom";

export const NavbarItem = ({ to, text }) => (
  <li className="flex justify-center text-h1 font-bold text-white">
    <NavLink
      to={to}
      className={({ isActive }) => isActive && "text-lightgreen"}
    >
      {text}
    </NavLink>
  </li>
);
