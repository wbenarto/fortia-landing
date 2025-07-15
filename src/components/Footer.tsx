export default function Footer() {
  return (
    <footer className='bg-gray-900 text-white h-26   '>
      <div className='max-w-7xl mx-auto flex  h-full items-center justify-between  px-4 sm:px-6 lg:px-8 '>
        {/* Bottom Section */}
        <div className='flex items-center h-full mb-4'>
          <h3 className='font-jakarta-bold text-xl 2xl:text-2xl '>Fortia</h3>
        </div>
        <div className='flex items-center h-full mb-4 '>
          <p className='text-gray-400 font-jakarta-medium text-[8px] 2xl:text-sm '>
            © 2024 Fortia. All rights reserved.
          </p>
        </div>

        <div className='2xl:flex-row h-full flex 2xl:items-center justify-center flex-col space-x-6 md:mt-0 gap-2'>
          <a
            href='/terms'
            className='text-gray-400 hover:text-white transition-colors text-xs 2xl:text-sm font-jakarta-medium'
          >
            Terms of Service
          </a>
          <a
            href='/privacy'
            className='text-gray-400 hover:text-white transition-colors text-xs 2xl:text-sm font-jakarta-medium'
          >
            App Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
