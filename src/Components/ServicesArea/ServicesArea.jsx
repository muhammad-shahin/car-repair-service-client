import axios from 'axios';
import { useEffect, useState } from 'react';
import ServicesCard from '../../ReuseableComponents/Card/Card';
import OutlineButton from '../../ReuseableComponents/OutlineButton';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ServicesArea = () => {
  const navigate = useNavigate();
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:5000/services').then((res) => {
      setServiceData(res.data);
    });
  }, []);

  const handleOnCardClick = (id) => {
    navigate(`/servicesDetails/${id}`);
  };
  return (
    <div className='my-10 '>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {serviceData.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.serviceImage}
            handleOnClick={() => {
              handleOnCardClick(service._id);
            }}
          >
            <div className='space-y-4 mt-4'>
              <h3 className='text-2xl font-bold'>{service.serviceTitle}</h3>
              <div className='text-lg font-semibold text-[#FF3811] flex justify-between items-center'>
                <p>Price : ${service.servicePrice}</p>
                <MdKeyboardArrowRight className='text-[32px] hover:scale-[1.4] duration-500' />
              </div>
            </div>
          </ServicesCard>
        ))}
      </div>
      <div className=' w-fit mx-auto my-10'>
        <OutlineButton text='More Services' />
      </div>
    </div>
  );
};

export default ServicesArea;
