import React, { Component } from "react";
import Counter from "./Counter";
import PropTypes from "prop-types";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.productQuantity,
      activeBtn: false
    }
    this.handleClickIncrement = this.increment.bind(this);
    this.handleClickDecrement = this.decrement.bind(this);
    this.handleChangeInput = this.changeInput.bind(this);
  }

  increment(e) {
    e.preventDefault();
    this.setState(lastValue => ({value: Number(lastValue.value) + 1}));    
  }

  decrement(e) {
    e.preventDefault();
    if(this.state.value <= 1) return;
    this.setState(lastValue => ({value: Number(lastValue.value) - 1}))  
  }

  changeInput(e) {
    this.setState({value: e.target.value})
  }
  
  // click on image show QuiceView 
  handleClick(image, name, price, id) {
    this.props.openModal({
      image: image,
      name: name,
      price: price,
      id: id
    })
  }

  addToCart(image, name, price, id, quantity) {
    this.props.addToCart({
      image: image,
      name: name,
      price: price,
      id: id,
      quantity: quantity
    })
    this.setState({activeBtn: true})
    setTimeout(()=> {
      this.setState({activeBtn: false})
    }, 2000)
  }

  render() {
    let image = this.props.image;
    let name = this.props.name;
    let price = this.props.price;
    let id = this.props.id;
    let quantity = this.state.value
    
    return (
      <div className="product">
        <div className="product-image">
          <img
            src={image}
            alt={name}
            onClick={
              this.handleClick.bind(this, image, name, price, id)
            }
          />
        </div>
        <h4 className="product-name">{name}</h4>
        <p className="product-price">{price}</p>
        <Counter  
          productQuantity={quantity}
          handleClickIncrement={this.handleClickIncrement}
          handleClickDecrement={this.handleClickDecrement}
          handleChangeInput={this.handleChangeInput}
        />
        <div className="product-action">
          <button 
            type="button"
            className={this.state.activeBtn ? "added" : " "}
            onClick={this.addToCart.bind(this, image, name, price, id, quantity)}
          >
            {this.state.activeBtn ? "✔ ADDED" : "ADD TO CART"}
          </button>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  value: PropTypes.number
}

export default Product;
