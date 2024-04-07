import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
// import { navLists } from '../constants'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const navLists = ["Store", "Mac", "iPhone", "Support"];
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
        <nav className="flex w-full screen-max-width">
            <Link to='/'>
            <img src={appleImg} alt='apple'  to='/' width={14} height={18}/>

            </Link>
            
            <div className="flex flex-1 justify-center max-sm:hidden">
            {navLists.map((nav, i) => (
                <Link 
                    to={nav === "iPhone" ? '/' : `/${nav.toLowerCase()}`}
                    className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all" 
                    key={nav}
                >
                    {nav} 
                   
                </Link>
            ))}
            </div> 
            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img src={searchImg} alt="Search" width={18} height={18} />
                <img src={bagImg} alt="Bag" width={18} height={18} />
            </div>
        </nav>
    </header>
  )
}

export default Navbar