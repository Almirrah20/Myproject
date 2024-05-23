import React from "react";
import "../../App.css";

const Modal = ({ closeModal, relatedProducts }) => {
  const handleCloseModal = () => {
    closeModal();
  };
  function handleAddToCart(productURL){
    window.location.href = productURL;
  };
  return (
    <div
      className="modal fade show"
      style={{ display: "block" }}
      tabIndex="-1"
      role="dialog"
    >
      <div className="modal-dialog modal-lg" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Recommended Products</h5>
            <button type="button" className="btn btn-primary close" onClick={handleCloseModal}>
              Close 
            </button>
          </div>
          <div className="modal-body">
            <div className="card p-5">
              <div className="row">
                {relatedProducts.map((item) => (
                  <div key={item.id} className="col-md-3">
                    <div className="image">
                      <img
                        src={item.ProductImages}
                        alt={item.ProductName}
                        style={{width:"100%",height:220}}
                      />
                    </div>
                    <div className="desc" style={{height:100}}>
                      <h1>{item.ProductName}</h1>
                      <span>{item.ProductPrice}</span>
                    </div>
                    <button className='button1' onClick={()=>handleAddToCart(item.ProductURL)}>Buy now</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
