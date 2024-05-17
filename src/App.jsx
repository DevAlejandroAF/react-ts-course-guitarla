import { useState, useEffect } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import Footer from './components/Footer';
import { db } from './data/db';

const App = function() {

  const initialCart = function() {
    const localStorageCart = localStorage.getItem('cart');
    return localStorageCart ? JSON.parse(localStorageCart) : [];
  }

  const [data] = useState(db);
  const [cart, setCart] = useState(initialCart);

  const MAX_ITEMS = 5;
  const MIN_ITEMS = 1;

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = function(item) {
    const itemExist = cart.findIndex((guitar) => guitar.id === item.id)
    if (itemExist >= 0) {
      if (cart[itemExist].quantity >= MAX_ITEMS) return
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
  }

  const removeFromCart = function(id) {
    setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
  }

  const decreaseQuantity = function(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > MIN_ITEMS) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })
    setCart(updatedCart);
  }

  const increaseQuantity = function(id) {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity < MAX_ITEMS) {
        return {
          ...item,
          quantity: item.quantity + 1
        }
      }
      return item
    })
    setCart(updatedCart);
  }

  const clearCart = function() {
    setCart([]);
  }

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        decreaseQuantity={decreaseQuantity}
        increaseQuantity={increaseQuantity}
        clearCart={clearCart}
      />
      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>
        <div className="row mt-5">
          {data.map((guitar) => (
            <Guitar
              key={guitar.id}
              guitar={guitar}
              setCart={setCart}
              addToCart={addToCart}
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  )
};

export default App;
