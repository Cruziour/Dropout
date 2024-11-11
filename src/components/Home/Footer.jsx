import React from 'react'
import { Link } from 'react-router-dom'
import Dropout from '../../assets/Image/Dropout.png'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-red-950 to-black text-white py-10 px-10 mt-16 md:mt-20">
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-start md:items-center space-y-6 md:space-y-0">
        <div className="flex flex-col items-start">
          <img src={Dropout} alt="Dropout Logo" className="w-24 mb-4 rounded-2xl" />
          <p className="text-lg font-semibold">Contact us at</p>
          <p className="mt-2">+91 6204563476</p>
          <p>cruziourwithcode@gmail.com</p>
        </div>
        
        <div className="grid grid-cols-2 gap-6 md:gap-12">
          <div className="flex flex-col space-y-2">
            <Link to={'/'} className="hover:underline">Contact Us</Link>
            <Link to={'/'} className="hover:underline">About Us</Link>
            <Link to={'/'} className="hover:underline">Refund</Link>
            <Link to={'/'} className="hover:underline">Privacy Policy</Link>
          </div>
          <div className="flex flex-col space-y-2">
            <Link to={'/'} className="hover:underline">Terms of Use</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-6 pt-4 text-center">
        <p className="text-sm">© 2024 DROPOUT. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
