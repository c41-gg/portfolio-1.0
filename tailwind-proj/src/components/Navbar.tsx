import React, {useState} from 'react'
import { RiMenuFill , RiCloseFill } from "react-icons/ri";
import { ReactTyped } from 'react-typed';

const Navbar = () => {
    const[nav, setNav] = useState(false)

    const handleNav = () =>{
        setNav(!nav)
    }
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text=3xl font-bold'>c41codex<ReactTyped strings ={['_']} typeSpeed={120} backSpeed={120} loop/></h1>
        <ul className='hidden md:flex'>
            <li className='p-4'>Home</li>
            <li className='p-4'>About</li>
            <li className='p-4'>Portfolio</li>
            <li className='p-4'>Contact</li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <RiMenuFill size={20}/> : <RiCloseFill size={20}/>}
        </div>
        <div className={!nav ? 'fixed left-[-100%] top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#0d0114] ease-in-out duration-500' : 'fixed left-[0] top-0 w-[60%]  h-full border-r border-r-gray-900 bg-[#0d0114] ease-in-out duration-500'}>
            <h1 className='w-full text=3xl font-bold m-4'>c41codex_</h1>
            <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-600'>Home</li>
                <li className='p-4 border-b border-gray-600'>About</li>
                <li className='p-4 border-b border-gray-600'>Portfolio</li>
                <li className='p-4 border-b border-gray-600'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar