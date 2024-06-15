import React from 'react';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';

export default function App() {

  return (
    <div className='bg-black text-white min-h-screen overflow-x-hidden flex flex-col justify-center items-center'>
      <Header />
      <Outlet />
    </div>
  );
};
