import React from 'react';
import AboutContant from '../Share/AboutContant/AboutContant';
import Footer from '../Share/Footer/Footer';
import HeroImg2 from '../Share/HeroImg2/HeroImg2';
import Navbar from '../Share/Navbar/Navbar';

const about = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HeroImg2 heading="ABOUT." text="I'm a Friendly Full-Stack Developer." />
        <AboutContant/>
        <Footer/>
    </div>
  )
}

export default about