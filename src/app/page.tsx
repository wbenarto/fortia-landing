import Image from 'next/image';

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
      </div>
    </div>
  );
}
