const TermsOfServicePage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-6">
      <div className="w-full max-w-3xl rounded-2xl border border-gray-200 bg-white p-10 shadow-xl dark:border-gray-700 dark:bg-gray-800">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
            Terms of Service
          </h1>
          <p className="mt-2 text-gray-500 dark:text-gray-300">
            Rules and guidelines for using our website
          </p>
        </header>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            1. Introduction
          </h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>1.1.</strong> These Terms of Service govern your use of our
            website and associated services (the "Website"). By accessing or
            using the Website, you agree to comply with these terms.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>1.2.</strong> Please read these terms carefully. If you do
            not agree, you should not use the Website.
          </p>
        </section>

        {/* 2. Changes */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            2. Changes to the Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>2.1.</strong> We may update these terms at any time by
            posting the new version on the Website. Continued use after changes
            means acceptance of the updated terms.
          </p>
        </section>

        {/* 3. Prohibited Uses */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            3. Prohibited Uses
          </h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>3.1.</strong> You may not use the Website for any unlawful
            activities, including:
          </p>
          <ul className="mb-3 list-disc pl-6 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>Infringing intellectual property rights</li>
            <li>Promoting violence, discrimination, or illegal activities</li>
            <li>Harassing or intimidating other users</li>
          </ul>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>3.2.</strong> You may not disrupt or damage the Website or
            interfere with other users’ access.
          </p>
        </section>

        {/* 4. Intellectual Property */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            4. Intellectual Property Rights
          </h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>4.1.</strong> All content on the Website, including text,
            images, videos, and software, belongs to the Website owner or its
            licensors. You may use it for personal, non-commercial purposes
            only.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>4.2.</strong> You may not copy, modify, distribute, or
            create derivative works without explicit written permission.
          </p>
        </section>

        {/* 5. Disclaimers */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            5. Disclaimers & Liability
          </h2>
          <p className="mb-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>5.1.</strong> The Website is provided "as is" without
            warranties of any kind.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>5.2.</strong> We are not liable for any damages resulting
            from your use of the Website.
          </p>
        </section>

        {/* 6. Governing Law */}
        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            6. Governing Law
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            <strong>6.1.</strong> These Terms are governed by the laws of{" "}
            <span className="italic">Algeria</span>, without regard to conflict
            of law principles.
          </p>
        </section>

        {/* 8. Acceptance */}
        <section>
          <h2 className="mb-3 text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            7. Acceptance of Terms
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            By using this Website, you acknowledge that you have read, understood,
            and agree to be bound by these Terms of Service.
          </p>
        </section>
      </div>
    </main>
  );
};

export default TermsOfServicePage;
