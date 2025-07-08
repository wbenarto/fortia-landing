import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="text-center">
        <Image 
          src="/images/logo-main.png" 
          alt="Fortia Logo" 
          width={200} 
          height={200}
          className="mx-auto"
        />
      </div>
    </div>
  );
}
