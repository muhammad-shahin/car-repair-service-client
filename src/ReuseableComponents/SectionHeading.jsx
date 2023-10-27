import PropTypes from 'prop-types';

const SectionHeading = ({ sectionName, sectionTitle, position }) => {
  return (
    <div
      className={` space-y-3 ${
        position === 'left' ? 'text-left' : 'text-center'
      }  `}
    >
      <p className='text-[#FF3811] font-medium text-lg'>{sectionName}</p>
      <h2 className='text-4xl font-bold  mx-auto'>{sectionTitle}</h2>
    </div>
  );
};

SectionHeading.propTypes = {
  sectionName: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default SectionHeading;
