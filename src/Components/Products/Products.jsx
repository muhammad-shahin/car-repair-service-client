import axios from 'axios';
import { useEffect, useState } from 'react';
import OutlineButton from '../../ReuseableComponents/OutlineButton';
import ServicesCard from '../../ReuseableComponents/Card/Card';
import { MdKeyboardArrowRight } from 'react-icons/md';
import StarRating from '../StarRating/StarRating';
import PrimaryButton from '../../ReuseableComponents/PrimaryButton';

const Products = () => {
  const [productsData, setProductsData] = useState([]);
  useEffect(() => {
    axios.get('/carRepairProducts.json').then((res) => {
      console.log(res.data);
      setProductsData(res.data);
    });
  }, []);
  return (
    <div className='my-10 '>
      <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 '>
        {productsData.map((product, index) => (
          <ServicesCard
            key={index}
            image={product.productImage}
          >
            <div className='space-y-4 mt-4 text-center'>
              <h3 className='text-2xl font-bold'>{product.productName}</h3>
              <p className='text-lg font-semibold text-[#FF3811]'>
                Price : ${product.productPrice}
              </p>
              <StarRating initialRating={product.productRating} />
              <PrimaryButton text='Order Now' />
            </div>
          </ServicesCard>
        ))}
      </div>
      <div className=' w-fit mx-auto my-10'>
        <OutlineButton text='More Products' />
      </div>
    </div>
  );
};

export default Products;
