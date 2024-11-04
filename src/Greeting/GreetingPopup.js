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
      greetingMessage = 'Good Morning! Welcome to my site.';
    } else if (hours >= 12 && hours < 18) {
      greetingMessage = 'Good Afternoon! Welcome to my site.';
    } else if (hours >= 18 && hours < 21) {
      greetingMessage = 'Good Evening! Welcome to my site.';
    } else {
      greetingMessage = 'Good Night! Welcome to my site.';
    }

    setGreeting(greetingMessage);

    const timer = setTimeout(() => setShow(false), 3000);


    return () => clearTimeout(timer);
  }, []);

  return show && (
    <div className="greeting-popup">
      {greeting}
    </div>
  );
};

export default GreetingPopup;
