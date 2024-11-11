import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Button } from '../FormHooks';
import Dropout from '../../assets/Image/Dropout.png';

const Navbar = () => {
    const [isMenuShow, setMenuShow] = useState(false);
    const [isBars, setBars] = useState(false)
    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuShow((prevState) => !prevState);
        setBars((prevState) => !prevState);
    };

    const goToRegister = () => {
        navigate('/register')
    }

    const gotoLogin = () => {
        navigate('/login')
    }

    return (
        <nav className='w-full h-20 flex justify-between items-center md:px-20 px-4 md:m-4 mt-2'>
            <div>
                <img src={Dropout} alt="Dropout Logo" className='md:w-32 h-14 rounded-xl'/>
            </div>
            <div className='flex justify-center items-center gap-x-2 md:gap-x-8'>
                <Button onClick={goToRegister} children={'Register'} className='md:w-36 w-40  h-14 px-8 border border-white rounded-full bg-black hidden md:block'/>
                <Button onClick={gotoLogin} children={'Get Started'} className='md:w-40 h-14 bg-gradient-to-r from-green-600 to-orange-600 rounded-full hidden md:block'/>
                <Button onClick={toggleMenu} children= {isBars ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />} className='w-20 h-14 bg-black md:hidden text-2xl font-bold'/>
            </div>
            {isMenuShow && (
                <div className="absolute w-80 top-20 right-4 bg-gradient-to-l from-orange-800 to-transparent bg-opacity-5 shadow-lg rounded-md p-4 md:hidden duration-75 pl-24 pb-10">
                    <Button children={'Register'} className='w-40 h-14 px-4 border border-white rounded-full bg-black my-4' onClick={goToRegister} />
                    <Button children={'Get Started'} className='w-40 h-14 bg-gradient-to-r from-green-600 to-orange-600 rounded-full' onClick={gotoLogin}/>
                </div>
            )}
        </nav>
    );
};

export default Navbar;