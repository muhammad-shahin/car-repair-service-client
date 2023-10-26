import { useEffect, useState } from 'react';
import Slider from '../../ReuseableComponents/Slider/Slider';
import axios from 'axios';
import PrimaryButton from '../../ReuseableComponents/PrimaryButton';
import OutlineButton from '../../ReuseableComponents/OutlineButton';

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
            // style={{ backgroundImage: `url(${slide.carouselImage})` }}
            className='slide-item min-w-full lg:h-[70vh] slide-item w-full h-[40vh] md:h-[80vh] relative'
          >
            <div className='absolute w-full h-full z-[-10]'>
              <img
                className='h-full object-cover w-full'
                src={slide.carouselImage}
              />
              {/* overlay effects */}
              <div className='overlay'></div>
            </div>
            <div className='lg:px-20 px-5 lg:py-[15%] py-4 space-y-2 lg:space-y-6'>
              <h1 className='text-white lg:text-6xl text-2xl max-w-[460px]'>
                {slide.title}
              </h1>
              <p className='text-white  max-w-[460px]'>
                {slide.shortDescription}
              </p>
              <div className='flex justify-start items-center flex-wrap gap-3'>
                <PrimaryButton text='Learn More' />
                <OutlineButton
                  text='Latest Project'
                  color='white'
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;
