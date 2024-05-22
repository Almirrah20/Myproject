import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Casual1 from './Casual1.json';
import './Cardsf.css';



export default function Casual() {
  return (
    <>
    <div className="App">
      {Casual1.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}