import PropTypes from 'prop-types';
import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };
  }

    handleChange = (e) => {
      this.setState({
        inputValue: e.target.value,
      });
      console.log(e.target.value);
    };

    render() {
      const { inputValue } = this.state;
      const { handleClick } = this.props;
      return (
        <form>
          <label htmlFor="search-bar-input" data-testid="home-initial-message">
            <input
              type="text"
              className="search-bar-input"
              data-testid="query-input"
              onChange={ this.handleChange }
              value={ inputValue }
            />
            Digite algum termo de pesquisa ou escolha uma categoria.
          </label>
          <button
            type="button"
            data-testid="query-button"
            onClick={ () => handleClick(inputValue) }
          >
            Search
          </button>
        </form>
      );
    }
}

SearchBar.propTypes = {
  handleClick: PropTypes.func,
}.isRequire;

export default SearchBar;
