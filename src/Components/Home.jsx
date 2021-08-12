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
      .then((data) => {
        this.setState({
          results: data.results,
        });
        // console.log(category)
      });
  }
  // console.log(category))

  // handleClickCategory =(categoryValue) => {
  //   getProductsFromCategoryAndQuery(categoryValue)
  //   .then((data) => this.setState({
  //     results: data.results,
  //   }));
  // }

  render() {
    const { results } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">link pra ShoppingCart</Link>
        <SearchBar handleClick={ this.handleClick } />
        <Categories handleClick={ this.handleClick } />
        <ProductList results={ results } />
      </div>
    );
  }
}

export default Home;
