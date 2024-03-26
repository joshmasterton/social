/* eslint-disable import/prefer-default-export */
import React from 'react';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import { Home } from './comp/pages/Home';
import { Auth } from './comp/pages/Auth';
import './App.scss';

// App component
export function App() {
  // Router
  const router = createHashRouter([
    {
      path: '/*',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Auth isLogin />,
    },
    {
      path: '/signup',
      element: <Auth isLogin={false} />,
    },
  ]);

  // Render App
  return <RouterProvider router={router} />;
}
