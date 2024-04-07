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
import Home from './pages/Home'

import { Routes, Route, Navigate } from 'react-router-dom';
import MacPage from './pages/MacPage'
import SupportPage from './pages/SupportPage'
const App = () => {

  return (
   <Suspense >
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/mac' element={<MacPage/>}/>
      <Route path='/store' element={<MacPage/>}/>
      <Route path='/support' element={<SupportPage/>}/>
    </Routes>
   </Suspense>
    
  
  )
}

export default App
