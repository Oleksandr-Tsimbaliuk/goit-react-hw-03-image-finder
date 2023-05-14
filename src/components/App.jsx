import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import PixabayAPI from 'api/api';

const pixabayAPI = new PixabayAPI();

export default class App extends Component {
  state = {
    imgValue: '',
    gallery: [],
  };
  handleFormSubmit = imgValue => {
    this.setState({ imgValue });
  };

  async componentDidUpdate(prevProp, prevState) {
    if (this.state.imgValue !== prevState.imgValue) {
      const { data } = await pixabayAPI.fetchPhotos();
      console.log(data);
      this.setState({ gallery: data.hits });
    }
  }

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery></ImageGallery>
      </>
    );
  }
}
