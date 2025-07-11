import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const About = () => {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <main className='flex-1'>
        <div className=' px-10  xl:max-w-7xl 2xl:mx-auto 2xl:py-10 w-full 2xl:mt-10'>
          <h3 className='text-3xl font-jakarta-extrabold 2xl:text-5xl my-8 tracking-wide  text-center'>
            About
          </h3>
          <p className=' text-sm 2xl:text-lg font-jakarta-semibold text-gray-800 tracking-wider text-center'>
            <span className='font-jakarta-bold text-2xl '>Fortia</span> is a
            comprehensive fitness and nutrition tracking application designed to
            revolutionize personal health management through AI-powered meal
            analysis, intelligent weight tracking, and personalized nutrition
            guidance. Our mission is to make healthy living accessible,
            sustainable, and data-driven for everyone.
          </p>
        </div>
        <div className=' px-10 2xl:max-w-7xl 2xl:mx-auto 2xl:py-4 w-full'>
          <h3 className='text-3xl font-jakarta-extrabold 2xl:text-5xl my-8 tracking-wide  text-center'>
            Why Fortia?
          </h3>
          <p className=' text-sm 2xl:text-lg font-jakarta tracking-wider text-center'>
            Data-driven analysis and feedback are the cornerstones of successful
            goal achievement in fitness and nutrition. When users can see the
            direct correlation between their actions and outcomes through clear,
            actionable insights, they gain the confidence and motivation to make
            informed decisions. Traditional approaches often rely on guesswork
            or generic advice, leaving users frustrated when they don't see the
            expected results. However, when feedback is personalized, timely,
            and based on comprehensive data analysis, users can identify
            patterns, understand their unique responses to different strategies,
            and make precise adjustments to their approach.
          </p>
          <br />
          <p className=' text-sm 2xl:text-lg font-jakarta tracking-wider text-center'>
            The power of data-driven feedback lies in its ability to transform
            abstract goals into concrete, measurable progress. By analyzing
            trends in nutrition, activity, sleep, and other health metrics,
            users can discover what truly works for their body and lifestyle.
            This level of insight enables them to optimize their routines, avoid
            common pitfalls, and celebrate meaningful milestones along their
            journey. More importantly, data-driven feedback creates a sense of
            accountability and ownership over one's health journey, as users can
            see exactly how their choices impact their progress. This
            personalized approach not only accelerates goal achievement but also
            builds sustainable habits that last beyond the initial motivation
            phase, ultimately leading to long-term success and improved overall
            well-being.
          </p>
          <div className='flex flex-col items-center justify-center'></div>
        </div>
        <div className='flex flex-col items-center justify-center py-20 pb-10'>
          <Image
            src='/images/appstore.jpeg'
            alt='coming to app store soon'
            className='py-8 w-[160px] md:w-[250px]'
            width={130}
            height={300}
          />
        </div>
        {/* <div className='2xl:max-w-7xl 2xl:mx-auto 2xl:py-10 w-full'>
          <h3 className='font-jakarta-extrabold text-5xl my-8 tracking-wide  text-center'>
            Meet the Team
          </h3>
          <div className='flex flex-col items-center justify-center'>
            <Image
              src='/images/appstore.jpeg'
              alt='coming to app store soon'
              className='py-8 w-[160px] md:w-[250px]'
              width={130}
              height={300}
            />
          </div>
        </div> */}
      </main>
      <Footer />
    </div>
  );
};

export default About;
