import { useContext, useEffect, useState } from 'react';
import PageHeader from '../../ReuseableComponents/PageHeader/PageHeader';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';
import OutlineButton from '../../ReuseableComponents/OutlineButton';

const AdminDashboard = () => {
  const { user } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/allBookings`, {
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
        title='Admin Panel'
        pageLocation='Admin/Admin Panel'
      />
      <div className='mt-32'>
        <PageHeader
          title='Manage Order'
          pageLocation='Admin Panel/Manage Order'
        />
      </div>
      <div className='container mx-auto p-4 my-32'>
        <table className='min-w-full bg-white border divide-y divide-gray-200'>
          <thead>
            <tr>
              <th className='px-6 py-3 text-center text-xl font-medium text-[#FF3811] uppercase tracking-wider'>
                Email
              </th>
              <th className='px-6 py-3 text-center text-xl font-medium text-[#FF3811] uppercase tracking-wider'>
                Product/Service Name
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
              <th className='px-6 py-3 text-center text-xl font-medium text-[#FF3811] uppercase tracking-wider'>
                Update Status
              </th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((cart) => (
              <tr key={cart._id}>
                {/* product or service image */}
                <td className='px-6 py-3 text-center text-lg font-medium text-[#FF3811] tracking-wider'>
                  <p className='text-lg font-medium'>{cart.userEmail}</p>
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
                  <select
                    className='flex justify-center items-center rounded-lg bg-[#FF3811] px-3 py-2 text-white mx-auto text-center cursor-pointer'
                    name='orderStatus'
                  >
                    <option value={cart.orderStatus}>{cart.orderStatus}</option>
                    <option value='Processing'>Processing</option>
                    <option value='Confirm'>Confirm</option>
                    <option value='Canceled'>Canceled</option>
                  </select>
                </td>
                {/* update changes */}
                <td className='px-6 py-3 text-center text-lg font-medium text-[#FF3811] tracking-wider'>
                  <OutlineButton text='Update' />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
