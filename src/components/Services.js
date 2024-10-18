import React from 'react';
import './Services.css';

function Services() {
    return (
        <div id="services">
            <div className="container">
                <h1 className="sub-title">My Services</h1>
                <div className="services-list">
                    <div className="service">
                        <i className="fa-solid fa-code"></i>
                        <h2>Web Development</h2>
                        <p>As a skilled web developer specializing in the MERN stack, I build dynamic and responsive web applications using MongoDB, Express.js, React, and Node.js. Let's create scalable solutions that meet your business needs.</p>
                        <button className="learn-more">Learn more</button>
                    </div>
                    <div className="service">
                        <i className="fa-solid fa-cloud"></i>
                        <h2>API Development</h2>
                        <p>With expertise in Node.js and Express.js, I develop robust and secure RESTful APIs that serve as the backbone of your web applications. Let's build efficient data exchange solutions that enhance your app's performance.</p>
                        <button className="learn-more">Learn more</button>
                    </div>
                    <div className="service">
                        <i className="fa-solid fa-credit-card"></i>
                        <h2>Payment Integration</h2>
                        <p>Integrate secure and seamless payment gateways like PhonePe, Razorpay, and Box Pay into your web applications. Whether it's e-commerce or subscription-based services, I ensure smooth and secure transactions for your users.</p>
                        <button className="learn-more">Learn more</button>
                    </div>
                    <div className="service">
                        <i className="fa-solid fa-cogs"></i>
                        <h2>Web Scraping</h2>
                        <p>Automate data collection and extract valuable insights from the web. Using advanced scraping techniques, I help you gather relevant information for your business needs.</p>
                        <button className="learn-more">Learn more</button>
                    </div>
                    <div className="service">
                        <i className="fa-solid fa-puzzle-piece"></i>
                        <h2>Custom Solutions</h2>
                        <p>Offering tailor-made solutions to address your unique business challenges. From custom feature development to platform migrations, I provide personalized services that align with your goals and objectives.</p>
                        <button className="learn-more">Learn more</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
 