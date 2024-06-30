import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Posting from '../src/Routes/Posting'
import Posts from './Routes/Posts';
import LogIn from './Routes/login';
import Signup from './Routes/Signup';
import Home from './Component/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
   path: "/Home",
   element: <App/>, 
  },
  {
    path: "/Posting",
    element: <Posting/>
  },
  {
    path: "/Posts",
    element:<Posts/>
  },
  {
    path: "/Log-in",
    element:<LogIn/>
  },
  {
    path: "/Sign-up",
    element:<Signup/>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
