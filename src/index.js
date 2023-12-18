import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './Home';
import CreatePitch from './CreatePitch';
import DonorDash from './DonorDash';
import Pitches from './Pitches';
import RecipientDash from './RecipientDash';
import Donate from './Donate';
import Pitch from './Pitch';
import NewRecipient from './NewRecipient';
import Login from './Login';
const routes = [
  {
    path: "/",
    element: <App/>,
    children: [
      {
        index: true,
        element: <Homepage/>
      },
      {
        path: "/pitches/create",
        element: <CreatePitch/>
      },
      {
        path: "/donor/dashboard",
        element: <DonorDash/>
      },
      {
        path: "/pitches",
        element: <Pitches/>
      },
      {
        path: "/recipient/dashboard",
        element: <RecipientDash/>
      },
      {
        path: "/donate/:id",
        element: <Donate/>
      },
      {
        path: "/pitches/:id",
        element: <Pitch/>
      },
      {
        path: "/recipient/login",
        element: <Login/>
      },
      {
        path: "/recipient/createnew",
        element: <NewRecipient/>
      }
    ]
  }
]
const router = createBrowserRouter(routes)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}/>
);

 