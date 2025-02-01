import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Layout from './componentes/Layout/Layout';
import Home from './componentes/Home/Home';
import SignIn from './componentes/SignIn/SignIn';
import SignUp from './componentes/SignUp/SignUp';
// import { Helmet } from 'react-helmet';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement : <div >This is an error</div>,
    children : [
      {
        path : '/',
        element : <Home></Home>
      },
      {
        path : '/about',
        element : <div>About</div>
      },
      {
        path : '/signin',
        element : <SignIn></SignIn>
      },
      {
        path : '/signup',
        element : <SignUp></SignUp>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
