import { NavBar } from "../components";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  // export const Layout = ({children}) => {
  return (
    <div className="portfolio .font-sans flex h-screen w-screen flex-row">
      <NavBar />
      <div className="flex h-full w-full flex-col justify-center bg-darkgreen p-10">
        <Outlet />
      </div>
    </div>
  );
};
