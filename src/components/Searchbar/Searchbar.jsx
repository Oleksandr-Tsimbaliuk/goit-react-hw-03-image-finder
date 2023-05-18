import React, { Component } from 'react';
import { StyledSearhbar } from './Styled';
import { ReactComponent as IconSeacrh } from '../../icons/seach-icon.svg';

export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();

    if (this.state.query.trim() === '') {
      alert('Please, enter search value');
      return;
    }

    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <StyledSearhbar>
        <form onSubmit={this.handleSubmit} className="SearchForm">
          <button type="submit" className="SearchForm-button">
            <IconSeacrh className="SearchForm-button-label"></IconSeacrh>
          </button>

          <input
            onChange={this.handleQueryChange}
            value={this.state.query}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </StyledSearhbar>
    );
  }
}
