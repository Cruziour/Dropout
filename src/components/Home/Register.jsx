import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Button, Input } from '../FormHooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const {register, handleSubmit} = useForm()
  const [error, setError] = useState('')
  const [isPasswordVisiable, setIsPasswordVisiable] = useState(false)
  const [isConfirmPasswordVisiable, setIsConfirmPasswordVisiable] = useState(false)
  const navigate = useNavigate()

  const auth  = (data) => {
    setError('')
    if (data.password !== data.confirmPassword) {
      alert('Passwords do not match. \nPassword and Confirm Password should be same.');
      return;
    }
    try {
        console.log(data);
    } catch (error) {
      setError(error)
    }
  }

  const goToNavbar = () => {
    navigate('/')
  }

  return (
    <div className='w-full h-[60vh] mt-24 md:mt-24 bg-opacity-5 rounded-2xl bg-white  p-2 md:w-1/2 md:mx-auto md:my-auto md:h-[60vh] lg:min-w-1/3 lg:w-1/3 lg:h-[68vh]'>
      <div className='flex items-start justify-end w-full pr-4 pt-2'>
        <Button children={<FontAwesomeIcon icon={faXmark} />} className='w-fit h-8 bg-white bg-opacity-20' onClick={goToNavbar} />
      </div>
      <div className='px-6'>
        <form onSubmit={handleSubmit(auth)}>
          <Input placeholder='Full Name' type={'text'} className='px-4' {...register('name', {
            required: true
          })} />
          <Input placeholder='Phone Number' type={"text"} className='px-4 mt-1' {...register('mobileNumber', {
            required:true,
            validate: (value) => /^\+?\d{0,2}[-.\s]?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/.test(value) || 'Number is not proper'
          })} />
          <Input placeholder='Email' type='email' className='px-4 mt-1' {...register('email', {
            required:true,
            validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Please Enter Proper Email Address'
          })} />
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
              })} 
            />
            <FontAwesomeIcon 
              icon={isPasswordVisiable ? faEye : faEyeSlash} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
              onClick={() => setIsPasswordVisiable(!isPasswordVisiable)} 
            />
          </div>
          <div className="relative mt-2">
            <Input 
              placeholder='Confirm Password' 
              type={isConfirmPasswordVisiable ? 'text' : 'password'} 
              className='px-4 pr-10' 
              {...register('confirmPassword', {
                required: true
              })} 
            />
            <FontAwesomeIcon 
              icon={isConfirmPasswordVisiable ? faEye : faEyeSlash} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
              onClick={() => setIsConfirmPasswordVisiable(!isConfirmPasswordVisiable)} 
            />
          </div>
          <Button children={'SignUp'} className='w-full h-10 md:mt-5 mt-8 bg-gradient-to-r from-green-600 to-orange-600 ' type={'submit'} />
        </form>
        <div className='md:mt-3 mt-4 text-center text-white text-opacity-75 text-md'>
          <Link to={'/login'}>Already Have Account? Login here</Link>
        </div>
      </div>
    </div>
  )
}

export default Register