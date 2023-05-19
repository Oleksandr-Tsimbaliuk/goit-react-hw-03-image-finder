import React, { Component } from 'react';
import { StyledOverlay } from './Styled';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <StyledOverlay onClick={this.handleOverlayClick}>
        <div className="Modal">{this.props.children}</div>
      </StyledOverlay>
    );
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
  };
}
