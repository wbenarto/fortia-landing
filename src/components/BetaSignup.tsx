'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function BetaSignup() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      setMessage({ type: 'error', text: 'Please enter your email address' });
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage({ type: 'error', text: 'Please enter a valid email address' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/beta-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({
          type: 'success',
          text: 'Successfully signed up for beta access!',
        });
        setEmail(''); // Clear the input on success
      } else {
        setMessage({
          type: 'error',
          text: data.error || 'Failed to sign up. Please try again.',
        });
      }
    } catch (_error) {
      setMessage({
        type: 'error',
        text: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center '>
      <h3 className='font-jakarta-extrabold text-3xl md:text-4xl my-4 text-center'>
        Track your fitness progress with our AI-powered app
      </h3>
      <p className='font-jakarta text-gray-800 font-jakarta-semibold tracking-widest text-center my-4'>
        Sign up for our beta launch and get early access to our app.
      </p>

      <form
        onSubmit={handleSubmit}
        className='w-full flex flex-col items-center'
      >
        <input
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isLoading}
          className='w-full md:w-3/4 p-2 border border-gray-300 2xl:w-1/2 rounded-md my-10 disabled:opacity-50'
        />

        <button
          type='submit'
          disabled={isLoading}
          className={`bg-[#E3BBA1] text-white px-12 py-4 rounded-md my-4 font-jakarta-bold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#d4a890] transition-colors`}
        >
          {isLoading ? 'Signing up...' : 'Sign up'}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-3 rounded-md text-center max-w-md ${
            message.type === 'success'
              ? 'bg-green-100 text-green-800 border border-green-200'
              : 'bg-red-100 text-red-800 border border-red-200'
          }`}
        >
          {message.text}
        </div>
      )}

      <div className='flex items-center justify-center'>
        <Image
          src='/images/appstore.jpeg'
          alt='coming to app store soon'
          className='py-8 w-[160px] md:w-[250px]'
          width={130}
          height={200}
        />
      </div>
    </div>
  );
}
