import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Input } from '../FormHooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate()
    const [isPasswordVisiable, setIsPasswordVisiable] = useState(false)
    const [error, setError] = useState('')

    const auth = async (data) => {
        setError('')
        try {
            console.log(data);
            alert('Login Successfully')
            navigate('/Dashboard')
        } catch (error) {
            setError('Error')
        }
    }
    
    const goToNavbar = () => {
        navigate('/')
    }

  return (
    <div className='w-full h-[60vh] lg:mt-24 mt-24 bg-opacity-5 rounded-2xl bg-white  p-2 md:w-1/2 md:mx-auto md:my-auto md:h-[60vh] lg:min-w-1/3 lg:w-1/3 lg:h-[68vh]'>
      <div className='flex items-start justify-end w-full pr-4 pt-2'>
        <Button children={<FontAwesomeIcon icon={faXmark} />} className='w-fit h-8 bg-white bg-opacity-20' onClick={goToNavbar} />
      </div>
      <div className='w-full text-center mt-4'>
        <h1 className='text-3xl font-semibold leading-snug'>Login</h1>
        <p className='text-gray-400'>Welcome back!</p>
      </div>
      <div className='px-6 mt-16'>
        <form onSubmit={handleSubmit(auth)}>
          <Input 
            placeholder='Email' 
            type='email' 
            className='px-4 mt-2' 
            {...register('email', {
              required: true
            })} 
          />
          {errors.email && <p className='text-red-500 text-sm'>Email is required</p>}
          
          <div className="relative mt-2">
              <Input 
                  placeholder='Password' 
                  type={isPasswordVisiable ? 'text' : 'password'} 
                  className='px-4 pr-10' 
                  {...register('password', {
                      required: true,
                      minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters long'
                      }
                  })} />
              <FontAwesomeIcon 
                  icon={isPasswordVisiable ? faEye : faEyeSlash} 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
                  onClick={() => setIsPasswordVisiable(!isPasswordVisiable)} 
              />
              {errors.password && <p className='text-red-500 text-sm'>{errors.password.message}</p>}
          </div>
          <div className='pl-2 mt-1'>
            <Link to={'/forgetpassword'} className='text-sm text-blue-600 shadow-inner'>Forget password?</Link>
          </div>
          
          <Button children={'Login'} className='w-full h-10 md:mt-5 mt-8 bg-gradient-to-r from-green-600 to-orange-600 ' type={'submit'} />
          {error && <p className='text-red-500'>{error}</p>}
        </form>
        <div className='md:mt-3 mt-4 text-center text-white text-opacity-75 text-md'>
          <Link to={'/register'}>New User? Register Here</Link>
        </div>
      </div>
    </div>
  )
}

export default Login