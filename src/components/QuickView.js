import React, { Component } from "react";

const QuickView = props => {
  return (
    <div
      className={props.modalOpen ? 'modal-wrapper active' : 'modal-wrapper'}
      onClick={props.clickOutside}
    >
      <div className="modal">
        <button
          type="button"
          className="close"
          onClick={props.modalClose}
        >&times;</button>
        <div className="quick-view-image">
          <img src={props.product.image} alt={props.product.name} />
        </div>
        <div className="quick-view-details">
          <span className="product-name">{props.product.name}</span>
          <span className="product-price">{props.product.price}</span>
        </div>
      </div>
    </div>
  )
}

export default QuickView;
