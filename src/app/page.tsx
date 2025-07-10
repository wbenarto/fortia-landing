import Footer from '@/components/Footer';
import GridLayout, { GridItem } from '@/components/GridLayout';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='justify-center min-h-screen bg-white'>
      <Navbar />
      <div className='2xl:px-30 2xl:py-20    w-full'>
        <GridLayout>
          <GridItem className='flex items-center justify-center !px-20'>
            <h3 className='font-jakarta-extrabold text-3xl md:text-4xl my-4  text-center'>
              Track your fitness progress with our AI-powered app
            </h3>
            <p className='font-jakarta text-gray-800 font-jakarta-semibold tracking-widest text-center my-4'>
              Sign up for our beta launch and get early access to our app.
            </p>
            <input
              type='email'
              placeholder='Enter your email'
              className='w-full md:w-3/4 p-2 border border-gray-300 2xl:w-1/2 rounded-md my-10'
            />
            <button
              className={`bg-[#E3BBA1] text-white px-12 py-4 rounded-md my-4 font-jakarta-bold`}
            >
              Sign up
            </button>
            <div className='flex items-center justify-center'>
              <Image
                src='/images/appstore.jpeg'
                alt='coming to app store soon'
                className='py-8'
                width={280}
                height={300}
              />
            </div>
          </GridItem>

          <GridItem className='flex items-center justify-center  md:inline-block md:ml-20 '>
            <Image
              src='/images/homess.png'
              alt='Hero Image'
              width={350}
              height={300}
            />
          </GridItem>
        </GridLayout>
        <div className='border-b border-1 mt-20 border-gray-400'></div>
      </div>

      <div className='px-30 '>
        <h3 className='font-jakarta-extrabold text-5xl my-8 tracking-wide  text-center'>
          Welcome to Fortia
        </h3>
        <div className='flex flex-col items-center justify-center mb-10'>
          <h3 className='font-jakarta-bold text-xl my-8 tracking-wide  text-center'>
            Track: Calories intake, weight progress, activities.
          </h3>
          <Image
            src='/images/homess.png'
            alt='Hero Image'
            className='py-8'
            width={250}
            height={300}
          />
        </div>

        <div className='flex flex-col items-center justify-center mb-10'>
          <h3 className='font-jakarta-bold text-xl my-8 tracking-wide  text-center'>
            Track: Calories intake, weight progress, activities.
          </h3>
          <Image
            src='/images/homess.png'
            alt='Hero Image'
            className='py-8'
            width={250}
            height={300}
          />
        </div>

        <div className='flex flex-col items-center justify-center mb-10'>
          <h3 className='font-jakarta-bold text-xl my-8 tracking-wide  text-center'>
            Track: Calories intake, weight progress, activities.
          </h3>
          <Image
            src='/images/homess.png'
            alt='Hero Image'
            className='py-8'
            width={250}
            height={300}
          />
        </div>

        <div className='flex flex-col items-center justify-center mb-10'>
          <Image
            src='/images/appstore.jpeg'
            alt='coming to app store soon'
            className='py-8'
            width={250}
            height={300}
          />
        </div>
      </div>
      <Footer />
      {/* <div className="text-center pt-20">
        <Image 
          src="/images/logo-main.png" 
          alt="Fortia Logo" 
          width={600} 
          height={100}
          className="mx-auto"
        />
        <h1 className="text-5xl font-jakarta-bold text-gray-900 mt-8">Coming soon!</h1>
        <p className="text-xl font-jakarta-medium text-gray-600 mt-4">This text should be in Plus Jakarta Sans Medium</p>
        <Link 
          href="/privacy" 
          className="inline-block mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200 font-jakarta-semibold"
        >
          Privacy Policy
        </Link>
      </div> */}
    </div>
  );
}
