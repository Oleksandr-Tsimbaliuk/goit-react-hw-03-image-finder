import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import PixabayAPI from 'api/api';

const pixabayAPI = new PixabayAPI();

export default class App extends Component {
  state = {
    imgValue: '',
  };
  handleFormSubmit = imgValue => {
    this.setState({ imgValue });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery></ImageGallery>
      </>
    );
  }
}
