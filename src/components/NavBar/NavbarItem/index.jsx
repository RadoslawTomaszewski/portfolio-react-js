import { NavLink } from "react-router-dom";

export const NavbarItem = ({ to, text }) => {
  return (
    <li className="flex justify-center text-xl font-bold text-white lg:text-4xl">
      <NavLink
        to={to}
        className={({ isActive }) => isActive && "text-lightgreen"}
      >
        {text}
      </NavLink>
    </li>
  );
};
