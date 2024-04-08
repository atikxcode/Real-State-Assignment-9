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
import Slider from './Pages/Slider/Slider'
import Estate from './Pages/Estate/Estate'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Login from './Pages/Login/Login'
import Register from './Pages/Register/Register'
import PropertyDetails from './Pages/PropertyDetails/PropertyDetails'
import AuthProvider from './Providers/AuthProvider'



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
        element: <UpdateProfile></UpdateProfile>,
      },
      {
        path: '/slider',
        element:<Slider></Slider>,
      },
      {
        path: '/estate',
        element: <Estate></Estate>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path: '/propertydetails/:id',
        element: <PropertyDetails></PropertyDetails>,
        
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  
  </React.StrictMode>,
)
