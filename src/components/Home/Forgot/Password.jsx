import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../FormHooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";

const Password = () => {
    const navigate = useNavigate()
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()

    const goToNavbar = () => {
        navigate('/')
    }

    const changePassword = (data) => {
        if (data.password !== data.confirmpassword) {
            alert('Passwords do not match')
            return
        }
        alert(`Password Changed Successfully: ${data.password}`)
        navigate('/login')
    }
  return (
    <div className='w-full h-[48vh] mt-40 bg-opacity-5 rounded-2xl bg-white p-2 md:w-1/2 md:mx-auto md:my-auto md:h-[50vh] lg:min-w-1/3 lg:w-1/3 lg:h-[55vh]'>
        <div className='flex items-start justify-end w-full pr-4 pt-2'>
            <Button children={<FontAwesomeIcon icon={faXmark} />} className='w-fit h-8 bg-white bg-opacity-20' onClick={goToNavbar} />
        </div>
        <div className='text-center mt-6'>
            <h1 className='text-2xl font-semibold'>Enter New Password</h1>
        </div>
        <div className='px-6 mt-14'>
            <form onSubmit={handleSubmit(changePassword)}>
                <div className="relative mt-2">
                    <Input 
                        placeholder='New Password' 
                        type={isPasswordVisible ? 'text' : 'password'} 
                        className='px-4 pr-10' 
                        {...register('password', {
                            required: true,
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        })} />
                    <FontAwesomeIcon 
                        icon={isPasswordVisible ? faEye : faEyeSlash} 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
                        onClick={() => setIsPasswordVisible(!isPasswordVisible)} 
                    />
                    {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                </div>
                <div className="relative mt-2">
                    <Input 
                        placeholder='Confirm Password' 
                        type={isConfirmPasswordVisible ? 'text' : 'password'} 
                        className='px-4 pr-10' 
                        {...register('confirmpassword', {
                            required: true,
                            minLength: {
                                value: 6,
                                message: 'Password must be at least 6 characters long'
                            }
                        })} />
                    <FontAwesomeIcon 
                        icon={isConfirmPasswordVisible ? faEye : faEyeSlash} 
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" 
                        onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)} 
                    />
                    {errors.confirmpassword && <p className='text-red-500'>{errors.confirmpassword.message}</p>}
                </div>
                <Button children={'Change Password'} className='w-full h-10 md:mt-5 mt-8 bg-gradient-to-r from-green-600 to-orange-600 ' type={'submit'} />
            </form>
        </div>
    </div>
  )
}

export default Password
