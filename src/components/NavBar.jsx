import Image from "./Image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { useState } from "react";
import { Link } from "react-router";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className='w-full h-16 md:20 flex justify-around items-center'>
      {/* LOGO */}
      <Link to="/" className='flex items-center gap-2 text-2xl font-bold'>
        <Image src={'/logo.png'} alt='logo' w={20} h={40} />
        <span>Dev blog</span>
      </Link>
      {/* Mobile Menu */}
      <div className='md:hidden'>
        <div
          className='text-2xl cursor-pointer'
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? 'X' : '≡'}
        </div>
        {/* Mobile link list */}
        <div
          className={`w-full h-screen flex flex-col justify-center items-center gap-8 font-medium text-lg absolute top-16 ${
            open ? '-right-0' : '-right-full'
          } transition-all ease-in `}
        >
          <Link to=''>Home</Link>
          <Link to=''>Trending</Link>
          <Link to=''>Most Popular</Link>
          <Link to=''>About</Link>
          <Link to=''>
            <button className='px-8 py-2 bg-blue-800 text-white rounded-3xl '>
              Login 👋
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className='hidden md:flex items-center gap-8 xl:gap-12'>
        <Link to=''>Home</Link>
        <Link to=''>Trending</Link>
        <Link to=''>Most Popular</Link>
        <Link to=''>About</Link>
        
        <SignedOut>
        <Link to='/login'>
        <button className='px-8 py-2 bg-blue-800 text-white rounded-3xl '>
          Login 👋
        </button>
      </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
      </div>
    </div>
  );
};

export default NavBar;
