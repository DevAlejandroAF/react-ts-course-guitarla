// import { useState, useEffect } from "react";
// import type { CartItem } from "../types";
//
// const useCart = () => {
//   const initialCart = function (): CartItem[] {
//     const localStorageCart = localStorage.getItem("cart");
//     return localStorageCart ? JSON.parse(localStorageCart) : [];
//   };
//
//   const [cart, setCart] = useState(initialCart);

//  const MAX_ITEMS = 5;
//  const MIN_ITEMS = 1;

//  useEffect(() => {
//    localStorage.setItem("cart", JSON.stringify(cart));
//  }, [cart]);

//  const addToCart = function (item: Guitar) {
//    const itemExist = cart.findIndex((guitar) => guitar.id === item.id);
//    if (itemExist >= 0) {
//      if (cart[itemExist].quantity >= MAX_ITEMS) return;
//      const updatedCart = [...cart];
//      updatedCart[itemExist].quantity++;
//      setCart(updatedCart);
//    } else {
//      const newItem: CartItem = { ...item, quantity: 1 };
//      setCart([...cart, newItem]);
//    }
//  };

//  const removeFromCart = function (id: Guitar["id"]) {
//    setCart((prevCart) => prevCart.filter((guitar) => guitar.id !== id));
//  };

//   const decreaseQuantity = function (id: Guitar["id"]) {
//     const updatedCart = cart.map((item) => {
//       if (item.id === id && item.quantity > MIN_ITEMS) {
//         return {
//           ...item,
//           quantity: item.quantity - 1,
//         };
//       }
//       return item;
//     });
//     setCart(updatedCart);
//   };

//   const increaseQuantity = function (id: Guitar["id"]) {
//     const updatedCart = cart.map((item) => {
//       if (item.id === id && item.quantity < MAX_ITEMS) {
//         return {
//           ...item,
//           quantity: item.quantity + 1,
//         };
//       }
//       return item;
//     });
//     setCart(updatedCart);
//   };

// const clearCart = function () {
//   setCart([]);
// };

//  const isEmpty = useMemo(() => cart.length === 0, [cart]);
//  const cartTotal = useMemo(
//    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
//    [cart],
//  );

//  return {
//    cart,
//    addToCart,
// removeFromCart,
//   decreaseQuantity,
// increaseQuantity,
//  clearCart,
//    isEmpty,
//    cartTotal,
//  };
//};

// export { useCart };
