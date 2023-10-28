import { useContext } from 'react';
import Input from '../../ReuseableComponents/Input/Input';
import PageHeader from '../../ReuseableComponents/PageHeader/PageHeader';
import { AuthContext } from '../../Provider/AuthProvider';

const Checkout = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <PageHeader
        title='Checkout'
        pageLocation='Home/Services Details/Checkout'
      />
      <div className='bg-gray-300 p-28 my-40'>
        <form className='max-w-[750px] mx-auto space-y-8'>
          <div className='flex lg:flex-row flex-col gap-6'>
            <Input
              name='fullName'
              placeholder={'Full Name'}
              type={'text'}
              value={user?.displayName}
              labelText='Full Name'
            />
            <Input
              name='email'
              placeholder={'Your Email'}
              type={'email'}
              value={user?.email}
              labelText='Email'
            />
          </div>
          <div className='flex lg:flex-row flex-col gap-6'>
            <Input
              name='serviceName'
              placeholder={'Service Name'}
              type={'text'}
              labelText='Service Name'
            />
            <Input
              name='serviceDate'
              placeholder={'When you need that service?'}
              type={'date'}
              labelText='Date of Service'
            />
          </div>
          <textarea
            placeholder={'Write Details About Your Car Problem'}
            className='px-5 py-2 rounded text-[18px] outline-none w-full'
            name=''
            id=''
            cols='30'
            rows='10'
            required
          ></textarea>
          <input
            type='submit'
            value='Book A Schedule'
            className='px-5 py-2 rounded text-[18px] outline-none w-full bg-[#FF3811] font-medium text-white cursor-pointer '
          />
        </form>
      </div>
    </div>
  );
};

export default Checkout;
