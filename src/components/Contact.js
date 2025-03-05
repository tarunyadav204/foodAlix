import React, { useState } from 'react';
const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Your message has been submitted!');
        // Handle form submission (e.g., send data to server)
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <>

            <div className="contact-us-container">
                <header className="contact-header">
                    <h1>Contact Us</h1>
                    <p>We’d love to hear from you!</p>
                </header>

                <section className="contact-form-section">
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">Send Message</button>
                    </form>
                </section>

                <section className="contact-info-section">
                    <h2>Our Office</h2>
                    <p><strong>Address:</strong> 123 Food Street, City Center, Food City, FC 12345</p>
                    <p><strong>Phone:</strong> +1 800 123 4567</p>
                    <p><strong>Email:</strong> support@foodie.com</p>
                </section>

            </div>
        </>
    );
};

export default ContactUs;
