import PropTypes from 'prop-types';

const OutlineButton = ({ text }) => {
  return (
    <>
      <button className='rounded px-5 py-2 text-[#FF3811] border border-[#FF3811] bg-transparent hover:text-white hover:bg-[#FF3811] duration-500'>
        {text}
      </button>
    </>
  );
};

OutlineButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default OutlineButton;
