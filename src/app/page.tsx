import BetaSignup from '@/components/BetaSignup';
import Footer from '@/components/Footer';
import GridLayout, { GridItem } from '@/components/GridLayout';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <main className='flex-1'>
        <div className='2xl:px-30 2xl:py-20 w-full'>
          <GridLayout>
            <GridItem className='flex items-center justify-center !px-20'>
              <BetaSignup />
            </GridItem>

            <GridItem className='flex items-center justify-center  md:inline-block md:ml-20 '>
              <Image
                src='/images/mockhome.png'
                alt='Hero Image'
                width={350}
                height={300}
              />
            </GridItem>
          </GridLayout>
          <div className='border-b mx-4 2xl:mx-0 border-1 mt-20 border-gray-400'></div>
        </div>

        <div className='px-4 2xl:px-30 '>
          <h3 className='font-jakarta-extrabold text-2xl 2xl:text-5xl my-8 tracking-wide  text-center'>
            Welcome to Fortia
          </h3>
          <div className='flex flex-col items-center justify-center mb-10'>
            <h3 className='font-jakarta-bold text-xl my-8 tracking-wide  text-center'>
              Track your daily macronutrients breakdown using our smart calories
              tracker.
            </h3>
            <Image
              src='/images/mocknutrition.png'
              alt='Hero Image'
              className='py-8'
              width={450}
              height={300}
            />
          </div>

          <div className='flex flex-col items-center justify-center mb-10'>
            <h3 className='font-jakarta-bold text-xl my-8 tracking-wide  text-center'>
              Simplify your meal tracking with our AI-powered meal analysis.
            </h3>
            <Image
              src='/images/mockmeal.png'
              alt='Hero Image'
              className='py-8'
              width={450}
              height={300}
            />
          </div>

          <div className='flex flex-col items-center justify-center mb-10'>
            <h3 className='font-jakarta-bold text-xl my-8 tracking-wide  text-center'>
              Log your daily activities and get a detailed breakdown of your
              calories burned.
            </h3>
            <Image
              src='/images/mockactivity.png'
              alt='Hero Image'
              className='py-8'
              width={450}
              height={300}
            />
          </div>

          <div className='flex flex-col items-center justify-center mb-10'>
            <Image
              src='/images/appstore.jpeg'
              alt='coming to app store soon'
              className='py-8 w-[160px] md:w-[250px]'
              width={130}
              height={200}
            />
          </div>
        </div>
      </main>
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
