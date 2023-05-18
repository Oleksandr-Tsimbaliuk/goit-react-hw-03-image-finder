import React from 'react';
import { StyledButton } from './Styled';

function Button({ handleLoadMore }) {
  return <StyledButton onClick={handleLoadMore}>ButtonLoadMore</StyledButton>;
}

export default Button;
