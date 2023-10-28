/* eslint-disable react/no-unescaped-entities */
import { signInWithEmailAndPassword } from 'firebase/auth';
import Input from '../../ReuseableComponents/Input/Input';
import sideImage from '../../assets/images/login/login.svg';
import { auth } from '../../Configs/firebase.config';
import { useState } from 'react';
import Modal from '../../ReuseableComponents/Modal';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState({
    modalStatus: false,
    title: 'Please Wait',
    message: 'Login to Your Account',
  });
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length >= 6) {
      setModalContent({ ...modalContent, modalStatus: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setModalContent({
            modalStatus: true,
            title: 'Successfully Logged In',
            message:
              'Successfully Logged In Account. Now Redirecting to your Last State',
          });
          setTimeout(() => {
            setModalContent({ ...modalContent, modalStatus: false });
            navigate(location?.state ? location?.state : '/');
          }, 3000);
        })
        .catch((error) => {
          const errorMessage = error.message;
          setModalContent({
            modalStatus: true,
            title: 'Failed to Logged In Account',
            message: errorMessage,
          });
          setTimeout(() => {
            setModalContent({ ...modalContent, modalStatus: false });
          }, 3000);
        });
    } else {
      setModalContent({
        modalStatus: true,
        title: 'Password Invalid',
        message: 'Password must be more than 6 characters',
      });
      setTimeout(() => {
        setModalContent({ ...modalContent, modalStatus: false });
      }, 3000);
    }
  };
  return (
    <div className='flex justify-center items-center gap-20 w-full h-screen'>
      {/* left side image */}
      <div className='hidden lg:block'>
        <img src={sideImage} />
      </div>
      {/* right side sign up form  */}
      <div className='border-2 rounded-lg p-10 space-y-8'>
        <h1 className='font-bold text-4xl text-center'>
          Login To Your Account
        </h1>
        <form
          onSubmit={handleSignIn}
          className='max-w-[350px] mx-auto space-y-6'
        >
          <Input
            name='email'
            labelText='Email'
            placeholder='Enter Your Email'
            type='text'
          />
          <Input
            name='password'
            labelText='Password'
            placeholder='Enter your Password'
            type='password'
          />
          <input
            type='submit'
            value='Login'
            className='px-5 py-2 rounded text-[18px] outline-none w-full bg-[#FF3811] font-medium text-white cursor-pointer '
          />
        </form>
        <div>
          <p className='text-[18px] font-medium text-center mt-4'>
            Don't have an account? {''}
            <Link
              to={'/sign-up'}
              className='text-blue-500 underline'
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
      <Modal modalContent={modalContent} />
    </div>
  );
};

export default Login;
