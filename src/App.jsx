import React, { useState, useEffect, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { HistoryContextProvider } from './historyContext/HistoryContext.jsx';
import Header from './components/Header.jsx';
import Loader from './components/Loader.jsx';

export default function App() {

  // State for user history,
  const [userHistory, setUserHistory] = useState([]);
  const [goBackRoute, setGoBackRoute] = useState('/Find-GitHub-User/');

  // Getting history from local storage.
  useEffect(() => {
    const history = JSON.parse(localStorage.getItem('history')) || [];
    setUserHistory(history);
  }, []);

  // Updating history in local storage when userHistory state changes.
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(userHistory));
  }, [userHistory]);

  return (
    <div className='bg-black text-white min-h-screen overflow-x-hidden flex flex-col justify-center items-center'>
      <HistoryContextProvider value={{ goBackRoute, setGoBackRoute, userHistory, setUserHistory }}>
        <Header />
        <div className='flex flex-col items-center w-full min-h-[494px]'>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </HistoryContextProvider>
    </div>
  );
};
