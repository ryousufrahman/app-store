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
import AppDetails from './pages/appdetails/AppDetails'
import Dashbord from './Layout/Dashbord'
import Item1 from './Layout/Dashbord/Item1'
import Item2 from './Layout/Dashbord/Item2'

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
      },
    {
      path : '/apps/:id',
      element : <AppDetails></AppDetails>,
      loader :() => fetch('/products.json')
    }

    ]
    ,
    errorElement : <Error></Error>
  } ,

  {
    path : '/dashbord' ,
    element : <Dashbord></Dashbord> ,
    children : [

      {
        index : true ,
        element : <Item1></Item1>
      } ,
      {
        path : '/dashbord/item1' ,
        element : <Item1></Item1>
      },
      {
        path : '/dashbord/item2',
        element : <Item2></Item2>
      }
    ]
  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
