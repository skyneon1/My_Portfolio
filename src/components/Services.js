import React from 'react';
import '../styles/Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'Building responsive and modern websites tailored to your needs, using the latest technologies.',
    icon: '🌐',
  },
  {
    title: 'UI/UX Design',
    description: 'Crafting user-centric designs that provide exceptional digital experiences.',
    icon: '🎨',
  },
  {
    title: 'Backend Development',
    description: 'Developing secure and scalable server-side applications with robust APIs.',
    icon: '🖥️',
  },
  {
    title: 'SEO Optimization',
    description: 'Enhancing your website’s visibility and performance to rank higher in search engines.',
    icon: '📈',
  },
];

const Services = () => {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <p className="section-description">
          I offer a range of professional services to help you achieve your goals. From creating modern websites to enhancing user experiences, my services are designed to deliver impactful results.
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
