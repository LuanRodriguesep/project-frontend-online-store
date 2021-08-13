import React from 'react';
// import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductDetails from './ProductDetails';

class PageDetails extends React.Component {
  constructor(props) {
    super(props);
    const { match, location } = this.props;
    const { params } = match;
    const { state } = location;
    this.state = {
      id: params.id,
      product: [],
      dataApi: state,
    };
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    const { match } = this.props;
    const { params } = match;
    const response = await fetch(`https://api.mercadolibre.com/items/${params.id}?include_attributes=all`);
    const result = await response.json();
    this.setState({
      product: result,
    });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, attributes } = product;
    return (

        <div>
          {attributes.map(({ name }) => (<ProductDetails
            key={name}
            name={name}
          />))}
        </div>

    );
  }
}

export default PageDetails;

