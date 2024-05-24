import React from 'react';
import './home.css';
import '../../App.css';
import Chatbot from './Chatbot.js';
import { TbHanger } from "react-icons/tb";
import cimg3 from './cimg3.png';



export default function Home() {

  return (
    <>
    <div className="container">
       <section className="carousel">
           <div className="slide">
             <img src={cimg3} alt="Image 1" />
           </div>
         </section>
       <main>
         <section className="hero">
           <h2>AI Stylist <TbHanger /></h2>
           <p>Talk to your personal stylist and get free guide.</p>
            <Chatbot />
         </section>
        
       </main>
       <footer>
         <p>&copy; 2024 GlamGuide</p>
       </footer>
     </div>
     </>
  );
}


