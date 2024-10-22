import React from 'react';
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
                        <li><a href="#about">About</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#blog">Blogs</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
