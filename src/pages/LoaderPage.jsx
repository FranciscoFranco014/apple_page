import React, { useEffect, useRef } from 'react'
import SplitType from 'split-type'
import gsap from 'gsap'
import { useNavigate } from 'react-router-dom'; // Importando useNavigate para la redirección

const LoaderPage = () => {
  const navigate = useNavigate()
  const textRef = useRef(null)
    useEffect(() => {
      gsap.to("#loader-text", {
        opacity: 1,
        duration: 1,
        delay: 0.5,
        stagger: 0.2,
        onComplete: () => navigate('/') // Redirige a la home page al completarse la animación
      });
    }, [navigate])
    
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full preloader flex flex-center flex-col">
        {/* <Link  to='/'>
          <img id='img' src={appleImg} alt='apple' className='opacity-0' to='/' width={14} height={18}/>
        </Link>    */}
        <div className='flex flex-center texts-container '>
         <h1 ref={textRef}id='loader-text' className="  hero-title  text-white  ">A</h1>
        <h1 ref={textRef} id='loader-text' className="hero-title text-white  ">p</h1>
        <h1 ref={textRef} id='loader-text' className="loader-text hero-title text-white  ">p</h1>
        <h1 ref={textRef} id='loader-text' className="loader-text hero-title text-white  ">l</h1>
        <h1 ref={textRef} id='loader-text' className="loader-text hero-title text-white  ">e</h1>
        <h1 ref={textRef} id='loader-text' className=" hero-title text-white  ">.</h1>  
        </div>
        
      </div>

    
  </section>
  )
}

export default LoaderPage