import { Link, NavLink } from 'react-router-dom';
import logo from '.././../assets/logo.svg';
import { useContext, useState } from 'react';
import { Fade as Hamburger } from 'hamburger-react';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { PiMagnifyingGlassLight } from 'react-icons/pi';

import './Navbar.css';
import OutlineButton from '../../ReuseableComponents/OutlineButton';
import { AuthContext } from '../../Provider/AuthProvider';
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const { user, logoutUser } = useContext(AuthContext);
  console.log(user);
  return (
    <nav className='flex justify-between items-center pt-10'>
      {/* logo */}
      <div>
        <Link to='/'>
          <img
            src={logo}
            className='w-[4rem] lg:w-[6rem]'
          />
        </Link>
      </div>
      {/* nav menu */}
      <ul
        className={` lg:static fixed top-[100px] ${
          isOpen ? 'right-0' : 'right-[-100%]'
        } lg:h-auto h-screen lg:w-auto w-[50%] flex lg:flex-row flex-col backdrop-blur-[25px] bg-slate-200 lg:bg-transparent lg:px-5 py-2 justify-start lg:justify-center items-center lg:gap-10 gap-8 duration-700 z-[100] lg:pt-2 pt-10`}
      >
        <li
          className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
          onClick={() => {
            setOpen(false);
          }}
        >
          <NavLink to='/'>Home</NavLink>
        </li>
        <li
          className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
          onClick={() => {
            setOpen(false);
          }}
        >
          <NavLink to='/about'>About</NavLink>
        </li>
        <li
          className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
          onClick={() => {
            setOpen(false);
          }}
        >
          <NavLink to='/services'>Services</NavLink>
        </li>
        <li
          className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
          onClick={() => {
            setOpen(false);
          }}
        >
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li
          className='text-black font-medium text-[16px] hover:scale-[1.1] duration-500'
          onClick={() => {
            setOpen(false);
          }}
        >
          <NavLink to='/login'>Login</NavLink>
        </li>
      </ul>
      {/* cart icons */}
      <div className='flex justify-center items-center gap-3'>
        <HiOutlineShoppingBag className='text-2xl md:block hidden' />
        <PiMagnifyingGlassLight className='text-2xl md:block hidden mr-3' />
        <OutlineButton
          handleClick={logoutUser}
          text={`${user ? 'Sign Out' : 'Appointment'}`}
        />
        {/* hamburger menu */}
        <div className='lg:hidden'>
          <Hamburger
            color='#000'
            toggled={isOpen}
            toggle={setOpen}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
