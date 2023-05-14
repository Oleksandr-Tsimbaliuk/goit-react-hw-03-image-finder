import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react';
import { StyledImageGallery } from './Styled.js';

function ImageGallery({ gallery }) {
  return (
    <StyledImageGallery>
      {gallery.map(({ id, webformatURL, largeImageURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            smallImg={webformatURL}
            largeImg={largeImageURL}
            tags={tags}
          ></ImageGalleryItem>
        );
      })}
    </StyledImageGallery>
  );
}

export default ImageGallery;
