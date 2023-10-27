import Input from '../../ReuseableComponents/Input/Input';
import sideImage from '../../assets/images/login/login.svg';

const SignUp = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
  };
  return (
    <div className='flex justify-center items-center gap-20 w-full h-screen'>
      {/* left side image */}
      <div>
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
      </div>
    </div>
  );
};

export default SignUp;
