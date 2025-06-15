import { Card } from "@/components/ui/card";
import { FileText, Calendar, User } from "lucide-react";
import Link from "next/link";
import PageHeaderProjectTkBookCaptureTerms from "@/components/header/page-header-project-tkbookcapture-terms";

export default function TkCaptureBookTermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <PageHeaderProjectTkBookCaptureTerms />

      {/* Header */}
      <header className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-xl mb-6">
            <FileText className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Please read these terms carefully before using tkCaptureBook
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
            <Card className="p-8 mb-8 bg-blue-50 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Welcome to tkCaptureBook
              </h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms of Service (&quot;Terms&quot;) govern your use of
                the tkCaptureBook mobile application and related services
                (collectively, the &quot;Service&quot;) operated by tkBetter.app
                (&quot;us&quot;, &quot;we&quot;, or &quot;our&quot;).
              </p>
              <p className="text-gray-700 leading-relaxed mt-4">
                By accessing or using our Service, you agree to be bound by
                these Terms. If you disagree with any part of these terms, then
                you may not access the Service.
              </p>
            </Card>

            {/* Terms Sections */}
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  1. Acceptance of Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By downloading, installing, or using tkCaptureBook, you
                  acknowledge that you have read, understood, and agree to be
                  bound by these Terms of Service and our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  2. Description of Service
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  tkCaptureBook is a mobile application that allows users to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    Create social media posts with book metadata and custom
                    frames
                  </li>
                  <li>
                    Capture and organize quotes from books using camera
                    technology
                  </li>
                  <li>
                    Engage with AI-powered book discussions and recommendations
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  3. User Responsibilities
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As a user of tkCaptureBook, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>
                    Use the Service in accordance with applicable laws and
                    regulations
                  </li>
                  <li>
                    Respect intellectual property rights when capturing and
                    sharing book content
                  </li>
                  <li>
                    Not use the Service for any unlawful or prohibited
                    activities
                  </li>
                  <li>Maintain the security of your account credentials</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  4. Intellectual Property
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The tkCaptureBook application, including its design, features,
                  and functionality, is owned by tkBetter.app and is protected
                  by copyright and other intellectual property laws.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Users retain ownership of the content they create using the
                  Service, but grant us a license to process and display such
                  content as necessary to provide the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  5. Privacy and Data Protection
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your privacy is important to us. Please review our Privacy
                  Policy, which also governs your use of the Service, to
                  understand our practices.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  6. Limitation of Liability
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  To the fullest extent permitted by law, tkBetter.app shall not
                  be liable for any indirect, incidental, special,
                  consequential, or punitive damages resulting from your use of
                  the Service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  7. Termination
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may terminate or suspend your access to the Service
                  immediately, without prior notice or liability, for any reason
                  whatsoever, including without limitation if you breach the
                  Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  8. Changes to Terms
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We reserve the right to modify or replace these Terms at any
                  time. If a revision is material, we will try to provide at
                  least 30 days notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  9. Contact Information
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  If you have any questions about these Terms of Service, please
                  contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> tkhwang.dev@gmail.com
                    <br />
                    <strong>Website:</strong> tkBetter.app
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
                  terms of service
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
