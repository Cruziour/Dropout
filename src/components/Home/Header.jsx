import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../FormHooks';
import CSS from '../../assets/Image/CSS.png'
import HTML from '../../assets/Image/Html.png'
import JS from '../../assets/Image/NodeJS.png'
import mongoDB from '../../assets/Image/MongoDB.png'
import Reactjs from '../../assets/Image/Reactjs.png'
import Translate from '../../assets/Image/Translate.png'

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className='w-full px-4 md:flex md:justify-center md:items-center mt-10 md:mt-16 gap-10 md:pr-20 md:pl-20'>
        <div className='md:w-1/2'>
          <div className='w-fit px-6 py-2 bg-black font-semibold rounded-full text-white border-2 border-red-500'>
            <p>AI Powered Curriculum</p>
          </div>
          <h1 className='font-bold text-3xl md:text-6xl stroke-lime-100 mt-6 md:mt-8'>
            Master <span className='text-green-400'>Web <span className='text-orange-500'>development</span></span> in a virtual College
          </h1>
          <p className='text-md text-gray-100 mt-4 md:text-xl text-opacity-85'>
            A virtual space where Anyone can become a complete Full stack developer by project based learning 
            <span className='block font-semibold md:mt-4'>(HTML , CSS ,JS , Mongo DB, Node JS, React JS , Tailwind and AI)</span>
          </p>
          <div className='w-fit px-6 py-2 bg-gradient-to-l to-red-400 from-orange-400 font-semibold rounded-full mt-8'>
            <Button children={'Start Learning at ₹ 250'} className='text-black' type='button' onClick={() => navigate('/register')} />
          </div>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0'>
          {/* <iframe 
            src="https://www.youtube-nocookie.com/embed/3IjokR9Nbds?si=MpfSoNde-pNqzaif" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen 
            className='w-full md:h-[45vh] h-[30vh] border-8 border-white border-opacity-15 rounded-2xl'
          /> */}
          <iframe src="https://www.youtube-nocookie.com/embed/nzGN_24fkTA?si=4SvbEWYLupiFEgyx" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"  className='w-full md:h-[45vh] h-[30vh] border-8 border-white border-opacity-15 rounded-2xl'></iframe>
          <div className='mt-4 flex justify-around items-center'>
            <img src={CSS} alt="CSS" className='md:w-auto w-10'/>
            <img src={HTML} alt="HTML" className='md:w-auto w-10'/>
            <img src={JS} alt="JS" className='md:w-auto w-10'/>
            <img src={mongoDB} alt="mongoDB" className='md:w-auto w-10'/>
            <img src={Reactjs} alt="React" className='md:w-auto w-10'/>
            <img src={Translate} alt="Translate" className='md:w-10 w-6'/>
            <div className='font-semibold text-white text-opacity-70'>
              <p className='text-sm'>Course Language:</p>
              <p className='text-xl'>Hindi, English</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;