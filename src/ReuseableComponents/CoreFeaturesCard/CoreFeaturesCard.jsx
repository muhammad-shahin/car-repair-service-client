import PropTypes from 'prop-types';


const CoreFeaturesCard = ({ title, logo }) => {
  return (
    <div className='rounded-lg border-2 flex justify-center items-center p-8 flex-col gap-4'>
      <img src={logo} />
      <h4 className='font-bold text-xl text-center'>{title}</h4>
    </div>
  );
};

CoreFeaturesCard.propTypes = {
  title: PropTypes.string.isRequired,
};

export default CoreFeaturesCard;
