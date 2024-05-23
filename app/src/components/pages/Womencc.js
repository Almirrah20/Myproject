// Card.js
import React from 'react';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";



const Womencc = ({ item }) => {

  return (
    <div>
        
    <div className='box1' >
 
      <div className="card1">
        <div className='image'>
          <img src={item.ProductImages} alt={item.ProductName} className='newimg' />
        </div>

        <div className="star">

            </div>
      </div>
      

    </div>
    </div>

  );
};

export default Womencc;
