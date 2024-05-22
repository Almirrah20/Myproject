import React from 'react';
import '../../App.css';
import Cards from './Cards';
import Wshoes from './Wshoes.json';

export default function Informal() {
  return (
    <>
    <h1 className='informal'>Informal Wear</h1>
    <div className="App">
      {Wshoes.map(item => (
        <Cards key={item.id} item={item} />
      ))}
      
    </div>
    </>
  );
}