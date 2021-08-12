import PropTypes from 'prop-types';
import React from 'react';
import { getCategories } from '../services/api';
import CategorieCard from './CategorieCard';

class Categories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      categories: [],
    };
  }

  // componentDidMount(){
  //   getCategories()
  //     .then((result) => console.log(result));
  // }

  componentDidMount() {
    getCategories()
      .then((result) => this.setState({ categories: result }));
  }

  render() {
    const { categories } = this.state;
    const { handleClick } = this.props;

    return (
      <div>

        <h2>Categorias:</h2>
        { categories.map(({ id, name }) => (<CategorieCard
          key={ id }
          name={ name }
          handleClick={ handleClick }
        />)) }

      </div>
    );
  }
}

Categories.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string,
}.isRequire;

export default Categories;
