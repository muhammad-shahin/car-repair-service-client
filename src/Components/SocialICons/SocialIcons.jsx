

const SocialIcons = () => {
  return (
    <div className='flex justify-center items-center gap-3'>
      <div className='rounded-full backdrop-blur-[25px] flex justify-center items-center gap-2 p-1'>
        <img src='https://i.ibb.co/hcFVTsQ/facebook.png' />
      </div>
      <div className='rounded-full backdrop-blur-[25px] flex justify-center items-center gap-2 p-1 relative'>
        <img src='https://i.ibb.co/VHqHMCh/ig-bg.png' />
        <img
          className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex'
          src='https://i.ibb.co/xgRmkjP/instagram.png'
        />
      </div>
      <div className='rounded-full backdrop-blur-[25px] flex justify-center items-center gap-2 p-1'>
        <img src='https://i.ibb.co/J3NjNnx/linkedin.png' />
      </div>
      <div className='rounded-full backdrop-blur-[25px] flex justify-center items-center gap-2 p-1'>
        <img src='https://i.ibb.co/hHP8GQT/twitter.png' />
      </div>
    </div>
  );
};

export default SocialIcons;
