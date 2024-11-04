import React, { useState } from 'react';
import Modal from 'react-modal';
import './Services.css';
import WebDevelopment from '../assets/webdevelopment.png';
import APIDevelopment from '../assets/APIDevelopment.png';
import PaymentIntegration from '../assets/PaymentIntegration.png';
import WebScraping from '../assets/WebScraping.png';
import CustomSolution from '../assets/CustomSolution.png';

Modal.setAppElement('#root');

function Services() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      title: 'Web Development',
      summary: 'As a skilled web developer specializing in the MERN stack, I build dynamic and responsive web applications.',
      content: `
        <p><strong>Web Development:</strong></p>
        <p>My web development services include:</p>
        <ul>
          <li>Custom web application development using MERN stack (MongoDB, Express.js, React, Node.js)</li>
          <li>Responsive and user-friendly design</li>
          <li>Scalable and efficient backend solutions</li>
          <li>Continuous maintenance and support</li>
        </ul>
        <p>End-to-end solutions from planning to deployment, ensuring timely delivery and exceptional documentation every step of the way. Every project is handled with the utmost professionalism and technical proficiency to meet your unique needs.</p>
      `,
      backgroundImage: WebDevelopment
    },
    {
      title: 'API Development',
      summary: 'With expertise in Node.js and Express.js, I develop robust and secure RESTful APIs.',
      content: `
        <p><strong>API Development:</strong></p>
        <p>I offer comprehensive API development services including:</p>
        <ul>
          <li>RESTful API design and implementation</li>
          <li>Secure authentication and authorization</li>
          <li>API documentation and testing</li>
          <li>Integration with third-party services</li>
        </ul>
        <p>From initial design to final deployment, I ensure that APIs are secure, efficient, and well-documented for seamless integration and usage.</p>
      `,
      backgroundImage: APIDevelopment
    },
    {
      title: 'Payment Integration',
      summary: 'Integrate secure and seamless payment gateways like PhonePe, Razorpay, and Box Pay.',
      content: `
        <p><strong>Payment Integration:</strong></p>
        <p>My payment integration services cover:</p>
        <ul>
          <li>Seamless integration with payment gateways</li>
          <li>Secure transaction processing</li>
          <li>Subscription-based billing systems</li>
          <li>Compliance with financial regulations</li>
        </ul>
        <p>Ensuring smooth and secure transactions, from setup to execution, with meticulous attention to detail and compliance.</p>
      `,
      backgroundImage: PaymentIntegration
    },
    {
      title: 'Web Scraping',
      summary: 'Automate data collection and extract valuable insights from the web.',
      content: `
        <p><strong>Web Scraping:</strong></p>
        <p>Web scraping services include:</p>
        <ul>
          <li>Custom web scrapers for various data sources</li>
          <li>Data extraction and transformation</li>
          <li>Scheduled scraping jobs</li>
          <li>Data cleaning and storage</li>
        </ul>
        <p>End-to-end solutions for automating data collection, ensuring the accuracy and reliability of the extracted data with detailed documentation.</p>
      `,
      backgroundImage: WebScraping
    },
    {
      title: 'Custom Solutions',
      summary: 'Offering tailor-made solutions to address your unique business challenges.',
      content: `
        <p><strong>Custom Solutions:</strong></p>
        <p>Custom solutions services include:</p>
        <ul>
          <li>Feature development tailored to your needs</li>
          <li>Platform migration and upgrades</li>
          <li>Performance optimization</li>
          <li>Technical consulting and support</li>
        </ul>
        <p>Bespoke solutions with a focus on your specific requirements, delivering results on time with thorough documentation and support.</p>
      `,
      backgroundImage: CustomSolution

    }
  ];

  const openModal = (service) => {
    setSelectedService(service);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedService(null);
  };

  return (
    <div id="services">
      <div className="container">
        <h1 className="sub-title">My Services</h1>
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className="service"
              style={{ backgroundImage: `url(${service.backgroundImage})` }} // Apply the background image
            >
              <i className={`fa-solid ${index === 0 ? 'fa-code' : index === 1 ? 'fa-cloud' : index === 2 ? 'fa-credit-card' : index === 3 ? 'fa-cogs' : 'fa-puzzle-piece'}`}></i>
              <h2>{service.title}</h2>
              <p>{service.summary}</p>
              <button className="learn-more" onClick={() => openModal(service)}>Learn more</button>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} contentLabel="Service Details">
        {selectedService && (
          <div style={{ background: 'linear-gradient(45deg, #0f2862, #091f36, #4f5f76, #9e363a)', padding: '20px', borderRadius: '10px', color: 'white' }}>
            <h2>{selectedService.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: selectedService.content }}></div>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Services;
