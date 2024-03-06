import logo from './logo.svg';
import './App.css';
import { Fragment,useState  } from 'react';
import Header from './components/Header/Header';
import FoodSummary from './components/Foodsummary/FoodSummary';
import AvailableFood from './components/Availablefood/AvailableFood';

import Cart from './components/Cart/Cart';
import Food from './components/Food';

import CartProvider from './components/Store/CartProvider'


function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
   {cartIsShown && <Cart onClose={hideCartHandler} />}  
       <Header onShowCart={showCartHandler}></Header>
       <main>
       <Food></Food>
       </main>
       </CartProvider>
  );
}

export default App;
