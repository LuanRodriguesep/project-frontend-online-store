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

  // componentDidUpdate() {
  //   Object.keys(localStorage).forEach((key) => {
  //     this.fetchData(key);
  //     // criado logica para alterar quantidade no carrinho
  //     const CartAmount = localStorage.getItem(key);
  //     console.log(CartAmount);
  //   });
  // }

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
  // funcao para somar ou subtrair
  itemPlus = (id) => {
    let retorno = parseInt(localStorage.getItem(id), 10);
    retorno += 1;
    localStorage.setItem(id, retorno);
    this.forceUpdate();
    console.log(retorno);
  }

  itemLess = (id) => {
    let retorno = parseInt(localStorage.getItem(id), 10);

    // ternario caso seja 0
    if (retorno === 1) {
      // console.log('sou zero');
      localStorage.removeItem(id);
      this.forceUpdate();
      // this.setState()
    } else {
      // senao segue nornal
      retorno -= 1;
      localStorage.setItem(id, retorno);
      this.forceUpdate();
      console.log(retorno);
    }
  }

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
              <button
                type="button"
                data-testid="product-increase-quantity"
                onClick={ () => this.itemPlus(atrib.id) }
              >
                Aumentar
              </button>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                onClick={ () => this.itemLess(atrib.id) }
              >
                Reduzir
              </button>

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
