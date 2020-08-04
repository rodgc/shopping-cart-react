import React, { useState, useEffect } from "react";
import Menu from "./Menu";
import Cart from "./Cart";

function MenuCart() {
  const [menuData, setMenuData] = useState({
    "2342153": {
      productName: "Mouse",
      price: 199,
    },

    "12364324": {
      productName: "Keyboard",
      price: 699,
    },

    "7893424": {
      productName: "AMD CPU",
      price: 6999,
    },
  });
  const [cartData, setCartData] = useState({});
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    Object.keys(cartData).map((sku) => {
      let qty = cartData[sku];
      let price = menuData[sku].price;
      total += qty * price;
    });

    setCartTotal(total);
  }, [cartData]);

  const addToCart = (sku) => {
    let newCart = { ...cartData };

    if (sku in cartData) {
      newCart[sku] += 1;
    } else {
      newCart[sku] = 1;
    }

    setCartData(newCart);
  };

  const reduceFromCart = (sku) => {
    let newCart = { ...cartData };

    if (sku in cartData) {
      newCart[sku] -= 1;

      if (newCart[sku] < 1) {
        delete newCart[sku];
      }
    }

    setCartData(newCart);
  };

  return (
    <div className="menu-cart">
      <Menu menu={menuData} addToCart={addToCart} />
      <Cart
        cartTotal={cartTotal}
        menu={menuData}
        cart={cartData}
        reduceCart={reduceFromCart}
      />
    </div>
  );
}

export default MenuCart;
