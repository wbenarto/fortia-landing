import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function TermsPage() {
  return (
    <div className='flex flex-col min-h-screen bg-white'>
      <Navbar />
      <main className='flex-1'>
        <div className='px-10 xl:max-w-7xl 2xl:mx-auto 2xl:py-10 w-full 2xl:mt-10'>
          <div className='flex flex-row items-center justify-between mb-4'>
            <h1 className='text-xl font-jakarta-semibold text-gray-800'>
              Terms and Conditions
            </h1>
          </div>

          {/* Content */}
          <div className='mb-4 '>
            <p className='text-gray-600 text-xs mb-4'>
              Last Updated: December 2024
            </p>

            <p className='text-gray-700 text-sm leading-6 mb-4'>
              Welcome to Fortia! These Terms and Conditions ("Terms") govern
              your use of the Fortia mobile application ("App") and related
              services ("Services") provided by Fortia ("we," "us," or "our").
            </p>

            <p className='text-gray-700 text-sm leading-6 mb-4'>
              By downloading, installing, or using the Fortia app, you agree to
              be bound by these Terms. If you do not agree to these Terms,
              please do not use our Services.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              1. Acceptance of Terms
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              By accessing or using the Fortia app, you confirm that you accept
              these Terms and agree to comply with them. If you are using the
              Services on behalf of a company or other legal entity, you
              represent that you have the authority to bind such entity to these
              Terms.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              2. Description of Services
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              Fortia is a comprehensive fitness and nutrition tracking
              application that provides:
            </p>
            <div className='mb-4 ml-4'>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • AI-powered meal analysis and nutritional breakdown
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Smart weight tracking with progress visualization
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Personalized nutrition goals and BMR/TDEE calculations
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Activity tracking and step counting
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Workout logging and calorie burn calculations
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Progress visualization and interactive charts
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • User authentication and profile management
              </p>
            </div>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              3. User Accounts and Registration
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                3.1 Account Creation:
              </span>{' '}
              To use certain features of the App, you must create an account.
              You agree to provide accurate, current, and complete information
              during registration and to update such information to keep it
              accurate, current, and complete.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                3.2 Account Security:
              </span>{' '}
              You are responsible for safeguarding your account credentials and
              for all activities that occur under your account. You agree to
              notify us immediately of any unauthorized use of your account.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              <span className='font-jakarta-semibold'>
                3.3 Age Requirements:
              </span>{' '}
              You must be at least 13 years old to use the Services. If you are
              under 18, you must have parental or guardian consent to use the
              Services.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              4. Subscription and Payment Terms
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                4.1 Free and Premium Services:
              </span>{' '}
              Fortia offers both free and premium subscription tiers. Premium
              features require a paid subscription.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                4.2 Subscription Plans:
              </span>
            </p>
            <div className='mb-2 ml-4'>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Basic Plan: $4.99/month - Core features + basic analytics
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Pro Plan: $9.99/month - Advanced analytics + meal planning
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Elite Plan: $19.99/month - Personal coaching + priority
                support
              </p>
            </div>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                4.3 Payment and Billing:
              </span>{' '}
              Subscriptions are billed on a recurring basis. You authorize us to
              charge your payment method for all fees incurred. All payments are
              non-refundable except as required by law.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              <span className='font-jakarta-semibold'>
                4.4 Subscription Cancellation:
              </span>{' '}
              You may cancel your subscription at any time through your
              device&apos;s subscription settings. Cancellation will take effect
              at the end of the current billing period.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              5. User Data and Privacy
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                5.1 Data Collection:
              </span>{' '}
              We collect and process personal data as described in our Privacy
              Policy. This includes health and fitness data, usage information,
              and device information.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                5.2 Health Data Consent:
              </span>{' '}
              By using the App, you consent to the collection and processing of
              your health and fitness data, including but not limited to weight,
              activity levels, and nutritional information.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              <span className='font-jakarta-semibold'>5.3 Data Accuracy:</span>{' '}
              You are responsible for the accuracy of the data you input into
              the App. We are not responsible for any decisions made based on
              inaccurate or incomplete data.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              6. Acceptable Use Policy
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                6.1 Prohibited Activities:
              </span>{' '}
              You agree not to:
            </p>
            <div className='mb-2 ml-4'>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Use the Services for any illegal or unauthorized purpose
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Attempt to gain unauthorized access to our systems
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Interfere with or disrupt the Services
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Share your account credentials with others
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Use the Services to harm yourself or others
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Upload malicious code or content
              </p>
            </div>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              <span className='font-jakarta-semibold'>
                6.2 Medical Disclaimer:
              </span>{' '}
              The information provided by Fortia is for educational and
              informational purposes only. It is not intended as medical advice,
              diagnosis, or treatment. Always consult with qualified healthcare
              professionals before making changes to your diet or exercise
              routine.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              7. Artificial Intelligence and Machine Learning
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                7.1 AI-Powered Features:
              </span>{' '}
              Fortia utilizes artificial intelligence and machine learning
              algorithms to provide meal analysis, nutritional recommendations,
              and personalized insights. You acknowledge that:
            </p>
            <div className='mb-2 ml-4'>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • AI-generated content is for informational purposes only and
                may not be 100% accurate
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • Nutritional estimates are approximations based on available
                data
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • AI recommendations should not replace professional medical or
                nutritional advice
              </p>
              <p className='text-gray-700 text-sm leading-6 mb-1'>
                • We continuously improve our AI models, which may affect the
                accuracy of historical data
              </p>
            </div>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              <span className='font-jakarta-semibold'>7.2 Data Training:</span>{' '}
              You grant us permission to use anonymized, aggregated data to
              improve our AI algorithms and services, provided such use does not
              identify you personally.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              8. Health Information and Medical Data
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                8.1 Health Data Classification:
              </span>{' '}
              Fortia is not a covered entity under HIPAA. The health data you
              input is not considered Protected Health Information (PHI) under
              HIPAA regulations. However, we treat your health data with
              appropriate security measures.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                8.2 Medical Emergency Disclaimer:
              </span>{' '}
              Fortia is not designed for medical emergencies. If you experience
              a medical emergency, contact emergency services immediately. Do
              not rely on the App for emergency medical information or
              assistance.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              <span className='font-jakarta-semibold'>
                8.3 Health Data Retention:
              </span>{' '}
              Your health data will be retained in accordance with our Privacy
              Policy. You may request deletion of your health data at any time,
              subject to legal retention requirements.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              9. Disclaimers and Limitations of Liability
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                9.1 Service Availability:
              </span>{' '}
              We strive to provide reliable Services but cannot guarantee
              uninterrupted access. The Services are provided "as is" without
              warranties of any kind.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                9.2 Limitation of Liability:
              </span>{' '}
              To the maximum extent permitted by law, Fortia shall not be liable
              for any indirect, incidental, special, consequential, or punitive
              damages arising from your use of the Services.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              <span className='font-jakarta-semibold'>
                9.3 Health and Safety:
              </span>{' '}
              You acknowledge that fitness and nutrition activities carry
              inherent risks. You assume all responsibility for your health and
              safety while using the App.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              10. Termination
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                10.1 Termination by You:
              </span>{' '}
              You may terminate your account at any time by deleting the App or
              contacting us.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-2'>
              <span className='font-jakarta-semibold'>
                10.2 Termination by Us:
              </span>{' '}
              We may terminate or suspend your access to the Services at any
              time for violation of these Terms or for any other reason at our
              sole discretion.
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              <span className='font-jakarta-semibold'>
                10.3 Effect of Termination:
              </span>{' '}
              Upon termination, your right to use the Services will cease
              immediately. We may delete your account and data in accordance
              with our Privacy Policy.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              11. Changes to Terms
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              We reserve the right to modify these Terms at any time. We will
              notify you of material changes by posting the updated Terms in the
              App or by other means. Your continued use of the Services after
              such changes constitutes acceptance of the new Terms.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              12. Governing Law and Dispute Resolution
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              These Terms are governed by the laws of the jurisdiction where
              Fortia is incorporated. Any disputes arising from these Terms or
              your use of the Services shall be resolved through binding
              arbitration in accordance with the rules of the American
              Arbitration Association.
            </p>

            <h2 className='text-gray-800 text-base font-jakarta-semibold mb-2'>
              13. Contact Information
            </h2>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              For questions about these Terms and Conditions, please contact us
              at:
            </p>
            <p className='text-gray-700 text-sm leading-6 mb-4'>
              Email: legal@fortia.app
              <br />
              Website: https://fortia.app
            </p>

            <p className='text-gray-600 text-sm italic text-center mb-4'>
              Fortia - Wellness Beyond.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
