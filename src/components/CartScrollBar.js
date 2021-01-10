import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

class CartScrollBar extends Component {
  render() {
    let cartList = this.props.cartList.map(item => {
      return (
        <li className="cart-item" key={item.id}>
          <img
            className="product-image"
            src={item.image}
            alt={item.name}
          />
          <div className="product-info">
            <p className="product-name">{item.name}</p>
            <p className="product-price">{item.price}</p>
          </div>
          <div className="product-total">
            <p className="quantity">{item.quantity}</p>
            <p className="amount">{item.quantity * item.price}</p>
          </div>
          <a
            className="product-remove"
            href="#"
            onClick={this.props.removeFromCart.bind(this, item.id)}
          >&times;</a>
        </li>
      );
    });

    let view = (
      <CSSTransitionGroup
        transitionName="fadeIn"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        component="ul"
        className="cart-items"
      >
        {cartList}
      </CSSTransitionGroup>
    );

    return (
      <Scrollbars style={{ width: 360, height: 320 }} ref="scrollbars">
        {view}
      </Scrollbars>
    );
  }
}

export default CartScrollBar;
