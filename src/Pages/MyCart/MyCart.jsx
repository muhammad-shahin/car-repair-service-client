import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import PageHeader from '../../ReuseableComponents/PageHeader/PageHeader';
import { ImCross } from 'react-icons/im';

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/bookings?email=${user?.email}`, {
        withCredentials: true,
      })
      .then(function (response) {
        setCartData(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
      });
  }, [user]);

  return (
    <div>
      <PageHeader
        pageLocation='Home/My Cart'
        title='My Cart'
      />
      <div className='container mx-auto p-4 my-32'>
        <table className='min-w-full bg-white border divide-y divide-gray-200'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-center text-xl font-medium text-[#FF3811] uppercase tracking-wider'>
                Action
              </th>
              <th className='px-6 py-3 text-center text-xl font-medium text-[#FF3811] uppercase tracking-wider'>
                Image
              </th>
              <th className='px-6 py-3 text-center text-xl font-medium text-[#FF3811] uppercase tracking-wider'>
                Details
              </th>
              <th className='px-6 py-3 text-center text-xl font-medium text-[#FF3811] uppercase tracking-wider'>
                Price
              </th>
              <th className='px-6 py-3 text-center text-xl font-medium text-[#FF3811] uppercase tracking-wider'>
                Date
              </th>
              <th className='px-6 py-3 text-center text-xl font-medium text-[#FF3811] uppercase tracking-wider'>
                Order Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((cart) => (
              <tr key={cart._id}>
                <td className='px-6 py-3 text-center text-lg font-medium text-[#FF3811] tracking-wider'>
                  <button className='rounded-full bg-black p-4 text-white w-[48px] h-[48px] flex justify-center items-center  mx-auto'>
                    <ImCross className='text-[32px] text-white' />
                  </button>
                </td>
                {/* product or service image */}
                <td className='px-6 py-3 text-center text-lg font-medium text-[#FF3811] tracking-wider'>
                  <img
                    src={
                      cart.orderType === 'Service'
                        ? cart.serviceImage
                        : cart.productImage
                    }
                    className='w-[200px] h-[150px] rounded-lg object-cover mx-auto'
                  />
                </td>
                {/* products details */}
                <td className='px-6 py-3 text-center text-lg font-medium text-[#FF3811] tracking-wider'>
                  <div className='flex flex-col justify-center items-center  mx-auto'>
                    <p className='text-lg font-medium'>
                      {cart.orderType === 'Service'
                        ? cart.serviceTitle
                        : cart.productName}
                    </p>
                    <p className='text-sm font-medium text-gray-400'>
                      Order Type: {cart.orderType}
                    </p>
                  </div>
                </td>
                {/* products/service price */}
                <td className='px-6 py-3 text-center text-lg font-medium text-[#FF3811] tracking-wider'>
                  <div className='flex flex-col justify-center items-center  mx-auto'>
                    <p className='text-lg font-medium'>
                      $
                      {cart.orderType === 'Service'
                        ? cart.servicePrice
                        : cart.productName}
                    </p>
                  </div>
                </td>
                {/* products/service date */}
                <td className='px-6 py-3 text-center text-lg font-medium text-[#FF3811] tracking-wider'>
                  <div className='flex flex-col justify-center items-center  mx-auto'>
                    <p className='text-lg font-medium'>
                      {cart.orderType === 'Service'
                        ? cart.serviceDate
                        : cart.orderDate}
                    </p>
                  </div>
                </td>
                {/* products/service date */}
                <td className='px-6 py-3 text-center text-lg font-medium tracking-wider'>
                  <button className='flex justify-center items-center rounded-lg bg-[#FF3811] px-3 py-1 text-white mx-auto'>
                    {cart.orderStatus}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
