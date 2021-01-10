import React from "react";

const CartInfo = props => {
  return (
    <div className="cart-info">
      <table>
        <tbody>
          <tr>
            <td>No. of items</td>
            <td>:</td>
            <td>
              <strong>{props.totalItems}</strong>
            </td>
          </tr>
          <tr>
            <td>Sub Total</td>
            <td>:</td>
            <td>
              <strong>{props.totalAmount}</strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default CartInfo;