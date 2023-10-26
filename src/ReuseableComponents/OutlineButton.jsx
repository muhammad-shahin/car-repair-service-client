import PropTypes from 'prop-types';

const OutlineButton = ({ text, color }) => {
  return (
    <>
      <button
        className={`rounded px-5 py-2 ${
          color === 'white'
            ? 'text-[#fff] border-[#fff]'
            : 'text-[#FF3811] border-[#FF3811] '
        } border bg-transparent hover:text-white hover:border-[#FF3811] hover:bg-[#FF3811] duration-500`}
      >
        {text}
      </button>
    </>
  );
};

OutlineButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default OutlineButton;
