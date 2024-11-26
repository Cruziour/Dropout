import React from 'react'
import Logo from '../../assets/Image/Logo.png'

const Sidebar = () => {
  return (
    <aside className='md:w-1/6 h-screen bg-gray-900 p-4 rounded-md'>
      <div className='md:flex md:justify-center'>
        <div className='flex items-center gap-x-2 pt-4'>
            <img src={Logo} alt="Dropout" className='w-8 rounded-md' />
            <h1 className='text-lg text-lime-400 font-semibold'>Dropout</h1>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
