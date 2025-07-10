import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className='min-h-screen bg-white'>
      <div className='max-w-6xl mx-auto px-4 py-8'>
        {/* Header */}
        <div className='mb-8'>
          <Link
            href='/'
            className='inline-flex items-center text-gray-600 hover:text-gray-900 mb-4'
          >
            ← Back to Home
          </Link>
          <h1 className='text-4xl font-bold text-gray-900'>Privacy Policy</h1>
        </div>

        {/* Privacy Policy Content - Using iframe for long content */}
        <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
          <iframe
            src='/privacy-policy.html'
            className='w-full h-[800px] border-0'
            title='Privacy Policy'
            loading='lazy'
          />
        </div>

        {/* Alternative: Direct link to full page */}
        <div className='mt-4 text-center'>
          <a
            href='/privacy-policy.html'
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-600 hover:text-blue-800 underline'
          >
            Open Privacy Policy in new tab
          </a>
        </div>
      </div>
    </div>
  );
}
