export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Hinduka For Life.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <section className="bg-brand-green text-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Terms of Service
        </h1>

        <p className="text-lg text-white mb-8 leading-relaxed">
          Welcome to the Hinduka For Life website. These Terms of Service
          govern your use of our website and services.
        </p>

        {/* Acceptance */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Acceptance of terms</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            By accessing or using this website, you agree to these Terms of
            Service. If you do not agree, please do not use this website.
          </p>
        </div>

        {/* Use of website */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Use of the website</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            You may use this website for lawful purposes only. You agree not to:
          </p>
          <ul className="list-disc list-inside text-white/90 leading-relaxed space-y-1 mb-4">
            <li>Use the website in any way that violates applicable laws</li>
            <li>Submit false or misleading information through the contact form</li>
            <li>Attempt to interfere with the proper functioning of the website</li>
          </ul>
        </div>

        {/* Contact form */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Contact form submissions</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            By submitting the contact form, you consent to Hinduka For Life Ltd
            and Formspree processing your name, email, phone number (if
            provided), inquiry type, and message for the purpose of responding
            to your inquiry.
          </p>
        </div>

        {/* Intellectual property */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Intellectual property</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            All content on this website, including text, images, logos, and
            design, is the property of Hinduka For Life Ltd or its licensors and
            is protected by copyright and other intellectual property laws.
          </p>
        </div>

        {/* Limitation of liability */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Limitation of liability</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Hinduka For Life Ltd is not liable for any indirect, incidental, or
            consequential damages arising from your use of this website or
            reliance on information provided through the contact form.
          </p>
        </div>

        {/* Governing law */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Governing law</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            These Terms of Service are governed by the laws of Rwanda.
          </p>
        </div>

        {/* Changes */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Changes to these terms</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            We may update these Terms of Service from time to time. Changes will
            be posted on this page.
          </p>
        </div>

        {/* Contact */}
        <div className="text-left">
          <h2 className="text-xl font-bold text-white mb-3">Contact us</h2>
          <p className="text-white/90 leading-relaxed">
            For questions about these Terms of Service, contact us at:
          </p>
          <p className="text-white/90 leading-relaxed">
            Email: hindukaforlife@gmail.com<br />
            Phone/WhatsApp: +250 735 753 524
          </p>
        </div>
      </div>
    </section>
  );
}
