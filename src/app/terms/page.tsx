import { FileText, Mail, Calendar } from "lucide-react";

const TermsPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-300 mb-4">
              Last updated: December 2024
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-300">
              <Calendar className="h-4 w-4" />
              <span className="text-sm">Effective as of December 1, 2024</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-blue-900 font-medium">
                <strong>Important:</strong> By using our services, you agree to these terms. Please read them carefully.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              Welcome to AutoAgentX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). These Terms of Service (&quot;Terms&quot;) govern your use of our website located at https://autoagentx.com and our services, including but not limited to AI automation solutions, video content creation, and business process automation (collectively, the &quot;Services&quot;).
            </p>
            <p className="text-gray-700 mb-6">
              By accessing or using our Services, you agree to be bound by these Terms. If you disagree with any part of these terms, you may not access the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use of Services</h2>
            <p className="text-gray-700 mb-4">
              You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use the Services:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
              <li>To transmit, or procure the sending of, any advertising or promotional material without our prior written consent</li>
              <li>To impersonate or attempt to impersonate AutoAgentX, an employee, another user, or any other person or entity</li>
              <li>To engage in any other conduct that restricts or inhibits anyone&apos;s use or enjoyment of the Services</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Intellectual Property</h2>
            <p className="text-gray-700 mb-4">
              The Services and their original content, features, and functionality are and will remain the exclusive property of AutoAgentX and its licensors. The Services are protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used in connection with any product or service without our prior written consent.
            </p>
            <p className="text-gray-700 mb-6">
              You retain ownership of any content you provide to us, but by providing such content, you grant us a non-exclusive, royalty-free, worldwide license to use, modify, and distribute such content in connection with providing the Services.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">
              In no event shall AutoAgentX, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the Services.
            </p>
            <p className="text-gray-700 mb-6">
              Our total liability to you for all damages shall not exceed the amount you paid us for the Services in the twelve (12) months preceding the claim.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Termination</h2>
            <p className="text-gray-700 mb-4">
              We may terminate or suspend your access immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-700 mb-6">
              Upon termination, your right to use the Services will cease immediately. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Changes to Terms</h2>
            <p className="text-gray-700 mb-4">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.
            </p>
            <p className="text-gray-700 mb-6">
              By continuing to access or use our Services after those revisions become effective, you agree to be bound by the revised terms.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms shall be interpreted and governed by the laws of the United States, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Email:</span>
                <a href="mailto:hello@autoagentx.com" className="text-blue-600 hover:text-blue-700">
                  hello@autoagentx.com
                </a>
              </div>
              <p className="text-gray-600 text-sm">
                We typically respond to inquiries within 24-48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Questions About Our Terms?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We&apos;re here to help clarify any questions about our terms of service.
            </p>
            <a
              href="mailto:hello@autoagentx.com"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
