import React from 'react';
import '../../App.css';
import Cards from './Cards';
import './formal.css';
import Party1 from './Party1.json';
import './Cardsf.css';

import { useState } from 'react';

import Modal from './Modal';

export default function Party   () {
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
      ...Party1
    ];
  
    const related = allProducts.filter(item =>
      !item.Category.includes(product.Category)
  );
  
    if (related.length < 5) {
      const randomProducts = shuffleArray(allProducts.filter(item => !related.includes(item))).slice(0, 5 - related.length);
      return [...related, ...randomProducts];
    }
  
    // If 5 or more related products found, shuffle them and return the first 5
    const shuffledRelated = shuffleArray(related).slice(0, 5);
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
      {Party1.map(item => (
        <Cards key={item.id} item={item}   handleClick={() => handleProductClick(item)}/>
      ))}
      {showModal && <Modal closeModal={closeModal} relatedProducts={relatedProducts} />}
    </div>
    </>
  );
}