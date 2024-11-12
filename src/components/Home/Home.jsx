import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import {Register, Login, Forget, MainPage, Layout} from './index'
import VerifyOTP from './Forgot/VerifyOTP'
import Password from './Forgot/Password'


const Home = () => {
   const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<Layout />}>
                <Route path='/' element={<MainPage />} />
                <Route path='/register' element={<Register />}/>
                <Route path='/login' element={<Login />}/>
                <Route path='/forgetpassword' element={<Forget />} />
                <Route path='/password' element={<VerifyOTP />}/>
                <Route path='/newpassword' element={<Password />} />
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
