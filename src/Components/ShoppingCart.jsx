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
      // criado logica para alterar quantidade no carrinho
      const CartAmount = localStorage.getItem(key);
      console.log(CartAmount);
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
    // console.log(responseApi)
    this.setState(product);
    this.setState({ empty: false });
    // handleCartAmount(responseApi)
    console.log(empty);
  }
  // criando função para gerenciar quantidade do carrinho, se é primeira vez seta quantidade para 1, se já existe a incrementa.
  // handleCartAmount = (responseApi) => {
  //   const teste = localStorage.getItem(responseApi.id)
  //   console.log(teste);

  // }

  render() {
    const { product, empty } = this.state;
    // alterado nome de xaBlau para cartIsEmpty
    // console.log(product)
    const cartIsEmpty = () => {
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
              Quantidade:
              {' '}
              {localStorage.getItem(atrib.id)}
              {/* quantidade:
              {' '}
              {atrib.available_quantity}
              1 */}
            </span>
          </p>
        ))}
        {' '}
        { cartIsEmpty() }
      </div>
    );
  }
}

export default ShoppingCart;
