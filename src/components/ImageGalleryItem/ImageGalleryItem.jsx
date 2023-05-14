import React from 'react';
import { StyledImageGalleryItem } from './Styled.js';

function ImageGalleryItem({ smallImg, largeImg, tags }) {
  return (
    <StyledImageGalleryItem className="gallery-item">
      <img src={smallImg} alt={tags} />
    </StyledImageGalleryItem>
  );
}

export default ImageGalleryItem;
