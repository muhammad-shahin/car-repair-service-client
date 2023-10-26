
import PropTypes from 'prop-types';

const PrimaryButton = ({ text }) => {
  return (
    <>
      <button className='rounded px-5 py-2 hover:text-[#FF3811] border border-transparent hover:border-[#FF3811] hover:bg-transparent text-white bg-[#FF3811] duration-500'>
        {text}
      </button>
    </>
  );
};

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PrimaryButton;
