import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import WeddingMen from './WeddingMen.json';
import './Cardsf.css';



export default function Wedding  () {
  return (
    <>
    <div className="App">
      {WeddingMen.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}