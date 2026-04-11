import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import App from './pages/Apps/App'

const router = createBrowserRouter([

  {
    path : '/',
    element : <Layout></Layout> ,
    children : [
      {
        index : true,
        element : <Home></Home>
      } ,
      {
        path : '/apps',
        element : <App></App>
      }
    ]
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
