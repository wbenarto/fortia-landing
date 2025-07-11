import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Features() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <main className='flex-1'>
        <div className=' px-10  xl:max-w-7xl 2xl:mx-auto 2xl:py-10 w-full 2xl:mt-10'>
          <h3 className='text-3xl font-jakarta-extrabold 2xl:text-5xl my-8 tracking-wide  text-center'>
            Features
          </h3>

          <div className='flex my-8 flex-col items-center justify-center'>
            <h2 className='text-2xl font-jakarta-semibold text-gray-800'>
              AI-Powered Meal Analysis
            </h2>
            <p className='text-lg font-jakarta-semibold text-gray-800 tracking-wider text-center my-4'>
              Our AI-powered meal analysis breaks down your meal into its
              components, including calories, protein, carbohydrates, and fat.
            </p>
          </div>
          <div className='flex my-8 flex-col items-center justify-center'>
            <h2 className='text-2xl font-jakarta-semibold text-gray-800'>
              Daily Calorie and Macronutrient Tracking and Targets
            </h2>
            <p className='text-lg font-jakarta-semibold text-gray-800 tracking-wider text-center my-4'>
              Based on your personalized goals and your current fitness level,
              we calculate your daily calorie and macronutrient targets.
            </p>
          </div>
          <div className='flex my-8 flex-col items-center justify-center'>
            <h2 className='text-2xl font-jakarta-semibold text-gray-800'>
              Smart Calories Calculator
            </h2>
            <p className='text-lg font-jakarta-semibold text-gray-800 tracking-wider text-center my-4'>
              We use the AI-powered activity breakdown to calculate your
              calories burned daily.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
