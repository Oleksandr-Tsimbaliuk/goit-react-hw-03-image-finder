import React, { Component } from 'react';

export default class Searchbar extends Component {
  state = {
    imgValue: '',
  };

  handleImgValueChange = event => {
    this.setState({ imgValue: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    if (this.state.imgValue.trim() === '') {
      alert('Please, enter search value');
    }

    event.preventDefault();
    this.props.onSubmit(this.state.imgValue);
    this.setState({ imgValue: '' });
  };

  render() {
    return (
      <header className="searchbar">
        <form onSubmit={this.handleSubmit} className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            onChange={this.handleImgValueChange}
            value={this.state.imgValue}
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
