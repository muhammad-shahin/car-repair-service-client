import axios from 'axios';
import { useEffect, useState } from 'react';
import ServicesCard from '../../ReuseableComponents/ServicesCard/ServicesCard';

const ServicesArea = () => {
  const [serviceData, setServiceData] = useState([]);
  useEffect(() => {
    axios.get('/servicesArea.json').then((res) => {
      console.log(res.data);
      setServiceData(res.data);
    });
  }, []);
  return (
    <div className='my-10 flex justify-center flex-wrap gap-6'>
      {serviceData.map((service, index) => (
        <ServicesCard
          key={index}
          service={service}
        />
      ))}
    </div>
  );
};

export default ServicesArea;
