import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HighLights from '../components/HighLights'
import Model from '../components/Model'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <main className=' bg-black'>
        <Navbar/>
        <HeroSection/>
        <HighLights/>
        <Model/>
        <Features/>
        <HowItWorks/>
        <Footer/>
    </main>
  )
}

export default Home