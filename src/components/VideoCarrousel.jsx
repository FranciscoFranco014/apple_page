import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

import  { useEffect, useRef, useState } from 'react'

import { pauseImg, playImg, replayImg } from '../utils'
import { hightlightsSlides, } from '../constants'



const VideoCarrousel = () => {
    //estos refs van a servir para renderizar el slider del carousel
    const videoRef = useRef([])
    const videoSpanRef = useRef([])
    const videoDivRef = useRef([])
    
    const [video, setVideo] = useState({
        isEnd: false,
        startPlay: false,
        videoId: 0,
        isLastVideo: false,
        isPlaying: false,
    })
    const [loadedData, setLoadedData] = useState([]);
    const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

    useGSAP(() => {
        gsap.to("#slider", {
          transform: `translateX(${-100 * videoId}%)`,
          duration: 2,
          ease: 'power2.inOut'
        })
        gsap.to("#video", {
            scrollTrigger: {
              trigger: "#video",
              toggleActions: "restart none none none",
            },
            onComplete: () => {
              setVideo((pre) => ({
                ...pre,
                startPlay: true,
                isPlaying: true,
              }));
            },
          });
    }, [isEnd, videoId])

    useEffect(() => {
      if (loadedData.length > 3 ){
        if(!isPlaying){
            videoRef.current[videoId].pause()
        } else {
            startPlay && videoRef.current[videoId].play()
        }
      }
    }, [startPlay, videoId, isPlaying, loadedData])
    
    const handleLoadedMetaData = (i, e) => setLoadedData((pre) => [...pre, e]);

    useEffect(() => {
        let currentProgress = 0
        let span = videoSpanRef.current
        if(span[videoId]){
            let anim = gsap.to(span[videoId], {
                onUpdate: () => {
                    const progress = Math.ceil(anim.progress() * 100)
                    if(progress!=currentProgress) {
                        currentProgress = progress

                        gsap.to(videoDivRef.current[videoId], {
                            width: window.innerWidth < 760 
                             ? '10vw'
                             : window.innerWidth < 1200
                                ? '10vw'
                                : '4vw'
                        })
                        gsap.to(span[videoId],{
                            width: `${currentProgress}%`,
                            backgroundColor: 'white',
                        })
                    }
                },
                onComplete: () => {
                    if(isPlaying){
                        gsap.to(videoDivRef.current[videoId], {
                            width: '12px'
                        })
                        gsap.to(span[videoId], {
                            backgroundColor: '#afafaf'
                        })
                    }
                }
            })

            if(videoId === 0 ){
                anim.restart()
            }
            // divido el tiempo del video actual por la duracion del slide para sacar el tiempo real que dura 
            // y poder animar el slide 
            const animUpdate = () => {
              anim.progress(videoRef.current[videoId]?.currentTime / hightlightsSlides[videoId]?.videoDuration);
            }

            if(isPlaying){
                gsap.ticker.add(animUpdate)
            } else {
                gsap.ticker.remove(animUpdate)
            }
        }
    }, [videoId, startPlay])

    // esta funcion maneja diferentes operaciones relacionada con la repro de los videos, modifica el estado del video basado en el tipo de accion que recibe como argumento.
    // Acepta parametros de type e i, type es un string que indica el tipo de accion a realizar y  i es un numero de un video en particular.
    // 'video-end' -> actualiza el estado del video indicando que el video actual termino y se incrementa el videoId en 1. Para que funcione se utiliza la funcion setVideo 
    //                que recibe el estado anterior 'prevVideo' y retorna un nuevo estado con las modificaciones que se ncesiten.
    // 'video-last' -> se marca el video actual como el ultimo video ("isLastVideo: true"). Sirve para que cuando no haya mas videos no exista opciones de siguiente video.
    //                 se realiza meidante la actualizacion del estado del video
    // 'video-reset' ->  se reinicia el estado del video a sus valores iniciales, estableciendo isLastVideo en false y videoId en 0. Esto podría ser útil para reiniciar la reproducción de una lista de videos desde el principio.
    // 'play' -> se cambia el estado de reproducción (isPlaying) al valor opuesto de lo que estaba antes. Es decir, si el video estaba pausado (isPlaying: false), ahora se reproducirá (isPlaying: true), y viceversa. 
    //           Este caso permite alternar entre reproducir y pausar un video. se realiza de forma condicional basándose en el estado anterior, invirtiendo el valor de isPlaying.
    const handleProcess = (type, i) => {
        switch (type) {
            case 'video-end':
                setVideo((pre) => ({...pre, isEnd: true, videoId: i + 1}))                
                break;
            case 'video-last':
                setVideo((pre) => ({...pre, isLastVideo: true}))
                break
            case 'video-reset':
                setVideo((pre) => ({...pre, isLastVideo: false, videoId: 0}))
                break
            case "pause":
                setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
                break;    
            case 'play':
                setVideo((pre) => ({...pre, isPlaying: !pre.isPlaying}))
                break
            default:
                return video;
        }
    }
    return (
        <>
          <div className="flex items-center">
            {hightlightsSlides.map((list, i) => (
              <div key={list.id} id="slider" className="sm:pr-20 pr-10">
                <div className="video-carousel_container">
                  <div className="w-full h-full flex-center rounded-3xl overflow-hidden bg-black">
                    <video
                      id="video"
                      playsInline={true}
                      className={`${
                        list.id === 2 && "translate-x-44"
                      } pointer-events-none`}
                      preload="auto"
                      muted
                      ref={(el) => (videoRef.current[i] = el)}
                      onEnded={() =>
                        i !== 3
                          ? handleProcess("video-end", i)
                          : handleProcess("video-last")
                      }
                      onPlay={() =>
                        setVideo((pre) => ({ ...pre, isPlaying: true }))
                      }
                      onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                    >
                      <source src={list.video} type="video/mp4" />
                    </video>
                  </div>
    
                  <div className="absolute top-12 left-[5%] z-10">
                    {list.textLists.map((text, i) => (
                      <p key={i} className="md:text-2xl text-xl font-medium">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
    
          <div className="relative flex-center mt-10">
            <div className="flex-center py-5 px-7 bg-gray-300 backdrop-blur rounded-full">
              {videoRef.current.map((_, i) => (
                <span
                  key={i}
                  className="mx-2 w-3 h-3 bg-gray-200 rounded-full relative cursor-pointer"
                  ref={(el) => (videoDivRef.current[i] = el)}
                >
                  <span
                    className="absolute h-full w-full rounded-full"
                    ref={(el) => (videoSpanRef.current[i] = el)}
                  />
                </span>
              ))}
            </div>
    
            <button className="control-btn">
              <img
                src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
                alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
                onClick={
                  isLastVideo
                    ? () => handleProcess("video-reset")
                    : !isPlaying
                    ? () => handleProcess("play")
                    : () => handleProcess("pause")
                }
              />
            </button>
          </div>
        </>
      );
}

export default VideoCarrousel