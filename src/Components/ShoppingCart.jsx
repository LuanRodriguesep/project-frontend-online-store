import React from 'react';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      product: [],
      empty: true,
    };
  }

  componentDidMount() {
    Object.keys(localStorage).forEach((key) => {
      this.fetchData(key);
    });
  }

  fetchData = async (key) => {
    const response = await fetch(`https://api.mercadolibre.com/items/${key}?include_attributes=all`);
    const result = await response.json();
    // console.log(result);
    this.handleArrays(result);
  }

  handleArrays = (responseApi) => {
    const { product, empty } = this.state;
    product.push(responseApi);
    this.setState(product);
    this.setState({ empty: false });
    console.log(empty);
  }

  render() {
    const { product, empty } = this.state;
    const xaBlaU = () => {
      const verify = (empty)
        ? <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        : undefined;
      return verify;
    };
    return (
      <div>

        { product.map((atrib) => (
          <p data-testid="shopping-cart-product-name" key={ atrib.id }>

            {atrib.title}

            {atrib.price}

            <span data-testid="shopping-cart-product-quantity">
              quantidade:
              {' '}
              {atrib.available_quantity}
              1
            </span>
          </p>
        ))}
        {' '}
        { xaBlaU() }
      </div>
    );
  }
}

export default ShoppingCart;
