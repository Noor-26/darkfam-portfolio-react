import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Navber from '../Navber/Navber'
import Projects from '../Projects/Projects'

function Home() {
  return (
    <div>
        <Navber/>
        <Banner/>
        <About/>
        <Projects/>
    </div>
  )
}

export default Home