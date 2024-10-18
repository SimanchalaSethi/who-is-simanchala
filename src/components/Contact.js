import React, { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Here you can add code to send form data to your backend or email service
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>
      <div id="contact">
        <h1>Contact Me</h1>
        <p>I'd love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
        <div className="contact-info">
          <p>Email: simanchalasethi.dev@gmail.com</p>
          <div className="social-links">
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
          </div>
        </div>
      </div>
      <footer className="Footer">
        <p>© 2024 Simanchala Sethi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
