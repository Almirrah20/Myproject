import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Engagement from './Engagement.json';
import './Cardsf.css';



export default function Engagement() {
  return (
    <>
    <div className="App">
      {Engagement.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}