import PropTypes from 'prop-types';
import React from 'react';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <p>
          {`R$${parseFloat(price).toFixed(2)}`}
          {' '}
        </p>
        <img src={ thumbnail } alt={ title } />
      </div>
    );
  }
}

ProductCard.propTypes = {
  price: PropTypes.number,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
}.isRequire;
export default ProductCard;
