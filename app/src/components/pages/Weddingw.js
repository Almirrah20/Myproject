import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Wedding from './Wedding.json';
import './Cardsf.css';



export default function Weddingw  () {
  return (
    <>
    <div className="App">
      {Wedding.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}