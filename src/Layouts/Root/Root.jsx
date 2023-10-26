import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Root = () => {
  return (
    <main className='max-w-[1240px] mx-auto px-[5%] xl:px-0'>
      <Navbar />
      <Outlet />
    </main>
  );
};

export default Root;
