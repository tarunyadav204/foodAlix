import React from 'react';
const AboutUs = () => {
    return (
        <>
            <div className="about-us-container">
                <header className="about-header">
                    <h1>About Us</h1>
                    <p>Your favorite food, delivered fast and fresh.</p>
                </header>

                <section className="about-section">
                    <div className="about-text">
                        <h2>Who We Are</h2>
                        <p>
                            We are a passionate team dedicated to bringing delicious food from your favorite local restaurants right to your doorstep.
                            With a focus on speed and quality, we ensure that every meal is fresh and exactly as you expect.
                        </p>
                    </div>
                    <div className="about-image">
                        <img src="https://img.freepik.com/free-vector/summertime-party-background_1048-910.jpg" alt="Our Team" />
                    </div>
                </section>

                <section className="mission-section">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to make food delivery as fast, affordable, and convenient as possible while providing the best customer experience.
                        We want to bring people together over great food and make your day a little easier.
                    </p>
                </section>

                <section className="team-section">
                    <h2>Meet the Team</h2>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member 1" />
                        <h3>John Doe</h3>
                        <p>CEO & Founder</p>
                    </div>
                    <div className="team-member">
                        <img src="https://via.placeholder.com/150" alt="Team Member 2" />
                        <h3>Jane Smith</h3>
                        <p>Head of Operations</p>
                    </div>

                </section>
            </div>
        </>
    );
};

export default AboutUs;
