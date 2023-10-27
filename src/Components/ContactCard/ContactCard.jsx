import locationIcon from '../../assets/icons/location.svg';
import calenderIcon from '../../assets/icons/calendar.svg';
import phoneIcon from '../../assets/icons/phone.svg';

const ContactCard = () => {
  return (
    <div className='bg-[#151515] rounded-lg lg:px-16 lg:py-16 px-5 py-6 flex justify-evenly items-center flex-wrap gap-8'>
      {/* timing */}
      <div className='flex justify-center items-center gap-4'>
        <img
          className='w-[32px]'
          src={calenderIcon}
        />
        <div className='text-white'>
          <p>We are open monday-friday</p>
          <p className='text-2xl font-bold'>7:00 am - 9:00 pm</p>
        </div>
      </div>
      {/* phone */}
      <div className='flex justify-center items-center gap-4'>
        <img
          className='w-[32px]'
          src={phoneIcon}
        />
        <div className='text-white'>
          <p>Have a question?</p>
          <p className='text-2xl font-bold'>+2546 251 2658</p>
        </div>
      </div>
      {/* location */}
      <div className='flex justify-center items-center gap-4'>
        <img
          className='w-[32px]'
          src={locationIcon}
        />
        <div className='text-white'>
          <p>Need a repair? our address</p>
          <p className='text-2xl font-bold'>Liza Street, New York</p>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
