import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import LandingPage from './LandingPage';
import ProductListingPage from './ProductListingPage';
import ShoppingCartPage from './ShoppingCartPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  return (
    <Provider store={store}>
      <div className="App">
        {currentPage === 'landing' && <LandingPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'products' && <ProductListingPage setCurrentPage={setCurrentPage} />}
        {currentPage === 'cart' && <ShoppingCartPage setCurrentPage={setCurrentPage} />}
      </div>
    </Provider>
  );
}

export default App;