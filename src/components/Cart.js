import React from "react";
import CartScrollBar from "./CartScrollBar";
import EmptyCart from "../empty-states/EmptyCart";
import CartInfo from "./CartInfo";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartVisible: false,
    }
    this.handleClickCart = this.handleClickCart.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutsideCart.bind(this), true)
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutsideCart.bind(this), true)
  }

  // show or hide cart when we click on icon 
  handleClickCart() {
    this.setState({cartVisible: !this.state.cartVisible})
  }
  
  // hide cart when click whas outside window
  handleClickOutsideCart(e) {
    if (this.state.cartVisible) {
      if(!(e.target).closest('.cart-preview')) {
        this.setState({cartVisible: false})
        e.stopPropagation();
      }
    }
  }

  render() {
    return (
      <div className="cart">
        <CartInfo 
          totalItems={this.props.totalItems}
          totalAmount={this.props.totalAmount}
        />
        
        <a className="cart-icon" href="#" onClick={this.handleClickCart}>
          <img
            className={this.props.bounce ? "tada" : " "}
            alt="Cart"
            src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
          />
          <span className="cart-count">{this.props.totalItems}</span>
        </a>

        <div className={this.state.cartVisible ? "cart-preview active" : "cart-preview"}>
          {this.props.cartList.length > 0 ?
            <CartScrollBar
              cartList={this.props.cartList}
              removeFromCart={this.props.removeFromCart}
            /> :
            <EmptyCart />}

          <div className="action-block">
            <button
              type="button"
              className={this.props.cartList.length ? " " : "disabled"}
            >
              PROCEED TO CHECKOUT
            </button>

          </div>
        </div>
      </div>
    );
  }
}

export default Cart;