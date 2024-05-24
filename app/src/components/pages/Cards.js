import React, { useState } from 'react';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


const Cards = ({ item, handleClick }) => {
  const [rating, setRating] = useState(item.ProductRating || 0);

  const handleAddToCart = (event) => {
    event.stopPropagation();
    window.location.href = item.ProductURL;
  };

  const handleStarClick = (newRating) => {
    setRating(newRating);
   
  };

  const renderStars = () => {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <span key={i} onClick={() => handleStarClick(i)}>
          {i <= rating ? <FaStar className="icon" /> : <CiStar className="icon" />}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className='box' onClick={handleClick}>
      <div className="card">
        <div className='image1'>
          <img src={item.ProductImages} alt={item.ProductName} className='newimg' />
        </div>
        <div className='desc'>
          <h1>{item.ProductName}</h1>
          <span>{item.ProductPrice}</span>
        </div>

        <div className="star">
          {renderStars()}
        </div>
      </div>
      <button className='button1' onClick={handleAddToCart}>Buy now</button>
    </div>
  );
};

export default Cards;
