import React from 'react'
import { useRoutes, BrowserRouter } from 'react-router-dom'
import '../../app.css'
import { Home } from '../Home/Home'
import { MyAccount } from '../MyAccount/MyAccount'
import { MyOrder } from '../MyOrder/MyOrder'
import { MyOrders } from '../MyOrders/MyOrders'
import { NotFound } from '../NotFound/NotFound'
import { SignIn } from '../SignIn/SignIn'
import { Navbar } from '../../Components/Navbar/Navbar'
import { ShoppingCartProvider } from '../../context/context'


const AppRoutes = () => {
  let routes = useRoutes([
    { path:'/', element: <Home /> },
    { path:'/my-account', element: <MyAccount /> },
    { path:'/my-order', element: <MyOrder /> },
    { path:'/my-orders', element: <MyOrders /> },
    { path:'/sing-in', element: <SignIn /> },
    { path:'/*', element: <NotFound /> },
  ])

  return routes
}


export const App = () => {

  return (
  <ShoppingCartProvider>
    <BrowserRouter>
    <AppRoutes/>
    <Navbar />
   </BrowserRouter>
  </ShoppingCartProvider>
  )

}
