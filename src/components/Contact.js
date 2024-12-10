import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <h2 className="section-title">Get in Touch</h2>
                <p className="section-description">
                    I’d love to hear from you! Whether you have a question, an exciting project, or just want to say hello, feel free to reach out. I'll respond as quickly as I can!
                </p>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Contact Details</h3>
                        <p><strong>Email:</strong> www.aniket716@gmail.com</p>
                        <p><strong>Phone:</strong> +91 733 999 3716</p>
                        <p><strong>Location:</strong> Bengaluru, India</p>
                        <img src="https://img.freepik.com/free-photo/3d-cartoon-pin-location_23-2151642220.jpg?uid=R140822190&semt=ais_hybrid" alt="Map" />
                       
                    </div>
                    <form className="contact-form">
                        <h3>Send Me a Message</h3>
                        <div className="form-group">
                            <input
                                type="text"
                                placeholder="Your Name"
                                name="name"
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Your Email"
                                name="email"
                                required
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                placeholder="Your Message"
                                name="message"
                                rows="5"
                                required
                                className="form-input"
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
