// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <h1>Simanchala Sethi</h1>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#blog">Blogs</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
