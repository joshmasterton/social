import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import { Auth } from './comp/auth/Auth';

// Main App component
function App() {
  // Server url
  const API_URL = 'http://localhost:9001';

  // Router for switching pages
  const router = createBrowserRouter([
    {
      path: '/*',
      element: <Auth
        authType="login"
        API_URL={API_URL}
      />,
    },
    {
      path: '/signup',
      element: <Auth
        authType="signup"
        API_URL={API_URL}
      />,
    },
  ]);

  // Render App
  return <RouterProvider router={router} />;
}

// Export App
export default App;
