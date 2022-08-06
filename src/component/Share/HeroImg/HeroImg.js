import React from 'react';
import './HeroImg.css';
import IntroImg from '../../../Image/intro-bg.jpg';
import { Link } from 'react-router-dom';

const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
                <img src={IntroImg} alt="" className="into-img" />
            </div>
            <div className="content">
                <p className=''>Hi, I'm a freelancer.</p>
                <h1>React Developer.</h1>
                <div>
                    <Link to="/project" className="btn">Project</Link>
                    <Link to="/contact" className="btn btn-light">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default HeroImg;