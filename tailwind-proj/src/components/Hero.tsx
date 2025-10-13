import React from 'react';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            <p className='text-cyan-400 font-bold p-2'>TRANSFORMING IDEAS INTO ART</p>
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'><span className='text-violet-400'>Design</span> and <span className='text-violet-500'>Develop</span></h1>
            <div>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold p-3 mb-3'>Exploring&nbsp;
                    <ReactTyped

                        strings={['Logo & Branding Assets', 'Posters', 'Print Layouts', 'UI Layout', 'Wireframes', 'Python Solutions']}
                        typeSpeed={120}
                        backSpeed={140}
                        loop
                    />
                </p>
            </div>
            <p className='md:text-2xl text-xl font-bold text-zinc-500'> Creative Solutions and Innovative Ideas through Continuous Learning</p>
            <buttono className='bg-cyan-400 w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-zinc-950'>Get Started</buttono>
        </div>
    </div>
  )
}

export default Hero;