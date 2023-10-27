import detailsBanner from '../../assets/images/banner/4.jpg';
import PropTypes from 'prop-types';

const PageHeader = ({
  title = 'Services Details',
  pageLocation = 'Home/Services Details',
}) => {
  return (
    <div className='relative rounded-lg lg:max-h-[250px] max-h-[150px] my-10'>
      <div className='bg-[#FF3811] w-fit px-2 py-1 absolute top-0 left-[50%] translate-x-[-50%] translate-y-[-50%] '>
        <p className='text-white'>{pageLocation}</p>
      </div>
      <h1 className='text-4xl text-white font-semibold mx-auto text-center pt-[10%]'>
        {title}
      </h1>
      <div className='absolute top-0 left-0 w-full z-[-100]'>
        <img
          className='rounded-lg lg:max-h-[250px] max-h-[150px] w-full object-cover object-center'
          src={detailsBanner}
        />
        <div className='overlay rounded-lg'></div>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string,
  pageLocation: PropTypes.string,
};

export default PageHeader;
