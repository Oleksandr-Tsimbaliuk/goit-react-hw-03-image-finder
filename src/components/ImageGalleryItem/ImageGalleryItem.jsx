import React from 'react';
import { StyledImageGalleryItem } from './Styled.js';

function ImageGalleryItem({ smallImg, largeImg, tags, onClick }) {
  return (
    <StyledImageGalleryItem className="gallery-item">
      <img src={smallImg} alt={tags} onClick={() => onClick(largeImg, tags)} />
    </StyledImageGalleryItem>
  );
}

export default ImageGalleryItem;
