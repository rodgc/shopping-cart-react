import React from "react";
import MenuItem from "../components/MenuItem";

function Menu({ menu, addToCart }) {
  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="menu-area">
        {Object.keys(menu).map((sku, index) => (
          <MenuItem
            key={index}
            productName={menu[sku].productName}
            price={menu[sku].price}
            sku={sku}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default Menu;
