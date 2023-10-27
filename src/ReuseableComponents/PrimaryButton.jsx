import PropTypes from 'prop-types';

const PrimaryButton = ({ text, handleOnClick }) => {
  return (
    <>
      <button
        className='rounded px-5 py-2 hover:text-[#FF3811] border border-transparent hover:border-[#FF3811] hover:bg-transparent text-white bg-[#FF3811] duration-500'
        onClick={handleOnClick}
      >
        {text}
      </button>
    </>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default PrimaryButton;
