import PropTypes from 'prop-types';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ServicesCard = ({ service }) => {
  const { serviceTitle, servicePrice, serviceImage } = service;
  return (
    <div className='border-2 rounded-lg p-6 w-fit cursor-pointer'>
      <img
        src={serviceImage}
        className='w-[315px] rounded-lg'
      />
      <div className='space-y-4 mt-4'>
        <h3 className='text-2xl font-bold'>{serviceTitle}</h3>
        <div className='text-lg font-semibold text-[#FF3811] flex justify-between items-center'>
          <p>Price : ${servicePrice}</p>
          <MdKeyboardArrowRight className='text-[32px] hover:scale-[1.4] duration-500' />
        </div>
      </div>
    </div>
  );
};

ServicesCard.propTypes = {
  service: PropTypes.object.isRequired,
};

export default ServicesCard;
