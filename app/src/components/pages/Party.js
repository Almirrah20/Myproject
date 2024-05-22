import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Party1 from './Party1.json';
import './Cardsf.css';



export default function Party   () {
  return (
    <>
    <div className="App">
      {Party1.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}