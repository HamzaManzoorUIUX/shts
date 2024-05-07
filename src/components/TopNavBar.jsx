import React from 'react';
import Logo from '../assets/images/logo.png'
import { FaFacebookSquare, FaInstagramSquare, FaWhatsappSquare } from 'react-icons/fa';
import { FaSquareGooglePlus, FaSquareXTwitter } from 'react-icons/fa6';
const TopNavBar = () => {
    return (
        <div className='d-flex flex-column flex-md-row justify-content-between align-items-center container'>
            <a href="/" className='d-block w-100' style={{ maxWidth: 250 }}>
                <img src={Logo} alt="Logo" className='w-100' />
            </a>
            <ul className='social-list'>
                <li><a href="/">
                    <FaFacebookSquare />
                </a></li>
                <li><a href="/">
                    <FaSquareXTwitter />
                </a></li>
                <li><a href="/">
                    <FaSquareGooglePlus />
                </a></li>
                <li><a href="/">
                    <FaInstagramSquare />
                </a></li>
                <li><a href="/">
                    <FaWhatsappSquare />
                </a></li>
            </ul>
        </div>
    );
};

export default TopNavBar;