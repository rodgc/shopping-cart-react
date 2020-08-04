import React from "react";

function MenuItem({productName,price,  sku, addToCart}) {
  return (
    <div className="menu-item">
      <span className="menu-text">{`${productName} - $${price}`}</span>
      <span className="menu-action">
        <button onClick={() => addToCart(sku)}>+</button>
      </span>
    </div>
  );
}

export default MenuItem;
