import PropTypes from 'prop-types';
import React from 'react';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  render() {
    const { results } = this.props;
    return (
      <div>
        { results.map(({ id, title, price, thumbnail }) => (<ProductCard
          key={ id }
          title={ title }
          price={ price }
          thumbnail={ thumbnail }
          id={ id }
        />)) }
      </div>
    );
  }
}

ProductList.propTypes = {
  results: PropTypes.shape({
    map: PropTypes.func,
  }),
}.isRequire;
export default ProductList;
