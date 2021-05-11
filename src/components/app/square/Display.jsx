import React from 'react';
import PropTypes from 'prop-types';
// import '../app.css'

const Display = ({ colors, bgImage }) => {
  return (
    <div style={{
      border: '1px solid salmon',
      width:'300px',
      height: '300px',
      backgroundColor: colors,
      backgroundImage: bgImage,
      
    }}>
      hi
    </div>
  );
};

Display.propTypes = {
  colors: PropTypes.array.isRequired,
  bgImage: PropTypes.string.isRequired,
};

export default Display;
