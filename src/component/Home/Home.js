import React from 'react';
import Footer from '../Share/Footer/Footer';
import HeroImg from '../Share/HeroImg/HeroImg';
import Navbar from '../Share/Navbar/Navbar';

const home = () => {
    return (
        <div>
            <Navbar/>
            <HeroImg/>
            <Footer/>
        </div>
    );
};

export default home;