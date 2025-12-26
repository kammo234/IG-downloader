const PrivacyPolicyPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-10 shadow-xl dark:border-gray-700 dark:bg-gray-800">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Privacy Policy
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-300">
            Our commitment to your privacy and transparency
          </p>
        </header>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            1. Introduction
          </h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>1.1.</strong> Welcome to our website{" "}
            . We do not collect, store, or process any personal data from our
            users. This policy exists to ensure transparency and trust.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>1.2.</strong> No identifiable user information is stored,
            tracked, or shared with third parties.
          </p>
        </section>

        {/* 2. Third-Party Ads */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            2. Advertising & Third-Party Services
          </h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>2.1.</strong> We may display ads using third-party services
            like Google AdSense. These providers may use cookies or other
            tracking technologies to collect non-personal information such as:
          </p>
          <ul className="mb-3 list-disc pl-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>Browser and device information</li>
            <li>Approximate location (country/state)</li>
            <li>Pages visited and timestamps</li>
            <li>General analytics data</li>
          </ul>
          <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>2.2.</strong> Learn more from:
          </p>
          <ul className="mb-3 list-disc pl-6 text-blue-600 dark:text-blue-400 leading-relaxed">
            <li>
              <a
                target="_blank"
                href="https://www.termsfeed.com/blog/privacy-policy-google-adsense/"
                className="hover:underline"
              >
                TermsFeed Guide
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.privacypolicies.com/blog/privacy-policy-google-adsense/"
                className="hover:underline"
              >
                PrivacyPolicies Guide
              </a>
            </li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            You may opt-out of personalized ads via{" "}
            <a
              target="_blank"
              href="https://adssettings.google.com/authenticated"
              className="text-blue-600 hover:underline dark:text-blue-400"
            >
              Google Ads Settings
            </a>
            .
          </p>
        </section>

        {/* 3. Updates */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            3. Updates to This Policy
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>3.1.</strong> This Privacy Policy may be updated from time
            to time. All updates will be posted on this page. By continuing to
            use the Website, you accept the latest version.
          </p>
        </section>

        {/* 4. Consent */}
        <section>
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            4. Your Consent
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            By using this Website, you acknowledge and agree to this Privacy
            Policy.
          </p>
        </section>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
