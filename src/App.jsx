import { Suspense, useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap';

import Home from './pages/Home'

import { Routes, Route, } from 'react-router-dom';
import MacPage from './pages/MacPage'
import SupportPage from './pages/SupportPage'
import LoaderPage from './pages/LoaderPage'


const App = () => {
const [loading, setLoading] = useState(true);
  const contentRef = useRef(null); // 
  const loaderRef = useRef(null); // 

  useEffect(() => {
    if (!loading) {
      const tl = gsap.timeline();
      tl.to(loaderRef.current, {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          gsap.to(contentRef.current, {
            opacity: 1,
            duration: 0.5,
          });
        }
      });
    }
  }, [loading]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div ref={loaderRef}><LoaderPage /></div>;
  }

  return (
  <div ref={contentRef} style={{opacity: 0}}>
    <Suspense fallback={<LoaderPage/>}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/mac' element={<MacPage/>}/>
        <Route path='/store' element={<MacPage/>}/>
        <Route path='/support' element={<SupportPage/>}/>
      </Routes>
    </Suspense>
      
  </div>
   
  
  )
}

export default App
