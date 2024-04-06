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
        <Battery/>
        <Footer/>
    </main>
  
  )
}

export default App
