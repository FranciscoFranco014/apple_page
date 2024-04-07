import { Suspense, useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import HighLights from './components/HighLights'
import Model from './components/Model'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Footer from './components/Footer'

import Battery from './components/Battery'
import InfoSection from './components/InfoSection'
import InfoSection2 from './components/InfoSection2'

const App = () => {

  return (
   
      <main className=' bg-black'>
        <Navbar/>
      
        <HeroSection/>
        <HighLights/>
        <Model/>
        <Features/>
        <HowItWorks/>
        <InfoSection/>
        <InfoSection2/>
        <Battery/>
        <Footer/>
    </main>
  
  )
}

export default App
