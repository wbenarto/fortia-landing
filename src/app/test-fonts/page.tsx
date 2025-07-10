export default function TestFonts() {
  return (
    <div className='min-h-screen bg-white p-8'>
      <h1 className='text-4xl mb-8'>Font Test Page</h1>

      <div className='space-y-4'>
        <div>
          <h2 className='text-2xl font-jakarta-extralight mb-2'>
            Extra Light (200)
          </h2>
          <p className='font-jakarta-extralight text-lg'>
            This is Plus Jakarta Sans Extra Light
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-jakarta-light mb-2'>Light (300)</h2>
          <p className='font-jakarta-light text-lg'>
            This is Plus Jakarta Sans Light
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-jakarta mb-2'>Regular (400)</h2>
          <p className='font-jakarta text-lg'>
            This is Plus Jakarta Sans Regular
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-jakarta-medium mb-2'>Medium (500)</h2>
          <p className='font-jakarta-medium text-lg'>
            This is Plus Jakarta Sans Medium
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-jakarta-semibold mb-2'>
            Semi Bold (600)
          </h2>
          <p className='font-jakarta-semibold text-lg'>
            This is Plus Jakarta Sans Semi Bold
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-jakarta-bold mb-2'>Bold (700)</h2>
          <p className='font-jakarta-bold text-lg'>
            This is Plus Jakarta Sans Bold
          </p>
        </div>

        <div>
          <h2 className='text-2xl font-jakarta-extrabold mb-2'>
            Extra Bold (800)
          </h2>
          <p className='font-jakarta-extrabold text-lg'>
            This is Plus Jakarta Sans Extra Bold
          </p>
        </div>
      </div>

      <div className='mt-8 p-4 bg-gray-100 rounded'>
        <h3 className='text-lg font-bold mb-2'>Fallback Test:</h3>
        <p className='font-sans'>This should be the system font (fallback)</p>
        <p className='font-jakarta'>This should be Plus Jakarta Sans</p>
      </div>
    </div>
  );
}
