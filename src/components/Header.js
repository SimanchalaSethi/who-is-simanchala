import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';
import profilePic from '../assets/i.jpeg';

function Header() {
    return (
        <header className="Header">
            <div className="profile-pic-container">
                <img src={profilePic} alt="Profile Picture" className="profile-pic" />
            </div>
            <div className="header-content">
                <h1>Simanchala Sethi</h1>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/services">Services</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
