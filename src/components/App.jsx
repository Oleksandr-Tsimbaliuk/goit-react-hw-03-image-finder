import React, { Component } from 'react';

import { fetchImages } from 'services/api';
import { Container } from './App.styled';
import { Watch } from 'react-loader-spinner';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Modal from './Modal/Modal';
import Button from './Button/Button';

export default class App extends Component {
  state = {
    query: '',
    currentPage: 1,
    gallery: [],
    isLoading: false,
    error: null,
    showModal: false,
    largeImage: '',
    alt: '',
  };

  componentDidUpdate(prevProp, prevState) {
    if (this.state.query !== prevState.query) {
      this.setState({ gallery: [] });
      this.searchImages(this.state.query);
    }
  }
  handleFormSubmit = query => {
    this.setState({ query });
  };

  toggleModal = () => {
    this.setState(state => ({
      showModal: !state.showModal,
    }));
  };

  handleImageClick = (largeImageURL, tags) => {
    this.setState({ largeImage: largeImageURL, alt: tags });
    this.toggleModal();
  };

  // handleLoadMore = () => {};

  searchImages = async (query, currentPage) => {
    this.setState({ isLoading: true });
    try {
      const data = await fetchImages(query, currentPage);
      this.setState({ gallery: data.hits });
      console.log(data.hits);
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render() {
    const { largeImage, alt, error, isLoading, gallery, showModal } =
      this.state;
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        {error && <p>Whoops, something went wrong: {error.message}</p>}
        {isLoading && (
          <Watch
            height="80"
            width="80"
            radius="48"
            color="#4fa94d"
            ariaLabel="watch-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
        {!isLoading && (
          <ImageGallery
            gallery={gallery}
            onClick={this.handleImageClick}
          ></ImageGallery>
        )}
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={alt} />
          </Modal>
        )}
        {gallery.length > 0 && <Button onClick={this.handleLoadMore}></Button>}
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
