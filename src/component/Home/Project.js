import React from 'react'
import Footer from '../Share/Footer/Footer'
import HeroImg2 from '../Share/HeroImg2/HeroImg2'
import Navbar from '../Share/Navbar/Navbar'
import PricingCard from '../Share/PricingCard/PricingCard'
import Work from '../Share/Work/Work'

const project = () => {
  return (
    <div>
        <Navbar/>
        <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
        <Work />
        <PricingCard/>
        <Footer/>
    </div>
  )
}

export default project