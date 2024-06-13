import React from 'react';
import ReactDOM from 'react-dom/client';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/Find-GitHub-User/' element={<App />} >
      <Route path='/Find-GitHub-User/' element={<App />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
);
