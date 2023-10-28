/* eslint-disable react/no-unescaped-entities */
import { useLoaderData, useNavigate } from 'react-router-dom';
import PageHeader from '../../ReuseableComponents/PageHeader/PageHeader';
import PrimaryButton from '../../ReuseableComponents/PrimaryButton';

const ServiceDetails = () => {
  const serviceData = useLoaderData();
  const navigate = useNavigate();
  const handleOnBookNowClick = () => {
    navigate('/checkout');
  };
  return (
    <div>
      <PageHeader />
      <div className='my-36'>
        <div className=''>
          <img
            className='rounded-lg lg:w-[70%] lg:h-[400px] mx-auto object-cover'
            src={serviceData.serviceImage}
          />
        </div>
        <div className='w-fit mx-auto mt-6 space-x-4'>
          <PrimaryButton
            text='Book Now'
            handleOnClick={handleOnBookNowClick}
          />
          <p className='text-lg font-semibold text-[#FF3811] text-center'>
            Price : ${serviceData.servicePrice}
          </p>
        </div>
        <div className='my-10'>
          <h1 className='text-5xl font-bold text-center'>
            {serviceData.serviceTitle}
          </h1>
          <p className='text-lg  mx-auto lg:mx-0 mt-6 capitalize text-center'>
            {serviceData.serviceDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
