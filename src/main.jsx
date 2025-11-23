import React from 'react'
import { createRoot } from 'react-dom/client'
import { LanguageProvider } from './components/LanguageContext.jsx'
import { createBrowserRouter, Navigate, RouterProvider, } from 'react-router-dom'

import './index.css'
import Home from './pages/Home.jsx'
import PageNotFound from './pages/404.jsx'
import Form from './pages/Form.jsx'
import Pricing from './pages/Pricing.jsx'

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/form", element: <Form /> },
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
