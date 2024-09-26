import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayout/MainLayOut';
import Home from './pages/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
<div className='max-w-screen-xl mx-auto'>
<RouterProvider router={router}>

</RouterProvider>
</div>
  </StrictMode>,
)
