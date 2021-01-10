import React from "react";
import Product from "./Product";
import NoResults from "../empty-states/NoResults";
import LoadingProducts from "../loaders/Products";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

const Products = props => {
  let view;
  const product = props.productList; // arr products
  const term = props.productSearch; // str from search input  
  const data = product.filter(item => {
    return item.name.toLowerCase().includes(term.toLowerCase())
  }).map(item => {
    return (
      <Product
        key={item.id}
        id={item.id}
        image={item.image}
        name={item.name}
        price={item.price}
        productQuantity={props.productQuantity}
        openModal={props.openModal}
        addToCart={props.addToCart}
        bounce={props.bounce}
      />
    )
  });
  
  if (data.length == 0 && !term) {
    view = <LoadingProducts />
  } else if (data.length == 0 && term) {
    view = <NoResults />
  } else {
    view = (
      <CSSTransitionGroup
        transitionName="fadeIn"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
        component="div"
        className="products"
      >
        {data}
      </CSSTransitionGroup>
    );
  }

  return (
    <div className="products-wrapper">{view}</div>
  )
}

export default Products;
