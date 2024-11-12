import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Input } from '../../FormHooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faXmark } from "@fortawesome/free-solid-svg-icons";

const Forget = () => {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate()

    const forget = (data) => {
        // Perform your password reset logic here
        alert(`Password reset request for: ${data.email}`);
        navigate('/password')
    }

    const goToNavbar = () => {
        navigate('/')
    }

    return (
        <div className='w-full h-[48vh] mt-40 bg-opacity-5 rounded-2xl bg-white p-2 md:w-1/2 md:mx-auto md:my-auto md:h-[50vh] lg:min-w-1/3 lg:w-1/3 lg:h-[55vh]'>
            <div className='flex items-start justify-end w-full pr-4 pt-2'>
                <Button children={<FontAwesomeIcon icon={faXmark} />} className='w-fit h-8 bg-white bg-opacity-20' onClick={goToNavbar} />
            </div>
            <div className='w-full text-center mt-4'>
                <h1 className='text-3xl font-semibold leading-snug'>Forgot Password</h1>
            </div>
            <div className='px-6 mt-16'>
                <form onSubmit={handleSubmit(forget)}>
                    <Input placeholder='Email' type='email' className='px-4 mt-1' {...register('email', {
                        required: true,
                        validate: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) || 'Please Enter Proper Email Address'
                    })} />
                    
                    <div className='pl-2 mt-1'>
                        <Link to={'/login'} className='text-sm text-blue-600 shadow-inner'>go to Login</Link>
                    </div>
                    <Button children={'Send OTP'} className='w-full h-10 md:mt-5 mt-8 bg-gradient-to-r from-green-600 to-orange-600 ' type={'submit'} />
                </form>
            </div>
        </div>
    );
}

export default Forget;