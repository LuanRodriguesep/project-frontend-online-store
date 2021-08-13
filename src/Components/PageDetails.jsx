import PropTypes from 'prop-types';
import React from 'react';

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
    const { title, price, thumbnail } = product;
    const { attrib } = this.state;

    return (
      <div data-testid="product-detail-name">

        { attrib.map((atrib) => (
          <p key={ atrib.name }>

            {atrib.name}

            {atrib.value_name}
          </p>
        ))}

        <h1>Testando</h1>
        <p>{title}</p>
        <p>{price}</p>
        <img src={ thumbnail } alt={ title } />
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
