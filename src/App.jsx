import React from 'react';
import Header from './components/Header.jsx';
import { Outlet } from 'react-router-dom';

export default function App() {

  return (
    <>
    <div className='bg-black min-h-screen overflow-x-hidden flex flex-col'>
      <Header />
      <Outlet />
    </div>
    </>
  );
};
