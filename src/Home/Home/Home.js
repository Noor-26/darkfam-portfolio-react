import React from 'react'
import About from '../About/About'
import Banner from '../Banner/Banner'
import Navber from '../Navber/Navber'

function Home() {
  return (
    <div>
        <Navber/>
        <Banner/>
        <About/>
    </div>
  )
}

export default Home