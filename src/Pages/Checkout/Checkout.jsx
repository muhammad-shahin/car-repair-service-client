import { useContext } from 'react';
import Input from '../../ReuseableComponents/Input/Input';
import PageHeader from '../../ReuseableComponents/PageHeader/PageHeader';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLoaderData, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const Checkout = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const serviceData = useLoaderData();
  const { serviceTitle, serviceImage, servicePrice } = serviceData;
  const handleServiceCheckout = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceDate = form.serviceDate.value;
    const serviceDetails = form.serviceDetails.value;
    const newBooking = {
      orderType: 'Service',
      orderStatus: 'Pending',
      userEmail: user.email,
      serviceTitle,
      servicePrice,
      serviceImage,
      serviceDate,
      serviceDetails,
    };
    axios
      .post('http://localhost:5000/serviceBooking', newBooking)
      .then((response) => {
        if (response.data.insertedId) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title:
              'You Successfully Booked One Service. You Can Check Your Booking Status In Your Cart',
            showConfirmButton: true,
            confirmButtonText: 'Go To Cart',
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/myCart');
              form.reset();
            }
          });
        }
      })
      .catch(function (error) {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Failed To Book Your Service',
          text: `${error}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };
  return (
    <div>
      <PageHeader
        title='Checkout'
        pageLocation='Home/Services Details/Checkout'
      />
      <div className='bg-gray-300 p-10 lg:p-28 my-40'>
        <form
          onSubmit={handleServiceCheckout}
          className='max-w-[750px] mx-auto space-y-8'
        >
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
              name='serviceTitle'
              placeholder={'Service Name'}
              type={'text'}
              labelText='Service Name'
              value={serviceTitle}
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
            name='serviceDetails'
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
