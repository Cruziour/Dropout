import React from 'react'
import { DivItem } from '../FormHooks'
import Translate from '../../assets/Image/Translate.png'

const Course = () => {
  return (
    <body className='w-full md:mt-28 mt-14'>
      <div className='w-full text-center'>
        <h1 className='text-4xl md:text-5xl mb-4 font-bold'>Course <span className='text-orange-500'>Curriculum</span></h1>
        <div className='w-full h-auto flex md:justify-around flex-wrap items-center mt-8 md:mt-16 text-lg gap-y-5'>
          <div className='md:w-32 w-1/2 md:px-0 px-6 text-left flex gap-x-2 justify-center items-center'>
            <img src={Translate} alt="Language" className='w-12 h-12' />
            <h1 className='text-white text-opacity-80'>Course Language: hindi, English</h1>
          </div>
          <div className='md:w-32 w-1/2 md:px-0 px-6 text-left flex gap-x-2 justify-center items-center'>
            <img src={Translate} alt="Language" className='w-12 h-12' />
            <h1 className='text-white text-opacity-80'>Unlimited Guided Projects</h1>
          </div>
          <div className='md:w-32 w-1/2 md:px-0 px-6 text-left flex gap-x-2 justify-center items-center'>
            <img src={Translate} alt="Language" className='w-12 h-12' />
            <h1 className='text-white text-opacity-80'>Unlimited Free Resources</h1>
          </div>
          <div className='md:w-32 w-1/2 md:px-0 px-6 text-left flex gap-x-2 justify-center items-center'>
            <img src={Translate} alt="Language" className='w-12 h-12' />
            <h1 className='text-white text-opacity-80'>Live Mentor Feedback</h1>
          </div>
          <div className='md:w-32 w-1/2 md:px-0 px-6 text-left flex gap-x-2 justify-center items-center'>
            <img src={Translate} alt="Language" className='w-12 h-12' />
            <h1 className='text-white text-opacity-80'>AI tools covered</h1>
          </div>
        </div>
        <div className='w-full flex flex-col gap-y-4 justify-center items-center mt-8 pr-4 pl-4'>
          <DivItem children={'Task 0 : Intro & Setup'} />
          <DivItem children={'Task 1 : HTML'} />
          <DivItem children={'Task 2 : CSS: Intro, Selectors, Colors'} />
          <DivItem children={'Task 3 : CSS: Units, Box Model, Fonts'} />
          <DivItem children={'Task 4 : CSS: Display, Postion, Float'} />
          <DivItem children={'Task 5 : CSS: FlexBox'} />
          <DivItem children={'Task 6 : CSS: Media Queries, Variables'} />
          <DivItem children={'Task 7 : CSS: Pseudo Classes & Elements'} />
          <DivItem children={'Task 8 : CSS: Transforms'} />
          <DivItem children={'Task 9 : CSS: Animations'} />
          <DivItem children={'Grp project 1 : Complete CSS Project'} />
          <DivItem children={'Task 10 : JS: Intro, Data Types, Operators'} />
          <DivItem children={"Task 11 : JS: If Else & Switch"} />
          <DivItem children={"Task 12 : JS: Loops"} />
          <DivItem children={"Task 13 : JS: Arrays & Functions"} />
          <DivItem children={"Task 14 : JS: Callback hells & Promises"} />
          <DivItem children={"Task 15 : JS: DOM & Event Handling"} />
          <DivItem children={"Task 16 : JS: Map & Filter"} />
          <DivItem children={"Task 17 : JS: DOM Project"} />
          <DivItem children={"Grp Project 2 : Laundry Project"} />
          <DivItem children={"Task 18 : Pre-Requisites for React"} />
          <DivItem children={"Task 19 : React Intro"} />
          <DivItem children={"Task 20 : React Hooks"} />
          <DivItem children={"Task 21 : React Props"} />
          <DivItem children={"Task 22 : React Custom Hook"} />
          <DivItem children={"Task 23 : React Router Dom"} />
          <DivItem children={"Task 24 : Context API"} />
          <DivItem children={"Task 25 : Redux Toolkit (RTK)"} />
          <DivItem children={"Grp Project 3 : React Group Project"} />
          <DivItem children={"Task 26 : Node js"} />
          <DivItem children={"Task 27 : Express js"} />
          <DivItem children={"Task 28 : Mongo DB & Mongoose"} />
          <DivItem children={"Task 29 : Node js Streams"} />
          <DivItem children={"Task 30 : Middlewares (bodyparser and cors)"} />
          <DivItem children={"Task 31 : Authentication"} />
          <DivItem children={"Task 32 : File Handling"} />
          <DivItem children={"Task 33 : Cookies"} />
          <DivItem children={"Task 34 : Cloud Database"} />
          <DivItem children={"Task 35 : Refs and Populate"} />
          <DivItem children={"Task 36 : Multer"} />
          <DivItem children={"Task 37 : Aggregate Functions"} />
          <DivItem children={"Grp Project 4 : Full Stack Project 1"} />
        </div>
      </div>
    </body>
  )
}

export default Course
