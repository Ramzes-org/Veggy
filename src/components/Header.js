import React from "react";
import Brand from "./Brand";
import Search from "./Search";
import Cart from "./Cart";

const Header = props => {
  return (
    <header>
      <div className="container">
        <Brand />
        <Search 
          handleSearch={props.handleSearch} 
          handleResetSearch={props.handleResetSearch}
        />
        <Cart 
          totalItems={props.totalItems}
          totalAmount={props.totalAmount}
          cartList={props.cartList}
          removeFromCart={props.removeFromCart}
          bounce={props.bounce}
        />
      </div>
    </header>
  )
}

export default Header;
