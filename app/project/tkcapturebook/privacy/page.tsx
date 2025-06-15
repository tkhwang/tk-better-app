import { Card } from "@/components/ui/card";
import { ArrowLeft, Shield, Calendar, User } from "lucide-react";
import Link from "next/link";

export default function TkCaptureBookPrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-10 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/project/tkcapturebook"
            className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to [project] tkCaptureBook
          </Link>
        </div>
      </nav>

      {/* Header */}
      <header className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-xl mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how we collect, use, and protect your personal information
          </p>
          <div className="flex items-center justify-center space-x-6 mt-6">
            <div className="flex items-center text-gray-500">
              <Calendar className="w-4 h-4 mr-2" />
              <span className="text-sm">Last updated: December 2024</span>
            </div>
            <div className="flex items-center text-gray-500">
              <User className="w-4 h-4 mr-2" />
              <span className="text-sm">tkBetter.app</span>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <Card className="p-8 mb-8 bg-green-50 border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Your Privacy Matters
              </h2>
              <p className="text-gray-700 leading-relaxed">
                At tkBetter.app, we are committed to protecting your privacy and
                ensuring the security of your personal information. This Privacy
                Policy explains how we collect, use, disclose, and safeguard
                your information when you use the tkCaptureBook mobile
                application.
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By using tkCaptureBook, you consent to the data practices
                described in this Privacy Policy. Please read this policy
                carefully to understand our views and practices regarding your
                personal data.
              </p>
            </Card>

            {/* Privacy Sections */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect and process the following types of information:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Personal Information
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>Account registration details (email, username)</li>
                      <li>Profile information you choose to provide</li>
                      <li>Communication preferences</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      Usage Data
                    </h3>
                    <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                      <li>App usage patterns and interactions</li>
                      <li>Book quotes and content you capture</li>
                      <li>AI conversation history for Book Talk feature</li>
                      <li>Device information and technical data</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. How We Use Your Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We use the collected information for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Provide and maintain the tkCaptureBook service</li>
                  <li>
                    Process and store your book quotes and captured content
                  </li>
                  <li>
                    Power AI-driven features like Book Talk recommendations
                  </li>
                  <li>Improve app functionality and user experience</li>
                  <li>Send important service updates and notifications</li>
                  <li>Provide customer support and respond to inquiries</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. Data Storage and Security
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We implement appropriate technical and organizational security
                  measures to protect your personal information against
                  unauthorized access, alteration, disclosure, or destruction.
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    Security Measures Include:
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security assessments and updates</li>
                    <li>
                      Limited access to personal data on a need-to-know basis
                    </li>
                    <li>
                      Secure cloud infrastructure with industry-standard
                      protocols
                    </li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Data Sharing and Disclosure
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal
                  information to third parties without your explicit consent,
                  except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    With your explicit consent for specific features or
                    integrations
                  </li>
                  <li>To comply with legal obligations or court orders</li>
                  <li>
                    To protect our rights, property, or safety, or that of our
                    users
                  </li>
                  <li>
                    With trusted service providers who assist in app operations
                    (under strict confidentiality agreements)
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Your Privacy Rights
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  You have the following rights regarding your personal data:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-blue-50 border-blue-200">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Access & Portability
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Request a copy of your personal data
                    </p>
                  </Card>
                  <Card className="p-4 bg-green-50 border-green-200">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Correction
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Update or correct inaccurate information
                    </p>
                  </Card>
                  <Card className="p-4 bg-yellow-50 border-yellow-200">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Deletion
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Request deletion of your account and data
                    </p>
                  </Card>
                  <Card className="p-4 bg-purple-50 border-purple-200">
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Restriction
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Limit how we process your information
                    </p>
                  </Card>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Third-Party Services
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  tkCaptureBook may integrate with third-party services to
                  enhance functionality:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>AI language models for Book Talk conversations</li>
                  <li>Cloud storage services for data backup</li>
                  <li>Analytics services to improve app performance</li>
                  <li>
                    Social media platforms for content sharing (with your
                    consent)
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed mt-4">
                  These services have their own privacy policies, and we
                  encourage you to review them when using integrated features.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Children&apos;s Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  tkCaptureBook is designed for users aged 13 and above. We do
                  not knowingly collect personal information from children under
                  13. If we become aware that we have collected such
                  information, we will take steps to delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Changes to This Privacy Policy
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may update this Privacy Policy from time to time to reflect
                  changes in our practices or legal requirements. We will notify
                  you of any material changes through the app or via email.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Contact Us
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about this Privacy Policy or wish to
                  exercise your privacy rights, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> tkhwang.dev@gmail.com
                    <br />
                    <strong>Website:</strong> tkBetter.app
                    <br />
                    <strong>Response Time:</strong> We aim to respond within 48
                    hours
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">tk</span>
              </div>
              <div className="flex items-center space-x-2">
                <Link
                  href="/"
                  className="font-bold text-xl hover:text-blue-400 transition-colors"
                >
                  Better.app
                </Link>
                <span className="text-gray-400">&gt;</span>
                <Link
                  href="/project/tkcapturebook"
                  className="font-semibold text-lg hover:text-blue-400 transition-colors"
                >
                  tkCaptureBook
                </Link>
                <span className="text-gray-400">&gt;</span>
                <span className="font-medium text-gray-300">
                  privacy policy
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">2025 tkBetter.app.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
