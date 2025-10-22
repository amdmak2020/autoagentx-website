import type { Metadata } from "next";
import { Shield, Mail, Calendar, Lock, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy — AutoAgentX",
  description: "Privacy Policy for AutoAgentX. Learn how we collect, use, and protect your personal information in compliance with GDPR and CCPA regulations.",
  keywords: "privacy policy, data protection, GDPR, CCPA, AutoAgentX, personal information, data security",
  robots: "index, follow",
  openGraph: {
    title: "Privacy Policy — AutoAgentX",
    description: "Privacy Policy for AutoAgentX. Learn how we collect, use, and protect your personal information in compliance with GDPR and CCPA regulations.",
    type: "website",
    url: "https://autoagentx.com/privacy",
  },
};

const PrivacyPage = () => {
  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Privacy Policy
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
            className="prose prose-lg max-w-none"
          >
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
              <p className="text-green-900 font-medium">
                <strong>Your Privacy Matters:</strong> We are committed to protecting your personal information and being transparent about our data practices.
              </p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              AutoAgentX (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website https://autoagentx.com or use our services. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Register for an account or use our services</li>
              <li>Contact us through our website or email</li>
              <li>Subscribe to our newsletter or marketing communications</li>
              <li>Participate in surveys or provide feedback</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-800 mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-4">We may automatically collect certain information about your device and usage patterns, including:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>IP address and location data</li>
              <li>Browser type and version</li>
              <li>Operating system</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Information</h2>
            <p className="text-gray-700 mb-4">We use the information we collect to:</p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Improve, personalize, and expand our services</li>
              <li>Understand and analyze how you use our services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you for customer service and support</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Process transactions and send related information</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
            <div className="bg-blue-50 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-3 mb-3">
                <Lock className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-900">Security Measures Include:</span>
              </div>
              <ul className="list-disc pl-6 text-blue-800 space-y-1">
                <li>SSL encryption for data transmission</li>
                <li>Regular security audits and updates</li>
                <li>Limited access to personal information</li>
                <li>Secure data storage and backup procedures</li>
              </ul>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 mb-4">
              We use cookies and similar tracking technologies to enhance your experience on our website. Cookies are small data files stored on your device that help us:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and usage patterns</li>
              <li>Provide personalized content and advertisements</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p className="text-gray-700 mb-6">
              You can control cookie settings through your browser preferences. However, disabling cookies may affect the functionality of our website.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
            <p className="text-gray-700 mb-4">
              We may use third-party services to help us operate our business and provide services to you. These services may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
            <p className="text-gray-700 mb-6">
              We use services such as Google Analytics, email marketing platforms, and customer relationship management tools. Each of these services has its own privacy policy, which we encourage you to review.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights (GDPR/CCPA Compliance)</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the following rights regarding your personal information:</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Access & Portability</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Request access to your personal data</li>
                  <li>• Receive a copy of your data in a portable format</li>
                  <li>• Know what personal information we have about you</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Control & Correction</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Correct inaccurate personal information</li>
                  <li>• Update your personal information</li>
                  <li>• Object to certain processing activities</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Deletion & Restriction</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Request deletion of your personal data</li>
                  <li>• Restrict processing of your information</li>
                  <li>• Withdraw consent for data processing</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Opt-Out & Communication</h3>
                <ul className="text-gray-700 space-y-1 text-sm">
                  <li>• Opt-out of marketing communications</li>
                  <li>• Unsubscribe from newsletters</li>
                  <li>• Control cookie preferences</li>
                </ul>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
            <p className="text-gray-700 mb-6">
              We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer need your personal information, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
            <p className="text-gray-700 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your personal information.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. You are advised to review this Privacy Policy periodically for any changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Mail className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Email:</span>
                <a href="mailto:hello@autoagentx.com" className="text-blue-600 hover:text-blue-700">
                  hello@autoagentx.com
                </a>
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <Database className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-gray-900">Data Protection Officer:</span>
                <span className="text-gray-700">privacy@autoagentx.com</span>
              </div>
              <p className="text-gray-600 text-sm">
                We typically respond to privacy-related inquiries within 48 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div
          >
            <h2 className="text-3xl font-bold mb-4">
              Questions About Your Privacy?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We&apos;re committed to transparency and protecting your personal information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@autoagentx.com"
                className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </a>
              <a
                href="mailto:privacy@autoagentx.com"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white hover:text-blue-600 transition-colors"
              >
                <Shield className="mr-2 h-5 w-5" />
                Privacy Team
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPage;
