import React from 'react';
import PropTypes from 'prop-types';

class CategorieCard extends React.Component {
  constructor(props) {
    super(props);
    const { name } = this.props;

    this.state = {
      category: name,
    };
  }

  render() {
    const { name, handleClick } = this.props;
    const { category } = this.state;

    return (
      <div>
        {/* <a href='' onClick={ () => handleClick(category) }>{name} </a> */}
        <button
          type="button"
          data-testid="category"
          onClick={ () => handleClick(category) }
        >
          {name}

        </button>

        {/* <p data-testid="category">
          { name }
        </p> */}
      </div>
    );
  }
}

CategorieCard.propTypes = {
  name: PropTypes.string,
}.isRequired;

export default CategorieCard;
