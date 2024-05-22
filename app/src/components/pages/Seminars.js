import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Seminars from './Seminars.json';
import './Cardsf.css';



export default function Seminars  () {
  return (
    <>
    <div className="App">
      {Seminars.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}