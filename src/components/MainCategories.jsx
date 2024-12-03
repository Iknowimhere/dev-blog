import { Link } from "react-router";

export const MainCategories = () => {
  return (
    <>
      <div className='bg-white hidden md:flex md:rounded-3xl xl:rounded-full shadow-xl py-2 px-4 items-center gap-2'>
        <div className='flex-1 flex gap-8 flex-wrap'>
          <Link
            to='/posts'
            className='px-4 py-2 bg-blue-800 text-white rounded-full'
          >
            All posts
          </Link>
          <Link
            to='/posts?cat=development'
            className='hover:bg-blue-100 px-4 py-2 rounded-full'
          >
            Development
          </Link>
          <Link
            to='/posts?cat=web-design'
            className='hover:bg-blue-100 px-4 py-2 rounded-full'
          >
            Web-design
          </Link>
          <Link
            to='/posts?cat=databases'
            className='hover:bg-blue-100 px-4 py-2 rounded-full'
          >
            Databases
          </Link>
          <Link
            to='/posts?cat=seo'
            className='hover:bg-blue-100 px-4 py-2 rounded-full'
          >
            Search engines
          </Link>
          <Link
            to='/posts?cat=marketing'
            className='hover:bg-blue-100 px-4 py-2 rounded-full'
          >
            Marketing
          </Link>
        </div>
        <span className='text-xl'>|</span>
        <div className='bg-gray-200 flex items-center rounded-full gap-2 p-2'>
          🔍
          <input
            type='text'
            className='bg-transparent focus:outline-none focus:border-none'
            placeholder='Search a post...'
          />
        </div>
      </div>
    </>
  );
}
