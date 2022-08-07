import React from 'react'
import ContactForm from '../Share/ContactForm/ContactForm'
import HeroImg2 from '../Share/HeroImg2/HeroImg2'
import Navbar from '../Share/Navbar/Navbar'
import Footer from '../Share/Footer/Footer';

const contact = () => {
  return (
    <div>
        <Navbar></Navbar>
        <HeroImg2 heading="CONTACT." text="Lets have a chat" />
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default contact