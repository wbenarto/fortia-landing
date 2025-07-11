'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  };

  const getLinkClasses = (path: string, isMobile = false) => {
    const baseClasses = isMobile
      ? 'block px-3 py-3 rounded-md text-base font-medium w-full text-left transition-colors duration-200'
      : 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200';

    if (isActive(path)) {
      return `${baseClasses} text-gray-900 font-jakarta-bold`;
    }

    return `${baseClasses} text-gray-500 hover:text-gray-900`;
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
              <Link href='/' className={getLinkClasses('/')}>
                Home
              </Link>
              <Link href='/about' className={getLinkClasses('/about')}>
                About
              </Link>
              <Link href='/features' className={getLinkClasses('/features')}>
                Features
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
          <div className='md:hidden z-50 transition-opacity duration-300 ease-in-out'>
            {/* Backdrop */}
            <div
              className=' bg-opacity-50'
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Sidebar */}
            <div className='absolute top-0 right-0 w-64 h-full bg-white shadow-lg animate-slide-in duration-300'>
              <div className='flex justify-end p-4'>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className='text-gray-500 hover:text-gray-900 focus:outline-none'
                  aria-label='Close menu'
                >
                  <svg
                    className='h-6 w-6'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                </button>
              </div>

              <div className='px-4 py-2 space-y-2'>
                <Link
                  href='/'
                  className={getLinkClasses('/', true)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href='/about'
                  className={getLinkClasses('/about', true)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  href='/features'
                  className={getLinkClasses('/features', true)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
