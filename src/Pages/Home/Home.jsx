/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from 'react';
import Slider from '../../ReuseableComponents/Slider/Slider';
import axios from 'axios';
import PrimaryButton from '../../ReuseableComponents/PrimaryButton';
import OutlineButton from '../../ReuseableComponents/OutlineButton';
import SectionHeading from '../../ReuseableComponents/SectionHeading';
import aboutImage1 from '../../assets/images/about_us/person.jpg';
import aboutImage2 from '../../assets/images/about_us/parts.jpg';
import ServicesArea from '../../Components/ServicesArea/ServicesArea';
import ContactCard from '../../Components/ContactCard/ContactCard';
import Products from '../../Components/Products/Products';
import TeamCard from '../../Components/TeamsCard/TeamCard';
import CoreFeaturesCard from '../../ReuseableComponents/CoreFeaturesCard/CoreFeaturesCard';
import team from '../../assets/icons/Expert Team.svg';
import support from '../../assets/icons/247 Support.svg';
import equipment from '../../assets/icons/Best Equipment.svg';
import fast from '../../assets/icons/Timely Delivery (2).svg';
import quote from '../../assets/icons/quote.svg';
import StarRating from '../../Components/StarRating/StarRating';

const Home = () => {
  const [caurosolData, setCaurosolData] = useState([]);
  useEffect(() => {
    axios
      .get('/homeCaurosol.json')
      .then((res) => {
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
            <div className='lg:px-20 px-5 md:py-[15%] py-4 space-y-2 lg:space-y-6'>
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

      {/* about us section */}
      <div className='flex lg:justify-between justify-center lg:flex-row-reverse flex-col-reverse items-center my-20 gap-4'>
        <div className='text-left max-w-[490px] space-y-5'>
          <SectionHeading
            sectionName='About'
            sectionTitle='We are qualified & of experience in this field'
            position={'left'}
          />
          <p className='text-lg leading-9'>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <p className='text-lg leading-9'>
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>
          <PrimaryButton text='Get More Info' />
        </div>
        {/* right side content */}
        <div className='relative my-20 tex'>
          <div className='relative'>
            <img
              src={aboutImage1}
              className='rounded-lg lg:w-[460px] lg:h-[470px] object-left object-cover'
            />
            <img
              src={aboutImage2}
              className='absolute bottom-[-150px] right-[-120px] lg:w-[350px] lg:h-[370px] object-cover border-[10px] rounded-lg border-white xl:block hidden'
            />
          </div>
        </div>
      </div>

      {/* our service area section  */}
      <div className='my-28'>
        <SectionHeading
          sectionName='Services'
          sectionTitle='Our Services Area'
        />
        <p className='text-lg max-w-[450px] mx-auto text-center mt-6 capitalize'>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>

        <div>
          <ServicesArea />
        </div>
      </div>

      {/* contacts card section */}
      <div>
        <ContactCard />
      </div>

      {/* products section */}
      <div className='my-20'>
        <SectionHeading
          sectionName='Popular Products'
          sectionTitle='Browse Our Products'
        />
        <p className='text-lg max-w-[450px] mx-auto text-center mt-6 capitalize'>
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
        <Products />
      </div>

      {/* teams section */}
      <div className='my-20'>
        <SectionHeading
          sectionName='Team'
          sectionTitle='Meet Our Team'
        />
        <p className='text-lg max-w-[450px] mx-auto text-center mt-6 capitalize'>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
        <TeamCard />
      </div>

      {/* why chose us section */}
      <div className='my-20'>
        <SectionHeading
          sectionName='Core Features'
          sectionTitle='Why Choose Us'
        />
        <p className='text-lg max-w-[450px] mx-auto text-center mt-6 capitalize'>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
        <div className='flex justify-center items-center gap-4 my-10 flex-wrap'>
          <CoreFeaturesCard
            title='Expert Team'
            logo={team}
          />
          <CoreFeaturesCard
            title='Timely Delivery'
            logo={fast}
          />
          <CoreFeaturesCard
            title='24/7 Support'
            logo={support}
          />
          <CoreFeaturesCard
            title='Best Equipment'
            logo={equipment}
          />
          <CoreFeaturesCard
            title='100% Guaranty'
            logo={support}
          />
        </div>
      </div>

      {/* testimonial Section */}
      <div>
        <SectionHeading
          sectionName='Testimonials'
          sectionTitle='What Customer Says'
        />
        <p className='text-lg max-w-[450px] mx-auto text-center mt-6 capitalize'>
          The majority have suffered alteration in some form, by injected
          humour, or randomised words which don&apos;t look even slightly
          believable.
        </p>
        {/* testimonial cards */}
        <div className='my-10 flex justify-between items-center'>
          <div className='border-2 rounded-lg p-12 w-fit'>
            <div className='flex justify-between items-center gap-20'>
              <div className='flex justify-center items-center gap-3'>
                <img
                  src='https://i.ibb.co/JBf16h6/j-BLACK-BLENDED-KAMEEZ-SHALWAR2.webp'
                  className='w-[60px] h-[60px] object-top object-cover rounded-full'
                />
                <div>
                  <p className='text-2xl font-bold'>Muhammad Shahin</p>
                  <p className='text-xl font-medium text-gray-300'>
                    Businessman
                  </p>
                </div>
              </div>
              <img src={quote} />
            </div>
            <div className='space-y-3'>
              <p className='text-lg max-w-[450px] mx-auto text-center mt-6 capitalize'>
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don&apos;t look even slightly
                believable.
              </p>
              <StarRating initialRating={5} />
            </div>
          </div>
          <div className='border-2 rounded-lg p-12 w-fit'>
            <div className='flex justify-between items-center gap-20'>
              <div className='flex justify-center items-center gap-3'>
                <img
                  src='https://i.ibb.co/W5YRR9b/addidas-hoddie-joggers.jpg'
                  className='w-[60px] h-[60px] object-top object-cover rounded-full'
                />
                <div>
                  <p className='text-2xl font-bold'>Motin Vai</p>
                  <p className='text-xl font-medium text-gray-300'>
                    Businessman
                  </p>
                </div>
              </div>
              <img src={quote} />
            </div>
            <div className='space-y-3'>
              <p className='text-lg max-w-[450px] mx-auto text-center mt-6 capitalize'>
                The majority have suffered alteration in some form, by injected
                humour, or randomised words which don&apos;t look even slightly
                believable.
              </p>
              <StarRating initialRating={5} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
