import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Meeting2 from './Meeting2.json';
import './Cardsf.css';



export default function Meeting () {
  return (
    <>
    <div className="App">
      {Meeting2.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}