import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Root from './Layout/Root'
import Home from './Pages/Home/Home'
import NavBar from './Pages/NavBar/NavBar'
import Footer from './Pages/Footer/Footer'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path:'/navbar',
        element: <NavBar></NavBar>,
      },
      {
        path: '/footer',
        element: <Footer></Footer>,
      },
      {
        path: '/updateprofile',
        element: <UpdateProfile></UpdateProfile>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
