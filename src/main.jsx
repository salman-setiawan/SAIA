import React from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './components/LanguageContext.jsx'
import { createBrowserRouter, Navigate, RouterProvider, } from 'react-router-dom'

import './index.css'
import Home from './pages/Home.jsx'
import PageNotFound from './pages/404.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/404", element: <PageNotFound /> },
  { path: "*", element: <Navigate to="/404" replace /> },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  </React.StrictMode>
)
