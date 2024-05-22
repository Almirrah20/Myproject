import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Nightout from './Nightout.json';
import './Cardsf.css';



export default function Nightout  () {
  return (
    <>
    <div className="App">
      {Nightout.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}