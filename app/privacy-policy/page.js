export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Hinduka For Life.",
  robots: { index: false, follow: false },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-brand-green text-white py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
          Privacy Policy
        </h1>

        <p className="text-lg text-white mb-8 leading-relaxed">
          Hinduka For Life Ltd (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a registered social
          enterprise in Rwanda. This Privacy Policy explains how we collect, use,
          and protect personal information when you use our website and submit
          our contact form.
        </p>

        {/* Information collected */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Information we collect</h2>
          <p className="text-white/90 leading-relaxed mb-3">
            When you submit the contact form on our website, we collect:
          </p>
          <ul className="list-disc list-inside text-white/90 leading-relaxed space-y-1 mb-4">
            <li>Your name</li>
            <li>Your email address</li>
            <li>Your phone number (optional)</li>
            <li>Your inquiry type (program, volunteering, partnership, or other)</li>
            <li>Your message</li>
          </ul>
        </div>

        {/* How we use information */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">How we use your information</h2>
          <p className="text-white/90 leading-relaxed mb-3">
            We use the information you submit to:
          </p>
          <ul className="list-disc list-inside text-white/90 leading-relaxed space-y-1 mb-4">
            <li>Respond to your inquiry or message</li>
            <li>Process program enrollment or volunteer interest</li>
            <li>Discuss partnership or support opportunities</li>
            <li>Communicate with you about Hinduka For Life programs</li>
          </ul>
        </div>

        {/* Third-party providers */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Third-party service providers</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Our contact form is powered by Formspree. When you submit the form,
            your information is sent to Formspree, which processes and stores it
            on our behalf and forwards submission notifications to us.{" "}
            <a
              href="https://formspree.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              Formspree&rsquo;s own privacy policy
            </a>{" "}
            applies to how they handle your information.
          </p>
          <p className="text-white/90 leading-relaxed mb-4">
            We do not sell your personal data. We do not share your personal
            information with third parties except as needed to operate our
            contact form or as required by law.
          </p>
        </div>

        {/* Children */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Children and young people</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            Our programs serve children and young people. If you are under 18,
            please ask a parent or guardian before submitting the contact form.
            We do not knowingly collect personal data from children under 13
            without parental consent.
          </p>
        </div>

        {/* Your rights */}
        <div className="text-left mb-6">
          <h2 className="text-xl font-bold text-white mb-3">Your rights</h2>
          <p className="text-white/90 leading-relaxed mb-4">
            You may request access to, correction of, or deletion of your
            personal data by contacting us at{" "}
            <a
              href="mailto:hindukaforlife@gmail.com"
              className="text-brand-gold hover:underline"
            >
              hindukaforlife@gmail.com
            </a>{" "}
            or by phone/WhatsApp at +250 735 753 524.
          </p>
        </div>

        {/* Contact */}
        <div className="text-left">
          <h2 className="text-xl font-bold text-white mb-3">Contact us</h2>
          <p className="text-white/90 leading-relaxed">
            For questions about this Privacy Policy or your personal data,
            contact us at:
          </p>
          <p className="text-white/90 leading-relaxed">
            Email: hindukaforlife@gmail.com<br />
            Phone/WhatsApp: +250 735 753 524<br />
            Address: Rwanda
          </p>
        </div>
      </div>
    </section>
  );
}
