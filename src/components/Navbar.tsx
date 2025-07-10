'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white h-24  '>
      <div className='h-24  mx-auto pr-14 sm:px-10'>
        <div className='flex justify-between items-center h-24 overflow-hidden'>
          {/* Logo */}
          <div className='flex-shrink-0 '>
            <Link href='/' className='flex items-center '>
              <Image
                src='/images/logo-main.png'
                alt='Fortia Logo'
                width={130}
                height={40}
                className=' w-auto'
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden md:block  mr-24'>
            <div className='ml-10 flex items-baseline space-x-8'>
              <Link
                href='/'
                className='text-gray-900 font-jakarta-semibold hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
              >
                Home
              </Link>
              <Link
                href='/about'
                className='text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
              >
                Meet the Team
              </Link>
              <Link
                href='/features'
                className='text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
              >
                Features
              </Link>
              <Link
                href='/contact'
                className='text-gray-500 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className='md:hidden'>
            <button
              onClick={toggleMenu}
              className='text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900'
              aria-label='Toggle menu'
            >
              <svg
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M6 18L18 6M6 6l12 12'
                  />
                ) : (
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200'>
              <Link
                href='/'
                className='text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href='/about'
                className='text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href='/features'
                className='text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href='/contact'
                className='text-gray-500 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium'
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
