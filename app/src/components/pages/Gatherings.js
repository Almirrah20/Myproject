import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Gatherings from './Gatherings.json';
import './Cardsf.css';



export default function Gatherings() {
  return (
    <>
    <div className="App">
      {Gatherings.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}