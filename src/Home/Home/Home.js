import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import Navber from '../Navber/Navber'
import Projects from '../Projects/Projects'

function Home() {
  return (
    <div>
        <Navber/>
        <Banner/>
        <About/>
        <Projects/> 
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home