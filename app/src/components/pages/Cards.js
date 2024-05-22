// Card.js
import React from 'react';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";



const Cards = ({ item }) => {
  const handleAddToCart = () => {
    console.log(`Added ${item.ProductName} to the cart. Redirecting to ${item.ProductURL}`);

    // external url redirection
    window.location.href = item.ProductURL;
  };
  return (
    <div className='box' >
      <div className="card">
        <div className='image'>
          <img src={item.ProductImages} alt={item.ProductName} className='newimg' />
        </div>
        <div className='desc'>
          <h1>{item.ProductName}</h1>
          <span>{item.ProductPrice}</span>
        </div>

        <div className="star">
          <FaStar className="icon" />
          <FaStar className="icon" />
          <FaStar className="icon" />
          <CiStar className="icon" />
          <CiStar className="icon" />
        </div>
      </div>
      <button className='button1' onClick={handleAddToCart}>Buy now</button>

    </div>

  );
};

export default Cards;
