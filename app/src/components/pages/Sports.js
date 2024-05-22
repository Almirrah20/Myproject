import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import sports from './sports.json';
import './Cardsf.css';



export default function Sports   () {
  return (
    <>
    <div className="App">
      {sports.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}