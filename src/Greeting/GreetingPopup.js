import React, { useState, useEffect } from 'react';
import './GreetingPopup.css';

const GreetingPopup = () => {
  const [greeting, setGreeting] = useState('');
  const [show, setShow] = useState(true);

  useEffect(() => {
    const now = new Date();
    const hours = now.getHours();
    let greetingMessage = '';

    if (hours >= 5 && hours < 12) {
      greetingMessage = 'Good Morning! Welcome to my site. I’m here to provide top-notch services tailored for you.';
    } else if (hours >= 12 && hours < 18) {
      greetingMessage = 'Good Afternoon! Thanks for stopping by. I’m committed to delivering the best services to you.';
    } else if (hours >= 18 && hours < 21) {
      greetingMessage = 'Good Evening! It’s a pleasure to have you here. How can I assist you today?';
    } else {
      greetingMessage = 'Good Night! I appreciate your visit. Feel free to explore my offerings.';
    }

    setGreeting(greetingMessage);

    // Hide the popup after 5 seconds
    const timer = setTimeout(() => setShow(false), 5000);

    // Cleanup timer
    return () => clearTimeout(timer);
  }, []);

  return show && (
    <div className="greeting-popup">
      {greeting}
    </div>
  );
};

export default GreetingPopup;
