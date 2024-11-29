import { useState } from 'react';
import Image from './Image';


const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:20 flex justify-around items-center'>
      {/* LOGO */}
      <div className='flex items-center gap-2 text-2xl font-bold'>
        <Image src={'/logo.png'} alt='logo' w={20} h={40} />
        <span>Dev blog</span>
      </div>
      {/* MObile Menu */}
      <div className='md:hidden'>
        <div
          className='text-2xl cursor-pointer'
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'X' : '≡'}
        </div>
        {/* MObile link list */}
        <div
          className={`w-full h-screen flex flex-col justify-center items-center gap-8 font-medium text-lg absolute top-16 ${
            open ? '-right-0' : '-right-full'
          } transition-all ease-in `}
        >
          <a href=''>Home</a>
          <a href=''>Trending</a>
          <a href=''>Most Popular</a>
          <a href=''>About</a>
          <a href=''>
            <button className='px-8 py-2 bg-blue-800 text-white rounded-3xl '>
              Login 👋
            </button>
          </a>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12'>
        <a href=''>Home</a>
        <a href=''>Trending</a>
        <a href=''>Most Popular</a>
        <a href=''>About</a>
        <a href=''>
          <button className='px-8 py-2 bg-blue-800 text-white rounded-3xl '>
            Login 👋
          </button>
        </a>
      </div>
    </div>
  );
};

export default NavBar;
