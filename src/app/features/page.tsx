import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Features() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <main className='flex-1'>
        <div className=' px-10  xl:max-w-7xl 2xl:mx-auto 2xl:py-10 w-full 2xl:mt-10'>
          <h3 className='text-2xl 2xl:text-3xl font-jakarta-extrabold 2xl:text-5xl my-8 tracking-wide  text-center'>
            Features
          </h3>

          <div className='flex my-8 flex-col items-center justify-center'>
            <h2 className='2xl:text-2xl text-xl font-jakarta-bold text-gray-800'>
              AI-Powered Meal Analysis
            </h2>
            <p className='2xl:text-lg text-sm font-jakarta-semibold text-gray-800 tracking-wider text-center my-4'>
              Our AI-powered meal analysis breaks down your meal into its
              components, including calories, protein, carbohydrates, and fat.
            </p>
          </div>
          <div className='flex my-8 flex-col items-center justify-center'>
            <h2 className='2xl:text-2xl text-xl font-jakarta-bold text-gray-800'>
              Daily Calorie and Macronutrient Tracking and Targets
            </h2>
            <p className='2xl:text-lg text-sm font-jakarta-semibold text-gray-800 tracking-wider text-center my-4'>
              Based on your personalized goals and your current fitness level,
              we calculate your daily calorie and macronutrient targets.
            </p>

            <p className='2xl:text-lg text-sm font-jakarta-semibold text-gray-800 tracking-wider text-center my-4'>
              Fortia&apos;s advanced tracking system incorporates precise Total
              Daily Energy Expenditure (TDEE) and Basal Metabolic Rate (BMR)
              calculations to provide users with personalized nutrition and
              fitness insights. The app calculates BMR using the Mifflin-St Jeor
              equation, which considers age, gender, height, and weight to
              determine the minimum calories needed for basic bodily functions
              at rest. From there, Fortia applies activity multipliers based on
              the user&apos;s lifestyle and exercise patterns to determine their
              TDEE—the total calories burned throughout the day including
              physical activity, thermic effect of food, and non-exercise
              activity thermogenesis (NEAT). This comprehensive approach allows
              users to set accurate calorie targets for weight loss,
              maintenance, or muscle gain, while the app continuously refines
              these calculations based on actual progress data, ensuring
              recommendations remain optimal as users&apos; bodies and activity
              levels change over time.
            </p>
          </div>
          <div className='flex my-8 flex-col items-center justify-center'>
            <h2 className='2xl:text-2xl text-xl font-jakarta-bold text-gray-800'>
              Awakened Manifesting
            </h2>
            <p className='2xl:text-lg text-sm font-jakarta-semibold text-gray-800 tracking-wider text-center my-4'>
              Following the principles of awakened manifesting, a book written
              by Philip Saparov, we are providing a platform for our users to
              re-align themselves with their true desires and goals. We believe
              physical and mental health are interconnected and that by
              improving one, the other will follow.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
