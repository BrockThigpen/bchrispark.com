import React from 'react';
import PropTypes from 'prop-types'


const Button = ({label, handleButtonClick}) => {
  return (
    <div style={{
      width: '100px',
      border: 'solid 1px black',
      padding: '8px 8px',
      cursor: 'pointer',
      userSelect: 'none'
    }}
    onClick={handleButtonClick}
    >
      {label}
    </div>
  );
}

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func
}