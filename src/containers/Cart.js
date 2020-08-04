import React from "react";

function Cart() {
  return (
    <div className="cart">
      <h2 className="text-center">Cart</h2>
      <div className="cart-area">
        <div className="cart-total">
          <div className="cart-item">
            <span className="item-text">Total</span>
            <p className="item-total">
              $<span className="total-amount">0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
