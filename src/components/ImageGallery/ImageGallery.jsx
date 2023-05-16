import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { StyledImageGallery } from './Styled.js';

function ImageGallery({ gallery, onClick }) {
  return (
    <StyledImageGallery>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            tags={tags}
            onClick={onClick}
          ></ImageGalleryItem>
        );
      })}
    </StyledImageGallery>
  );
}

export default ImageGallery;
