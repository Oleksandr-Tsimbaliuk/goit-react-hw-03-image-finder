import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from 'services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import { Container } from './App.styled';

export default class App extends Component {
  state = {
    query: '',
    currentPage: 1,
    gallery: [],
  };

  handleFormSubmit = query => {
    this.setState({ query });
  };

  // componentDidUpdate(prevProp, prevState) {
  //   if (this.state.query !== prevState.query) {
  //   }
  // }

  searchImages = async () => {
    try {
      const data = await fetchImages();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  // this.setState({ gallery: data.hits });
  // console.log(data.hits);

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery gallery={this.state.gallery}></ImageGallery>
      </Container>
    );
  }
}

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '33457552-f72b8f2d874a669f815eb264f';

// const fetchImages = async (query = '') => {
//   try {
//     const data = await axios.get(
//       `${BASE_URL}?${query}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     );
//     console.log(data.data);
//     return data;
//   } catch (error) {
//     console.log(error.message);
//   }
// };

// fetchImages();

// -----------------------------------------------
// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '33457552-f72b8f2d874a669f815eb264f';

// const fetchImages = async () => {
//   try {
//     const response = await fetch(
//       `${BASE_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//     );
//     const data = await response.json();
//     return data;
//   } catch (error) {}
// };

// -----------------------------------------------
// fetchImages();

// const fetchImages = () => {
//   return fetch(
//     `${BASE_URL}?q=cat&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
//   )
//     .then(response => response.json())
//     .catch(error => console.log(error));
// };
// fetchImages().then(data => console.log(data));
// -----------------------------------------------
