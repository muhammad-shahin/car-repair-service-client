import { useEffect, useState } from 'react';
import Slider from '../../ReuseableComponents/Slider/Slider';
import axios from 'axios';

const Home = () => {
  const [caurosolData, setCaurosolData] = useState([]);
  useEffect(() => {
    axios
      .get('/homeCaurosol.json')
      .then((res) => {
        console.log(res.data);
        setCaurosolData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className='my-10'>
      <Slider sliderCount={caurosolData.length}>
        {caurosolData.map((slide, index) => (
          <div
            key={index}
            className='slide-item min-w-full'
          >
            <img
              className=''
              src={slide.carouselImage}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
