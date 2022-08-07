import React from 'react';
import './Footer.css';
import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className="footer">
           <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                        <div>
                            <p>123 Housing, Dhaka.</p>
                            <p>Bangladesh.</p>
                        </div>
                    </div>
                    <div className="Phone">
                        <h4>
                            <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            +088-0164-803-5776.
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                            <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                            info@gmail.com
                        </h4>
                    </div>
                    
                </div>
                <div className="right">
                    <h4>About the company</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quaerat.</p>
                    <div className="social">
                        <FaFacebook size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaTwitter size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Footer;