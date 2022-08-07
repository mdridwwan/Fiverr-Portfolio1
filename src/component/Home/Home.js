import React from 'react';
import Footer from '../Share/Footer/Footer';
import HeroImg from '../Share/HeroImg/HeroImg';
import Navbar from '../Share/Navbar/Navbar';
import Work from '../Share/Work/Work';
import PricingCard from '../Share/PricingCard/PricingCard';
import AboutContant from '../Share/AboutContant/AboutContant';
import ContactForm from '../Share/ContactForm/ContactForm';

const home = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg/>
            <Work/>
            <PricingCard/>
            <Footer />
        </div>
    );
};

export default home;