import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Brunch1 from './Brunch1.json';
import './Cardsf.css';



export default function Brunch() {
  return (
    <>
    <div className="App">
      {Brunch1.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}