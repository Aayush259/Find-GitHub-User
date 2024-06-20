import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { HistoryContextProvider } from './historyContext/HistoryContext.jsx'
import Header from './components/Header.jsx';

export default function App() {

  // State for user history,
  const [userHistory, setUserHistory] = useState([]);

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
      <HistoryContextProvider value={{ userHistory, setUserHistory }}>
        <Header />
        <Outlet />
      </HistoryContextProvider>
    </div>
  );
};
