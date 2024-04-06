import { chipImg, frameImg, frameVideo } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animation';

const InfoSection = () => {
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
    
        animateWithGsap('.g_fadeIn3', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.inOut'
        })
      }, []);
  return (
    <section className='common-padding'>
    <div class="bg-gray-300 screen-max-width text-white g_fadeIn3">
        <div class="common-padding space-y-6">
            <div class="flex  flex-col items-left ">
                <div class="flex justify-start text-left space-x-4">
                    <svg width="64px" height="64px" viewBox="-14.16 -14.16 52.32 52.32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a2aab3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ebebeb" stroke-width="4.8"> <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.392"></circle> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="#1C274C" stroke-width="1.392"></path> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="#1C274C" stroke-width="1.392" stroke-linecap="round"></path> <path d="M12 12V13.4522M12 13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19M12 13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="#1C274C" stroke-width="1.392" stroke-linecap="round"></path> </g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="0.36"></circle> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="#1C274C" stroke-width="0.36"></path> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="#1C274C" stroke-width="0.36" stroke-linecap="round"></path> <path d="M12 12V13.4522M12 13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19M12 13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="#1C274C" stroke-width="0.36" stroke-linecap="round"></path> </g></svg> 
                    <svg width="64px" height="64px"  viewBox="-14.16 -14.16 52.32 52.32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a2aab3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ebebeb" stroke-width="4.8"> <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.392"></circle> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="#1C274C" stroke-width="1.392"></path> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="#1C274C" stroke-width="1.392" stroke-linecap="round"></path> <path d="M12 12V13.4522M12 13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19M12 13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="#1C274C" stroke-width="1.392" stroke-linecap="round"></path> </g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="0.36"></circle> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="#1C274C" stroke-width="0.36"></path> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="#1C274C" stroke-width="0.36" stroke-linecap="round"></path> <path d="M12 12V13.4522M12 13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19M12 13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="#1C274C" stroke-width="0.36" stroke-linecap="round"></path> </g></svg> 
                    <svg width="64px" height="64px"  viewBox="-14.16 -14.16 52.32 52.32" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#a2aab3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#ebebeb" stroke-width="4.8"> <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.392"></circle> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="#1C274C" stroke-width="1.392"></path> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="#1C274C" stroke-width="1.392" stroke-linecap="round"></path> <path d="M12 12V13.4522M12 13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19M12 13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="#1C274C" stroke-width="1.392" stroke-linecap="round"></path> </g><g id="SVGRepo_iconCarrier"> <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="0.36"></circle> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="#1C274C" stroke-width="0.36"></path> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="#1C274C" stroke-width="0.36" stroke-linecap="round"></path> <path d="M12 12V13.4522M12 13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19M12 13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="#1C274C" stroke-width="0.36" stroke-linecap="round"></path> </g></svg> 
                
                </div>
                <h1 class="flex text-left  text-4xl lg:text-5xl  font-bold my-4 ">
                    Designed to 
                    <br />make a difference.
                </h1>
                </div>

            <div class="border-t border-gray-700"></div>

            <div class="flex flex-col md:flex-row justify-between  ">
                <p class="md:w-1/2 feature-text2">
                    <span className='text-white '>What matters to you matters to Apple, too. {''}
                        </span> From privacy protections that give you more control over your data. To using more recycled materials that minimize environmental impact. To creating built-in features that make iPhone accessible to all.
                </p>

                <div class="mt-6 md:mt-0 md:w-1/2 md:pl-6 feature-text2">
                    <h2 class="text-2xl ">
                    The internal structural frame of iPhone 15 Pro has
                    </h2>
                    <p class="hiw-bigtext2 font-bold ">
                    100% recycled aluminum
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default InfoSection