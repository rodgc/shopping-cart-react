import React from "react";
import Menu from './Menu';
import Cart from './Cart';

function MenuCart() {
  return <div className="menu-cart">
      <Menu />
      <Cart />
  </div>;
}

export default MenuCart;
