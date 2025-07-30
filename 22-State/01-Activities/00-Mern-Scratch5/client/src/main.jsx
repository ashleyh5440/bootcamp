import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Home from './pages/HomePage.jsx';
import Positioning from './pages/PositioningPage.jsx';
import Positioning2 from './pages/PositioningPage2.jsx';
import Media from './pages/MediaPage.jsx';
import ErrorPage from './pages/ErrorPage.jsx';
import QueryMeThisPage from './pages/QueryMeThisPage.jsx';
import LoginPage from './pages/LoginPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />
      }, {
        path: '/positioning',
        element: <Positioning />
      }, {
        path: '/positioning2',
        element: <Positioning2 />
      }, {
        path: '/media',
        element: <Media />
      }, {
        path: '/login',
        element: <LoginPage />
      }, {
        path: '/query-test',
        element: <QueryMeThisPage />
      }, 
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
