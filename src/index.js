import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios"
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";
import QuickView from "./components/QuickView";
import "./scss/style.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
      cart: [],
      totalItems: 0,
      totalAmount: 0,
      quantity: 1,
      search: "",
      quickView: {},
      modalActive: false,
      bounce: false
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleResetSearch = this.resetSearh.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
  }
 
  // Fetch Initial Set of Products from external API
  getProducts() {
    let url = "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json";
    axios.get(url).then(response => {
      setTimeout(()=> {
        this.setState({
          products: response.data
        });
      }, 500)
    });
  }

  componentDidMount() {
    this.getProducts();
  }

  // Search filter
  handleSearch(e) {
    this.setState({search: e.target.value});
  }

  resetSearh() {
    this.setState({search: ""});
  }

  addToCart(product) {
    let cart = this.state.cart;
    const isCart = cart.some(item => item.name === product.name);
     
    if (!isCart) { // add new product
      cart.push(product);
    } else { // add the same product
      cart = cart.map((item) => {
        if (item.name === product.name) {
          item.quantity += product.quantity
        }
        return item;
      })
    }
    this.setState({cart: cart, bounce: true}) 
    this.totalAmount();
    this.totalPrice();
    setTimeout(()=> {
      this.setState({bounce: false})
    }, 1000);
  }

  removeFromCart(id) {
    let list = this.state.cart;
    let index = list.findIndex(item => item.id === id);
    list.splice(index, 1);
    this.setState({cart: list})
    this.totalAmount();
    this.totalPrice();
  }

  totalAmount() {
    this.setState({totalItems: this.state.cart.length})
  }

  totalPrice() {
    let totalPrice = 0;
    // total price products in cart
    this.state.cart.forEach(item => totalPrice += item.price * item.quantity);
    this.setState({totalAmount: totalPrice})
  }

  clickOutsideModal(e) {
    if(!(e.target).closest('.modal')) {
      this.setState({modalActive: false})
    }
  }

  //QuickViwe modal window
  openModal(product) {
    this.setState({
      modalActive: true,
      quickView: product
    })
  }

  closeModal() {
    this.setState({modalActive: false})
  }

  render() {
    return (
      <div className="container">
        <Header 
          handleSearch={this.handleSearch}
          handleResetSearch={this.handleResetSearch}
          totalItems={this.state.totalItems}
          totalAmount={this.state.totalAmount}
          cartList={this.state.cart}
          removeFromCart={this.removeFromCart}
          bounce={this.state.bounce}
        />
        <Products 
          productList={this.state.products}
          productQuantity={this.state.quantity}
          productSearch={this.state.search}
          openModal={this.openModal}
          addToCart={this.addToCart}
          bounce={this.state.bounce}
        />
        <Footer />
        <QuickView
          product={this.state.quickView} 
          modalOpen={this.state.modalActive}
          modalClose={this.closeModal}
          clickOutside={this.clickOutsideModal}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
