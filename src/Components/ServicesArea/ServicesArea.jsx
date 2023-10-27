import axios from 'axios';
import { useEffect, useState } from 'react';
import ServicesCard from '../../ReuseableComponents/Card/Card';
import OutlineButton from '../../ReuseableComponents/OutlineButton';
import { MdKeyboardArrowRight } from 'react-icons/md';

const ServicesArea = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    axios.get('/servicesArea.json').then((res) => {
      setServiceData(res.data);
    });
  }, []);
  return (
    <div className='my-10 '>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6'>
        {serviceData.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.serviceImage}
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
