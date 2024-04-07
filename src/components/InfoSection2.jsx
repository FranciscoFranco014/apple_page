import { centerImage, chipImg, frameImg, frameVideo,  fullPage, leftImg, rightImage } from '../utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { animateWithGsap } from '../utils/animation';
const InfoSection2 = () => {
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
    
        animateWithGsap('.g_fadeIn4', {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.inOut'
        })
        gsap.fromTo(
          "#info",
          {
            scrollTrigger: {
              trigger: '#info',
              start: '10% bottom'
            },
            opacity: 1,
            y: 20,
          },
          {
            ease: "power2.inOut",
            opacity: 1,
            y: 0,
            delay: 0.6,
            stagger: 0.3,
          }
        );
      }, []);
  return (
    <section className='common-padding g_fadeIn4'>
    <div className="bg-gray-300 screen-max-width text-white ">
   
        <div className="common-padding ">
            <h1 className='text-gray font-bold text-5xl lg:text-5xl '>iOS 17.</h1>
            <div className="flex  flex-col items-left ">
                <h1 className="flex text-left  hiw-bigtext ">
                   Style it out. Swap it over.
                    <br />Sticker it Up.
                </h1>
             </div>
            <div className='flex flex-col-3 row justify-center gap-4 mt-12'>
                <div  id='info' className='flex flex-col '>
                         <img src={leftImg} alt="boy" className="w-full h-auto max-w-sm"/>
                         <p  className='pt-12 text-left  feature-text2 '>
                            <span className='text-white '>Contact Poster.</span> {''} Create your own poster that contacts will see when you call.
                            Pick a favorite pic or Memoji, pair it with a favorite font, and there you have it -- your very own calling card
                         </p>
                </div>
                <div  id='info' className='flex flex-col'>
                    <img src={centerImage} alt="boy" className="w-full h-auto border-none bg-transparent max-w-sm"/>
                    <p className='pt-12 text-left  feature-text2  '>
                            <span className='text-white '>NameDrop.</span> {''} Want to swap contact info with someone? Just bring your iPhone close to theirs. You can both choose what you want to share, and the information transfers instantly.
                         </p>
                </div>
                <div  id='info' className='flex flex-col'>
                    <img src={rightImage} alt="boy" className="w-full h-auto max-w-sm"/>
                    <p className='pt-12 text-left  feature-text2  '>
                            <span className='text-white '>Live Stickers. </span> {''} Touch and hold an object in a photo to lift it from the background and create a sticker. Add effects like Puffy and Shiny. Or create animated stickers from Live Photos.
                         </p>
                </div>
                
            </div>

           
        </div>
    </div>
</section>
  )
}

export default InfoSection2