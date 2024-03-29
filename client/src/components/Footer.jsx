import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-[rgb(239,247,255)] relative rounded-lg  bottom-0 w-full right-0 transition-all ease-in duration-150  dark:bg-gray-900 mt-4'>
      <div className='w-full max-w-screen-xl mx-auto p-4 md:py-8'>
        <span className='block text-sm text-center text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <Link to='/' className='hover:underline '>
            ehya™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
