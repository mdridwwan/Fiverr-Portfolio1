import { React, useState } from 'react';
import './Navbar.css';
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from 'react-icons/fa';


const Navbar = () => {

    let activeStyle = {
        // textDecoration: "underline",
        color: "rgb(255 51 112)",
        fontWeight: "700",
        
    };
    let activeClassName = "underline";

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () =>{
        if(window.scrollY >= 100){
            setColor(true);
        }else{
            setColor(false);
        }
    };

    window.addEventListener("scroll", changeColor);

    return (
    <div className={color ? "header header-bg" : "header"}>
            
                <Link to="/">
                <h1><span style={{ color: "rgb(255 51 112)" }}>Por</span>tfol<span style={{ color: "rgb(255 51 112)", fontWeight: "900" }}>i</span>o</h1>
                </Link>
        
            <ul className={click ? "Nav-menu active" : "Nav-menu"}>
                    <li>
                        <NavLink
                            to="/"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/project"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Project
                        </NavLink>
                    </li>
                        <li>
                        <NavLink
                            to="/about"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            About
                        </NavLink>
                        </li>
                    <li>
                        <NavLink
                            to="/contact"
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>

                <div className="hamburger" onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: "#fff" }} />) : (
                    <FaBars size={20} style={{ color: "#fff" }} />
                )}
                
                
                </div>

        </div>
    );
};

export default Navbar;