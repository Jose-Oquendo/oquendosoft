// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import { RouterProvider } from "react-router-dom";
import Router from './router/index';
import 'bootstrap';
import './assets/css/index.css';
import './assets/css/back.css';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // {/* <RouterProvider router={router} /> */}
    <Router/>
  // </StrictMode>,
)

