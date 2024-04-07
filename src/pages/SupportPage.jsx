import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'
import { appleImg, bagImg, searchImg } from '../utils'
const SupportPage = () => {
    useGSAP(() => {
        gsap.to("#hero", {opacity:1,delay: 1})
    gsap.to("#img", {opacity:1,delay: 1})
          
      }, [])
  return (

    <section className="w-full nav-height bg-black relative">
        <Navbar/>
        <div className="h-5/6 w-full flex-center flex-col">
          <Link  to='/'>
            <img id='img' src={appleImg} alt='apple' className='opacity-0' to='/' width={14} height={18}/>
          </Link>   
          <h1 id="hero"className="hero-title">Incoming Section.</h1>
        </div>
        <Footer/>
    </section>
  )
}

export default SupportPage