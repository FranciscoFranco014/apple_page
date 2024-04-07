import { useGSAP } from "@gsap/react"
import gsap from 'gsap'
import { rightImg, watchImg } from "../utils"
import VideoCarrousel from "./VideoCarrousel"
const HighLights = () => {
  useGSAP(() => {
    gsap.to("#title", {opacity:1, y:0})
    gsap.to(".link", {opacity:1, y: 0, duration:1, stagger: 0.25})
  }, [])
  return (
    <section id="highlights" className="w-screen overflow-hidden h-full common-padding bg-zinc">
      <div className="screen-max-width">
        <div className="mb-12 w-full items-end justify-between md:flex">
          <h1 id="title" className="section-heading ">Get the highlights.</h1>

          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              <a href="https://www.youtube.com/watch?v=xqyUdNxWazA" target="_blank">   Watch the film.</a>
              <img src={watchImg} alt="watch" className="ml-2"/>
            </p>
            <p className="link">
              <a href="https://www.youtube.com/watch?v=GYkq9Rgoj8E" target="_blank"> Watch the event.</a>
              <img src={rightImg} alt="right" className="ml-2"/>
            </p>
          </div>
        </div>

        <VideoCarrousel/>
      </div>
    </section>
  )
}

export default HighLights