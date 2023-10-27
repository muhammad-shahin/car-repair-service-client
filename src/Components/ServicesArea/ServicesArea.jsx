import axios from 'axios';
import { useEffect, useState } from 'react';
import ServicesCard from '../../ReuseableComponents/ServicesCard/ServicesCard';
import OutlineButton from '../../ReuseableComponents/OutlineButton';

const ServicesArea = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    axios.get('/servicesArea.json').then((res) => {
      console.log(res.data);
      setServiceData(res.data);
    });
  }, []);
  return (
    <div className='my-10 '>
      <div className='flex justify-between flex-wrap gap-6'>
        {serviceData.map((service, index) => (
          <ServicesCard
            key={index}
            service={service}
          />
        ))}
      </div>
      <div className=' w-fit mx-auto my-10'>
        <OutlineButton text='More Services' />
      </div>
    </div>
  );
};

export default ServicesArea;
