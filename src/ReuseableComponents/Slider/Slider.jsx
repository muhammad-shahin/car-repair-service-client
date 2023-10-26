import { useState } from 'react';
import './Slider.css';
import PropTypes from 'prop-types';
import { BsArrowRightShort } from 'react-icons/bs';

const Slider = ({ children, sliderCount }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(Math.max(currentSlide - 1, 0));
  };

  const nextSlide = () => {
    setCurrentSlide(Math.min(currentSlide + 1, sliderCount - 1));
  };
  console.log(sliderCount);
  return (
    <div className='slider rounded-lg flex justify-center items-center flex-col h-[50vh] lg:h-[70vh] max-w-[1140px] mx-auto relative'>
      <div className='slider-content w-full overflow-hidden bg-slate-300 rounded-lg'>
        <div
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          className={`slide flex duration-300 transition-transform translate-x-[-100%]`}
        >
          {children}
        </div>
      </div>
      <div className='flex justify-center items-center gap-3 absolute bottom-[15vw] right-[1vw] scale-[0.6] md:scale-[1]'>
        <div className='rounded-full bg-slate-300 bg-opacity-[0.29] p-2'>
          <BsArrowRightShort
            className='text-[32px] text-white cursor-pointer rotate-180'
            onClick={prevSlide}
          />
        </div>
        <div className='rounded-full bg-[#FF3811] p-2'>
          <BsArrowRightShort
            className='text-[32px] text-white cursor-pointer'
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
};

Slider.propTypes = {
  sliderCount: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
};

export default Slider;
