import React from 'react';
import { Link } from 'react-router';
import { MainCategories } from '../components/MainCategories';
import { FeaturedPosts } from '../components/FeaturedPosts';

const Homepage = () => {
  return (
    <div className='mt-4 flex flex-col gap-4'>
      {/* Breadcrumbs */}
      <div className='flex items-center gap-2'>
        <Link to='/' className='text-sm text-blue-800'>
          Home
        </Link>
        <span className='text-sm'> &gt;</span>
        <span className='text-sm'> Blog and articles</span>
      </div>
      {/* Intro */}
      <div className='flex gap-4 items-center'>
        <div className='flex flex-col'>
          <h1 className='text-gray-800 text-2xl md:text-5xl lg:6xl font-bold'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            modi.
          </h1>
          <p className='mt-8'>
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className='hidden md:block px-4 py-2 bg-blue-800 text-white rounded-full text-center cursor-pointer'>
          <Link to='/write'>Click me to unleash your ideas! 👆</Link>
        </div>
      </div>
      {/* categories */}
      <MainCategories />
      {/* Featured posts */}
      <FeaturedPosts />
      {/* Recent posts */}
    </div>
  );
};

export default Homepage;
