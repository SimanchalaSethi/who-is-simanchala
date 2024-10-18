import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="Footer">
            <p>© 2024 Simanchala Sethi. All rights reserved.</p>
            <p>
                Follow me on 
                <a href="https://github.com/SimanchalaSethi" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i> GitHub
                </a> | 
                <a href="https://www.linkedin.com/in/simanchala-sethi-672a5b166/" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a> | 
                <a href="https://dev.to/simanchala_sethi" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-dev"></i> DEV
                </a>
            </p>
        </footer>
    );
}

export default Footer;
