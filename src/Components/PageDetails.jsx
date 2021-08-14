import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';

class PageDetails extends React.Component {
  constructor(props) {
    super(props);
    // const { match, location } = this.props;
    // const { params } = match;
    // const { state } = location;
    this.state = {
      // id: params.id,
      product: [],
      attrib: [],
      // dataApi: state,

      // results: {
      //   title: '',
      //   price: 0,
      //   id: '',
      //   attributes: '',
      // }
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  idForLocalStorage = (id) => {
    localStorage.setItem(id, 1);
    // localStorage.setItem(id, id);
    // alterado (id,id) para (id,1) assim a quantidade fica sendo o valor
  }

  fetchData = async () => {
    const { match } = this.props;
    const { params } = match;
    const response = await fetch(`https://api.mercadolibre.com/items/${params.id}?include_attributes=all`);
    const result = await response.json();
    this.setState({
      product: result,
      attrib: result.attributes,
    });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, id } = product;
    const { attrib } = this.state;

    return (
      <div data-testid="product-detail-name">

        { attrib.map((atrib) => (
          <p key={ atrib.name }>

            {atrib.name}

            {atrib.value_name}
          </p>
        ))}

        <p>{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
        {/* criar um botao que faz a funcao de storage */}

        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ () => this.idForLocalStorage(id) }
        >
          Adicionar ao carrinho
        </button>

        <Link to="/cart" data-testid="shopping-cart-button">link pra ShoppingCart</Link>
      </div>

    );
  }
}

PageDetails.propTypes = {
  // location: PropTypes.shape({
  //   state: PropTypes.any,
  // }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};

export default PageDetails;
