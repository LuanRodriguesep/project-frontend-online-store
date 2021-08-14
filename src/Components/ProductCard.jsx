import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class ProductCard extends React.Component {
  idForLocalStorage = (id) => {
    localStorage.setItem(id, 1);
    // localStorage.setItem(id, id);
    // alterado (id,id) para (id,1) assim a quantidade fica sendo o valor
  }

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
        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ () => this.idForLocalStorage(id) }
        >
          Adicionar ao carrinho
        </button>
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
