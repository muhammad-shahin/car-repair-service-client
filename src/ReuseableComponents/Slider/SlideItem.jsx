import React from 'react';
import PropTypes from 'prop-types';

const SlideItem = ({ slide }) => {
  const { title, carouselImage, shortDescription } = slide;
  return <div></div>;
};

SlideItem.propTypes = {
  slide: PropTypes.object.isRequired,
};

export default SlideItem;
