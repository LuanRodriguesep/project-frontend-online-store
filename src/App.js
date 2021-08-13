import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import ShoppingCart from './Components/ShoppingCart';
import PageDetails from './Components/PageDetails';
// import SearchBar from './Components/SearchBar';
// import * as api from './services/api';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route path="/cart" component={ ShoppingCart } />
        <Route exact path="/details/:id" component={ PageDetails } />
      </BrowserRouter>
    </div>
  );
}

export default App;
