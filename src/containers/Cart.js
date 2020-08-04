import React from "react";

function Cart({ cart, cartTotal, menu, reduceCart }) {
  return (
    <div className="cart">
      <h2 className="text-center">Cart</h2>
      <div className="cart-area">
          {Object.keys(cart).map((sku, index) =>(
              <div className="cart-item" key={index}>
                  <span className="item-text">{`${menu[sku].productName} x ${cart[sku]}`}</span>
          <span className="item-total">{`$${menu[sku].price}`}</span>
                  <button className="remove-button" onClick={() => reduceCart(sku)}>-</button>
              </div>
          ))}
        <div className="cart-total">
          <div className="cart-item">
            <span className="item-text">Total</span>
            <p className="item-total">
              $<span className="total-amount">{cartTotal}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
