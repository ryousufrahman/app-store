import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router'
import Layout from './Layout/Layout'
import Home from './pages/Home/Home'
import App from './pages/Apps/App'
import InstalledApp from './pages/Apps/Installedapp/InstalledApp'
import Error from './pages/Errorpage/Error'

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
      } ,
      {
        path : '/installedApp' ,
        element : <InstalledApp></InstalledApp>
      }
    ]
    ,
    errorElement : <Error></Error>
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
