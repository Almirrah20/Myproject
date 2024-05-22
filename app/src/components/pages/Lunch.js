import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Lunch from './Lunch.json';
import './Cardsf.css';



export default function Lunch () {
  return (
    <>
    <div className="App">
      {Lunch.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}