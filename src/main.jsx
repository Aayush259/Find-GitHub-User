import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Search from './components/Search.jsx';
import DisplayUserInfo from './components/DisplayUserInfo.jsx';
import History from './components/History.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Find-GitHub-User/' element={<App />} >
      <Route path='/Find-GitHub-User/' element={<Search />} />
      <Route path='/Find-GitHub-User/username/:username' element={<DisplayUserInfo />} />
      <Route path='/Find-GitHub-User/history' element={<History />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
