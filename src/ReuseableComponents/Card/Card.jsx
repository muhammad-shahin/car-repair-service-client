import PropTypes from 'prop-types';

const ServicesCard = ({ image, children, handleOnClick }) => {
  return (
    <div
      className='border-2 rounded-lg p-6 cursor-pointer'
      onClick={handleOnClick}
    >
      <img
        src={image}
        className='max-w-full max-h-[200px] mx-auto object-contain rounded-lg'
      />
      {children}
    </div>
  );
};

ServicesCard.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
  handleOnClick: PropTypes.func,
};

export default ServicesCard;
