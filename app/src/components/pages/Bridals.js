import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Bshower from './Bshower.json';
import './Cardsf.css';



export default function Bridals() {
  return (
    <>
    <div className="App">
      {Bshower.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}