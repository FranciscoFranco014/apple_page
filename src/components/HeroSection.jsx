import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { heroVideo, smallHeroVideo } from '../utils'
import { useEffect, useState } from 'react'

const HeroSection = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 760 ? smallHeroVideo : heroVideo)
  
  const handleVideoSrcSet = () => {
    if(window.innerWidth < 760) {
      setVideoSrc(smallHeroVideo)
    } else {
      setVideoSrc(heroVideo)
    }
  }
  
  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet)
    return () =>{
      window.removeEventListener('resize', handleVideoSrcSet)
    }
  }, [])
  useGSAP(() => {
    gsap.to("#hero", {opacity:1,delay: 1})
    gsap.to("#cta", {opacity:1, y:-50 ,delay: 1})
      
  }, [])
  
 
  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero"className="hero-title">iPhone 15 Pro</p>
        <div className='md:w-10/12 w-9/12'>
          <video className='pointer-events-none' autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type='video/mp4' />
          </video>
        </div>
      </div>

      <div id='cta' className='flex flex-col items-center opacity-0 translate-y-20' >
        <a href='#highlights' className='px-5 py-2 rounded-3xl bg-[#2563eb] my-5 hover:bg-[#3b82f6] border border-transparent hover:border hover:text-white hover:border-blue'> Buy</a>
        <p className='font-bold text-xl'>From $999 or $41.62/mo. for 24 mo.</p>
      </div>
    </section>
  )
}

export default HeroSection