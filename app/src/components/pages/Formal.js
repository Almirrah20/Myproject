import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Women from './Women.json';
import './Cardsf.css';



export default function Formal() {
  return (
    <>
    <div className="App">
      {Women.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}