import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  render() {
    const { title, price, thumbnail, id } = this.props;
    return (
      <div data-testid="product">
        <p>{ title }</p>
        <p>
          {`R$${parseFloat(price).toFixed(2)}`}

        </p>
        <img src={ thumbnail } alt={ title } />
        <Link to={ `details/${id}` } data-testid="product-detail-link">Detalhes</Link>
        {/* <Link to={ { pathname: `${id}/edit` } }>EDITAR</Link>  */}
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
