import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import { fetchImages } from 'services/api';
import ImageGallery from './ImageGallery/ImageGallery';
import { Container } from './App.styled';
import { Watch } from 'react-loader-spinner';
import Modal from './Modal/Modal';

export default class App extends Component {
  state = {
    query: '',
    currentPage: 1,
    gallery: [],
    isLoading: false,
    error: null,
    showModal: true,
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

  // async componentDidMount() {
  //   const data = await fetchImages();
  //   this.setState({ gallery: data.hits });
  //   console.log(data.hits);
  // }

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
    return (
      <Container>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        {this.state.error && (
          <p>Whoops, something went wrong: {this.state.error.message}</p>
        )}
        {this.state.isLoading && (
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
        <ImageGallery gallery={this.state.gallery}></ImageGallery>
        {this.state.showModal && (
          <Modal onClose={this.toggleModal}>
            <button onClick={this.toggleModal} type="button">
              click
            </button>
            <img src="" alt="" />
          </Modal>
        )}
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

// import React, { Component } from 'react';
// import Searchbar from './Searchbar/Searchbar';
// import ImageGallery from './ImageGallery/ImageGallery';
// import PixabayAPI from 'api/api';

// const pixabayAPI = new PixabayAPI();

// export default class App extends Component {
//   state = {
//     imgValue: '',
//     gallery: [],
//   };
//   handleFormSubmit = imgValue => {
//     this.setState({ imgValue });
//   };

//   async componentDidUpdate(prevProp, prevState) {
//     if (this.state.imgValue !== prevState.imgValue) {
//       const { data } = await pixabayAPI.fetchPhotos();
//       console.log(data);
//       this.setState({ gallery: data.hits });
//     }
//   }

//   render() {
//     return (
//       <>
//         <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
//         <ImageGallery></ImageGallery>
//       </>
//     );
//   }
// }
