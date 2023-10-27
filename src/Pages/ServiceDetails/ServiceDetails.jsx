/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom';
import PageHeader from '../../ReuseableComponents/PageHeader/PageHeader';
import PrimaryButton from '../../ReuseableComponents/PrimaryButton';

const ServiceDetails = () => {
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
            src='https://i.ibb.co/sQCFMZF/car-repair-service-2.jpg'
          />
        </div>
        <div className='w-fit mx-auto mt-6'>
          <PrimaryButton
            text='Book Now'
            handleOnClick={handleOnBookNowClick}
          />
        </div>
        <div className='my-10'>
          <h1 className='text-5xl font-bold text-center'>
            Unique Car Engine Service
          </h1>
          <p className='text-lg  mx-auto lg:mx-0 mt-6 capitalize text-center'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p className='text-lg  mx-auto lg:mx-0 mt-6 capitalize text-center'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
          <p className='text-lg  mx-auto lg:mx-0 mt-6 capitalize text-center'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
