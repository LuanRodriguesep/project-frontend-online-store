import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import Categories from './Categories';
import ProductList from './ProductList';
import { getProductsFromCategoryAndQuery } from '../services/api';

class Home extends React.Component {
  constructor() {
    super();

    this.state = {
      results: [],
    };
  }

  handleClick = (inputValue) => {
    getProductsFromCategoryAndQuery(inputValue)
      .then((data) => this.setState({
        results: data.results,
      }));
  }

  render() {
    const { results } = this.state;
    return (
      <div>
        <SearchBar handleClick={ this.handleClick } />
        <Link to="/cart" data-testid="shopping-cart-button">link pra ShoppingCart</Link>
        <Categories />
        <ProductList results={ results } />
      </div>
    );
  }
}

export default Home;
