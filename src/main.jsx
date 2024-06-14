import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import Search from './components/Search.jsx';
import DisplayUserInfo from './components/DisplayUserInfo.jsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Find-GitHub-User/' element={<App />} >
      <Route path='/Find-GitHub-User/' element={<Search />} />
      <Route path='/Find-GitHub-User/username/:username' element={<DisplayUserInfo />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
