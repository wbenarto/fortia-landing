import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center min-h-screen pt-[150px] bg-white dark:bg-gray-900">
      <div className="text-center">
        <Image 
          src="/images/logo-main.png" 
          alt="Fortia Logo" 
          width={600} 
          height={100}
          className="mx-auto "
        />
        <h1 className="text-5xl font-bold text-gray-900 dark:text-white">Coming soon!</h1>
        <Link 
          href="/privacy" 
          className="inline-block mt-6 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
        >
          Privacy Policy
        </Link>
      </div>
    </div>
  );
}
