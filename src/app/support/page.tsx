'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { EMAILJS_CONFIG } from '@/lib/emailjs-config';
import emailjs from '@emailjs/browser';
import { useState } from 'react';

export default function SupportPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: EMAILJS_CONFIG.TO_EMAIL,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <main className='flex-1'>
        <div className='px-4 2xl:px-30 py-20'>
          {/* Header Section */}
          <div className='text-center mb-16'>
            <h1 className='font-jakarta-extrabold text-4xl 2xl:text-6xl mb-6 tracking-wide text-gray-900'>
              Get Support
            </h1>
            <p className='font-jakarta-medium text-xl text-gray-600 max-w-2xl mx-auto'>
              Need help with Fortia? We're here to assist you. Send us a message
              and we'll get back to you as soon as possible.
            </p>
          </div>

          {/* Contact Form */}
          <div className='max-w-2xl mx-auto'>
            <div className='bg-white rounded-2xl shadow-xl border border-gray-100 p-8'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                {/* Name Field */}
                <div>
                  <label
                    htmlFor='name'
                    className='block font-jakarta-semibold text-gray-700 mb-2'
                  >
                    Name *
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E3BBA1] focus:border-transparent font-jakarta-medium transition-all duration-200'
                    placeholder='Your full name'
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor='email'
                    className='block font-jakarta-semibold text-gray-700 mb-2'
                  >
                    Email *
                  </label>
                  <input
                    type='email'
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E3BBA1] focus:border-transparent font-jakarta-medium transition-all duration-200'
                    placeholder='your.email@example.com'
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <label
                    htmlFor='subject'
                    className='block font-jakarta-semibold text-gray-700 mb-2'
                  >
                    Subject *
                  </label>
                  <input
                    type='text'
                    id='subject'
                    name='subject'
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E3BBA1] focus:border-transparent font-jakarta-medium transition-all duration-200'
                    placeholder='What can we help you with?'
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor='message'
                    className='block font-jakarta-semibold text-gray-700 mb-2'
                  >
                    Message *
                  </label>
                  <textarea
                    id='message'
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E3BBA1] focus:border-transparent font-jakarta-medium transition-all duration-200 resize-none'
                    placeholder='Please describe your issue or question in detail...'
                  />
                </div>

                {/* Submit Button */}
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-[#E3BBA1] hover:bg-[#cd9c99] text-white font-jakarta-bold py-4 px-6 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]'
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className='bg-green-50 border border-green-200 rounded-lg p-4'>
                    <p className='text-green-800 font-jakarta-medium text-center'>
                      ✅ Message sent successfully! We'll get back to you soon.
                    </p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className='bg-red-50 border border-red-200 rounded-lg p-4'>
                    <p className='text-red-800 font-jakarta-medium text-center'>
                      Something went wrong. Please try again or contact us
                      directly.
                    </p>
                  </div>
                )}
              </form>
            </div>

            {/* Additional Contact Info */}
            <div className='mt-12 text-center'>
              <div className='space-y-2 text-gray-600 font-jakarta-medium'>
                <p>📧 Email: support@fortia.com</p>
                <p>Response Time: Within 24 hours</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
