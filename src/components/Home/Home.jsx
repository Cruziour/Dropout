import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Register, Login, Forget, MainPage, Layout} from './index'


const Home = () => {
   const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<MainPage />} />
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/forgetpassword' element={<Forget />} />
            </Route>
        )     
   )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Home
