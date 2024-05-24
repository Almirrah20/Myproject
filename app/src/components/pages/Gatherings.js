import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Gathering1 from './Gatherings.json';
import './Cardsf.css';
import { useState } from 'react';

import Modal from './Modal';



export default function Gatherings() {
  const [showModal, setShowModal] = useState(false);
  const [relatedProducts, setRelatedProducts] = useState([]);

  const handleProductClick = (product) => {
    setShowModal(true);
    const related = findRelatedProducts(product);
    setRelatedProducts(related);
  };

  const closeModal = () => {
    setShowModal(false);
    setRelatedProducts([]);
  };

  const findRelatedProducts = (product) => {
    const allProducts = [
      ...Gathering1
    ];
  
    const related = allProducts.filter(item =>
      !item.Category.includes(product.Category)
  );
  
    if (related.length < 4) {
      const randomProducts = shuffleArray(allProducts.filter(item => !related.includes(item))).slice(0, 4 - related.length);
      return [...related, ...randomProducts];
    }
  
    // If 4 or more related products found, shuffle them and return the first 4
    const shuffledRelated = shuffleArray(related).slice(0, 4);
    return shuffledRelated;
  };
  
  // Function to shuffle an array
  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  return (
    <>
    <div className="App">
      {Gathering1.map(item => (
        <Cards key={item.id} item={item}  handleClick={() => handleProductClick(item)} />
      ))}
      {showModal && <Modal closeModal={closeModal} relatedProducts={relatedProducts} />}
      
    </div>
    </>
  );
}