import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  // export const Layout = ({children}) => {
  return (
    <div className='portfolio .font-sans flex h-screen w-screen flex-row items-center'>
      <div className='leftSide'>
        <NavBar />
      </div>
      <div className='flex h-full w-full flex-col justify-center bg-darkgreen p-10'>
        <Outlet />
        {/* {children} */}
      </div>
    </div>
  );
};
