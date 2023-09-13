import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Layout from './Components/Layout'



export default function App() {

let routers = createBrowserRouter([
  {path:'', element:<Layout/>, children:[
    {index: true, element:<Home/>},
    {path:'about', element:<About/>},
    {path:'portfolio', element:<Portfolio/>},
    {path:'contact', element:<Contact/>},
  ]}
])

  return <RouterProvider router={routers}></RouterProvider>

}
