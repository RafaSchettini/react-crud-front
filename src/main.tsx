import React from 'react';
import ReactDOM from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Home from './pages/Home';
import Create from './pages/Create';

import { GlobalStyle } from './styles/global';

const router = createBrowserRouter([
  {
    path: '/react-crud-front/',
    element: <Home />,
  },
  {
    path: '/react-crud-front/create',
    element: <Create />
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <GlobalStyle />
  </React.StrictMode>,
);
