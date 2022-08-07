import React from 'react';
import { Link } from 'react-router-dom';
import "./AboutContent.css";
import React1 from "../../../Image/react1.jpg";
import React2 from "../../../Image/react2.webp";

const AboutContant = () => {
    return (
        <div className="about">
            <div className="left">
                <h1>Who Am I?</h1>
                <p>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.</p>
                <Link to="/contact">
                    <button className="btn">Contact</button>
                </Link>
            </div>

            <div className="right">
                <div className="img-container">
                    <div className="img-stack top">
                        <img src={React1} alt="true" className='img' />
                    </div>

                    <div className="img-stack bottom">
                        <img src={React2} alt="true" className='img' />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default AboutContant;