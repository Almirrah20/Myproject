import React from 'react';
import './about.css'; 

export default function AboutUs() {
  return (
    <div>
      <section className="section">
        <h1 className="title">Welcome to GlamGuide – Your Ultimate Fashion Companion!</h1>
        <p className="text">
          At GlamGuide, we understand that fashion is not just about clothes; it's a reflection of your unique style and personality. 
          We are more than just a fashion recommendation system – we are your dedicated partner in navigating the ever-evolving world of style. 
          Our mission is to empower you to express yourself confidently through your wardrobe choices.
        </p>
      </section>

      <section className="section">
        <h2 className="sub-title">Our Mission</h2>
        <p className="text">
          Our mission is to make fashion accessible and enjoyable for everyone. We aim to provide personalized fashion recommendations 
          that align with your individual tastes, preferences, and lifestyle.
        </p>
      </section>


      <section className="section">
        <h2 className="sub-title">What Our Users Say</h2>
        <p className="testimonial">
          "GlamGuide completely transformed my wardrobe! The recommendations are always spot on and I've never felt more confident in my style." - Sarah K.
        </p>
        <p className="testimonial">
          "The personalized recommendations are amazing. It's like having a personal stylist available 24/7." - Michael L.
        </p>
      </section>

      <section className="contact">
        <h2 className="sub-title">Contact Us</h2>
        <p className="textss">
          We'd love to hear from you! Reach out to us at <a href="mailto:contact@glamguide.com">contact@glamguide.com</a>.
        </p>
      </section>
    </div>
  );
}
