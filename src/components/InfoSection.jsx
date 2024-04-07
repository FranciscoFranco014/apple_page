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
    <div className="bg-gray-300 screen-max-width text-white g_fadeIn3">
        <div className="common-padding space-y-6">
            <div className="flex  flex-col items-left ">
                <div className="flex flex-start space-around justify-start text-left space-x-4">
                    <svg fill="#000000" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M256,0C114.6,0,0,114.6,0,256s114.6,256,256,256s256-114.6,256-256S397.4,0,256,0z M415.8,415.7 c-20.8,20.8-44.9,37.1-71.8,48.4c-27.8,11.8-57.4,17.7-88,17.7c-30.5,0-60.1-6-88-17.7c-26.9-11.4-51.1-27.7-71.8-48.4 c-20.8-20.8-37.1-44.9-48.4-71.8C36,316.1,30,286.5,30,256s6-60.1,17.7-88c11.4-26.9,27.7-51.1,48.4-71.8 c20.9-20.8,45-37.1,71.9-48.5C195.9,36,225.5,30,256,30s60.1,6,88,17.7c26.9,11.4,51.1,27.7,71.8,48.4 c20.8,20.8,37.1,44.9,48.4,71.8c11.8,27.8,17.7,57.4,17.7,88c0,30.5-6,60.1-17.7,88C452.8,370.8,436.5,395,415.8,415.7z"></path> <path d="M358.6,206.9c-13.2-16.5-31.7-26-49.2-26c-23.1,0-32.9,11-48.9,11c-16.6,0-29.1-11-49.1-11c-19.7,0-40.6,11.9-53.8,32.3 c-18.7,28.7-15.5,82.6,14.7,128.6c10.8,16.4,25.2,34.9,44.1,35.1c16.8,0.2,21.6-10.7,44.3-10.8c22.7-0.1,27,11,43.8,10.8 c18.9-0.2,34.1-20.7,44.9-37.1c7.7-11.7,10.6-17.7,16.6-31C322.3,292.3,315.3,230.6,358.6,206.9z"></path> <path d="M291.8,162.6c8.4-10.8,14.8-26,12.5-41.6c-13.7,0.9-29.8,9.7-39.1,21.1c-8.5,10.3-15.5,25.6-12.8,40.5 C267.3,183.1,282.8,174.1,291.8,162.6z"></path> </g> </g></svg>
                    <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="4.8"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="0.984"></circle> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="#1C274C" stroke-width="0.984"></path> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="#1C274C" stroke-width="0.984" stroke-linecap="round"></path> <path d="M12 12V13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19" stroke="#1C274C" stroke-width="0.984" stroke-linecap="round"></path> <path d="M12 12V13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="#1C274C" stroke-width="0.984" stroke-linecap="round"></path> </g><g id="SVGRepo_iconCarrier"> <circle opacity="0.5" cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="0.984"></circle> <path d="M14 7C14 8.10457 13.1046 9 12 9C10.8954 9 10 8.10457 10 7C10 5.89543 10.8954 5 12 5C13.1046 5 14 5.89543 14 7Z" stroke="#1C274C" stroke-width="0.984"></path> <path d="M18 10C18 10 14.4627 11.5 12 11.5C9.53727 11.5 6 10 6 10" stroke="#1C274C" stroke-width="0.984" stroke-linecap="round"></path> <path d="M12 12V13.4522C12 14.0275 12.1654 14.5906 12.4765 15.0745L15 19" stroke="#1C274C" stroke-width="0.984" stroke-linecap="round"></path> <path d="M12 12V13.4522C12 14.0275 11.8346 14.5906 11.5235 15.0745L9 19" stroke="#1C274C" stroke-width="0.984" stroke-linecap="round"></path> </g></svg> 
                    <svg height="64px" width="64px" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.00 512.00" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <g> <path class="st0" d="M491.875,156.347c-19.446-45.958-51.889-85.019-92.736-112.613C358.3,16.13,308.962-0.008,255.996,0 c-35.305,0-69.016,7.168-99.65,20.124C110.381,39.571,71.321,72.006,43.725,112.86C16.122,153.692-0.016,203.03,0,255.996 c-0.008,35.313,7.16,69.016,20.125,99.658c19.438,45.958,51.881,85.018,92.728,112.613C153.692,495.87,203.03,512.008,255.996,512 c35.305,0,69.016-7.168,99.649-20.125c45.966-19.446,85.018-51.882,112.621-92.736C495.87,358.308,512,308.97,512,255.996 C512,220.691,504.832,186.988,491.875,156.347z M374.27,351.228c-8.571,14.798-1.69,35.384-12.262,48.78 c-10.947,13.514-16.513,10.221-24.295,28.328c-0.853,2.36-14.742,31.917-18.211,23.122c3.054,7.854-0.383,15.66-10.357,16.274 c-7.95,0.47-2.233,5.071-4.704,8.252c-9.863,2.17-19.965,3.708-30.274,4.521c-6.928-25.299-10.74-54.6-10.565-62.972 c0.638-32.484-6.609-19.327-23.609-43.342c-11.616-16.513-21.91-34.803-21.304-55.733c-0.088,3.74,23.329-53.086,6.426-42.25 c-20.532,13.172-24.311-14.567-44.092-17.158c-10.102-1.339-7.16-11.768-18.49-9.982c-10.174,1.594-21.735-11.904-29.277-16.991 c-4.951-3.572-13.578-51.619-20.842-50.933c-10.373,0.383,7.598,33.049,3.835,34.142c-7.742,1.451-21.313-46.093-21.057-50.008 c0.39-12.63-0.83-19.75,7.527-30.251c3.245-4.226,21.718-20.475,19.773-26.304c-3.308-10.166-1.602-22.022-6.905-28.831 c4.681-3.739,9.504-7.311,14.487-10.677c10.31-6.968,21.249-13.076,32.675-18.282c1.332-0.04,2.663-0.096,3.97-0.239 c10.206-0.997,20.627-4.959,30.992-3.388c13.666,2.008,28.488,7.893,42.88,6.769c13.251-0.933,50.638-12.949,62-3.254 c5.015,4.306-56.443,21.72-58.396,30.043c-0.997,5.422,16.002,4.944,17.469,5.079c17.087,1.403-4.241,15.452,6.252,18.481 c16.114,3.891,27.738-56.338,41.205-24.844c5.502,13.06,24.406-8.547,26.543,7.566c2.153,16.951,18.426,22.684-11.506,24.885 c-28.073,2.28-4.864,14.726-23.186,22.811c-17.525,7.718-33.552,11.107-46.46,26.966c-14.559,17.987-15.954,17.389-21.671,40.408 c-3.15,12.565-19.678-8.842-13.371-16.696c-2.185,2.694-21.544-6.1-23.466-1.587c-3.755,8.706-13.961,4.035-21.982,9.369 c-10.142,6.706-20.077,28.44-9.927,38.63c8.125,8.101,36.095-17.884,37.618-9.01c1.196,6.786-9.919,11.601-8.706,18.387 c1.746,9.823,18.872-2.815,18.864,4.816c0.008,4.895-0.805,25.355,14.272,20.236c8.125-2.774,8.93,3.046,14.009,1.826 c6.96-1.683,10.07-10.963,18.275-9.752c9.766,1.427,20.714,6.371,30.074,9.13c15.213,4.504,14.535,17.214,31.463,19.821 c16.911,2.663,10.15,18.323,8.068,27.197C329.007,322.58,399.107,310.772,374.27,351.228z M440.711,127.133 c0.686,0.981,1.403,1.954,2.066,2.95c4.01,5.916,7.71,12.064,11.138,18.378c-1.443,0.494-2.806,0.893-3.851,1.012 c-4.417,0.558-11.585-3.301-12.685-4.959C436.493,143.191,439.468,131.726,440.711,127.133z M481.223,257.232 c-1.252-0.702-2.615-1.077-4.138-0.766c-5.518,1.1-26.471,6.618-34.189,5.509c-7.726-1.108-31.981-24.262-31.981-29.779 c0-5.51,1.101-26.471,3.301-29.78c2.209-3.309,14.336-18.426,18.753-25.036c4.409-6.625,11.027-15.436,16.544-16.544 c1.715-0.343,5.375-1.012,9.824-1.834c14.032,29.374,21.902,62.231,21.91,96.994C481.247,256.411,481.223,256.809,481.223,257.232z "></path> </g> </g></svg>              
                </div>
                <h1 className="flex text-left  text-4xl lg:text-5xl  font-bold my-4 ">
                    Designed to 
                    <br />make a difference.
                </h1>
                </div>

            <div className="border-t border-gray-700"></div>

            <div className="flex flex-col md:flex-row justify-between  ">
                <p className="md:w-1/2 feature-text2">
                    <span className='text-white '>What matters to you matters to Apple, too. {''}
                        </span> From privacy protections that give you more control over your data. To using more recycled materials that minimize environmental impact. To creating built-in features that make iPhone accessible to all.
                </p>

                <div className="mt-6 md:mt-0 md:w-1/2 md:pl-6 feature-text2">
                    <h2 className="text-2xl ">
                    The internal structural frame of iPhone 15 Pro has
                    </h2>
                    <p className="hiw-bigtext2 font-bold ">
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