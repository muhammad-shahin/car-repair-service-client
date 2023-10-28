import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import Input from '../../ReuseableComponents/Input/Input';
import sideImage from '../../assets/images/login/login.svg';
import { auth } from '../../Configs/firebase.config';
import { useState } from 'react';
import Modal from '../../ReuseableComponents/Modal';
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [modalContent, setModalContent] = useState({
    modalStatus: false,
    title: 'Please Wait',
    message: 'Creating Your Account',
  });
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if (password.length >= 6) {
      setModalContent({ ...modalContent, modalStatus: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name,
          })
            .then(() => {
              console.log(user);
              setModalContent({
                modalStatus: true,
                title: 'Successfully Create Account',
                message:
                  'Successfully Created Account. Now Redirecting to Login Page',
              });
              setTimeout(() => {
                setModalContent({ ...modalContent, modalStatus: false });
                navigate('/login');
              }, 3000);
            })
            .catch((error) => {
              console.log(error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setModalContent({
            modalStatus: true,
            title: 'Failed to Create Account',
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
        <h1 className='font-bold text-4xl text-center'>Create Your Account</h1>
        <form
          onSubmit={handleSignUp}
          className='max-w-[350px] mx-auto space-y-6'
        >
          <Input
            name='name'
            labelText='Name'
            placeholder='Enter Full Name'
            type='text'
          />
          <Input
            name='email'
            labelText='Email'
            placeholder='Enter Your Email'
            type='text'
          />
          <Input
            name='password'
            labelText='Password'
            placeholder='Enter 6 Digit Password'
            type='password'
          />
          <input
            type='submit'
            value='Create Account'
            className='px-5 py-2 rounded text-[18px] outline-none w-full bg-[#FF3811] font-medium text-white cursor-pointer '
          />
        </form>
        <div>
          <p className='text-[18px] font-medium text-center mt-4'>
            Already have an account? {''}
            <Link
              to={'/login'}
              className='text-blue-500 underline'
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <Modal modalContent={modalContent} />
    </div>
  );
};

export default SignUp;
