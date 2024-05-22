import React from 'react';
import './home.css';
import '../../App.css';

import cimg from './cimg.png';


export default function Home() {

  return (
    <>
   <div className="container">
      <header>
        <h1>Welcome to Our Website</h1>
      </header>
      <section className="carousel">
          <div className="slide">
            <img src={cimg} alt="Image 1" />
          </div>
         
        </section>
      <main>
        <section className="hero">
          <h2>Your Catchy Tagline Goes Here</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis velit eget nulla fermentum, in interdum lectus rutrum.</p>
          <button className="cta-button">Learn More</button>
        </section>
       
      </main>
      <footer>
        <p>&copy; 2024 GlamGuide</p>
      </footer>
    </div>
    </>
  );
}


