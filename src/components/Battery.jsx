import React, { useRef } from 'react'
import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animation';

const Battery = () => {
    const videoRef = useRef();
  
    useGSAP(() => {
      gsap.from('#chip', {
        scrollTrigger: {
          trigger: '#chip',
          start: '20% bottom'
        },
        opacity: 0,
        scale: 2,
        duration: 2,
        ease: 'power2.inOut'
      })
  
      animateWithGsap('.g_fadeIn2', {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power2.inOut'
      })
    }, []);
  
    return (
      <section className="common-padding">
        <div className="screen-max-width">
          
  
          <div className="text-center">
            <h2 className="hiw-title text-4xl lg:text-5xl my-4">
             Battery life that’s 
              <br /> positively Pro.
            </h2>
  
            <p className="hiw-subtitle">
            Even with so many advanced new features, iPhone 15 Pro still gives you amazing all‑day battery life.            </p>
          </div>
  
          <div className="mt-10 md:mt-20 mb-14">
            <div className="relative h-full flex-center">
              <div className="overflow-hidden">
                <img 
                  src={frameImg}
                  alt="frame"
                  className=" bg-transparent relative z-10"
                />
              </div>
              <div className="hiw-video">
                  <video className="max-w-full h-auto pointer-events-none" playsInline preload="none" muted autoPlay ref={videoRef}>
                    <source src={frameVideo} type="video/mp4" />
                  </video>
                </div>
            </div>
            <p className="text-gray-500 font-semibold text-center mt-3">Honkai: Star Rail</p>
            </div>
  
            <div className="flex flex-col md:flex-row justify-between  items-center p-8  my-10">
                <div className="flex flex-col sm:w-1/2 ">
                    <p className="feature-text mb-4 g_fadeIn2">
                    Up to {' '}<br />
                    <span className="text-white hiw-bigtext">
                    29 hrs<br />
                      </span>
                      video playback on <br />iPhone 15 Pro Max
                    </p>
  
                    <p className="feature-text g_fadeIn2">
                    Up to {' '} <br />
                      <span className="text-white hiw-bigtext">
                      23 hrs<br />
                      </span>
                      video playback on <br />iPhone 15 Pro Max</p>
                </div>
                   
                <div className="flex-1  justify-end flex-col g_fadeIn2 ">
                    <p className="hiw-text mb-4 tmb-2">
                        Add a MagSafe Charger for fast,{' '}
                      <span className="text-white font-bold">
                         efficient wireless charging
                      </span>
                    </p>
                    <div class="border-t border-gray-700 pt-4">
                        <p className="hiw-text mb-4 tmb-2">iPhone 15 Pro Max has up to 9 more hours video playback than iPhone 12 Pro Max</p>
                        <p className="hiw-text mb-4 tmb-2">iPhone 15 Pro has up to 6 more hours video playback than iPhone 12 Pro</p>
                    </div>
                </div>
                </div>
            </div>
            
      </section>
    )
  }
  
  export default Battery