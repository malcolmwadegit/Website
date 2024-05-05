import React from "react";
import { Link, useLocation } from 'react-router-dom';
import './Header.css'; // Import the corresponding CSS file for styling
import Dropdown from "../Dropdown/Dropdown";

const Header = () => {
    const location = useLocation();

    return (
        <div className="header-row">
            <div className="left-container">
                <div className="contact-container">
                    <div className="contact-link">
                        {/* Render the Contact link only if the current route is not the contact page */}
                        {location.pathname !== '/contact-page' && (
                            <Link to='/contact-page'>Contact</Link>
                        )}
                        {/* Render the Home link only if the current route is not the home page */}
                        {location.pathname !== '/' && (
                            <Link to='/'>Home</Link>
                        )}
                    </div>
                </div>
            </div>
            <div className="middle-container">
                <h1>
                    Malcolm Wade
                </h1>
            </div>
            <div className="right-container">
                <div className="resume-space">
                    <Dropdown />
                </div>
            </div>
        </div>
    );
};

export default Header;
