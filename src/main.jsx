import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import ErrorPage from './error-page';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import { extendTheme, ChakraProvider } from '@chakra-ui/react';

// import css
// import '@fontsource/raleway/400.css';
import '@fontsource/open-sans/700.css';
import '@fontsource/quicksand/400.css';
import '@fontsource/quicksand/500.css';
import '@fontsource/quicksand/600.css';
import '@fontsource/quicksand/700.css';

import Dashboard from './pages/Dashboard/Dashboard';
import LoginPage from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
]);

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'QuickSand', sans-serif`,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
