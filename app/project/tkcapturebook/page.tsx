import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  BookOpen,
  MessageSquare,
  ImageIcon,
  ExternalLink,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

export default function TkCaptureBookPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
              <span className="font-bold text-xl">Better.app</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="text-purple-600 border-purple-200 mb-4"
            >
              Featured Project
            </Badge>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">
              Introducing <span className="text-purple-600">tkCaptureBook</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A revolutionary reading management mobile application that
              transforms how you interact with books through camera technology
              and AI.
            </p>
          </div>
        </div>
      </section>

      {/* Smart Frame Feature */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <ImageIcon className="w-6 h-6 text-purple-600" />
                </div>
                <Badge className="bg-purple-100 text-purple-600">
                  Feature 1
                </Badge>
              </div>
              <h2 className="text-3xl font-bold">
                Smart <span className="text-purple-600">Frame</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Create beautiful social media posts with book metadata and
                custom frames. Transform your reading moments into shareable
                content with automatically generated book information, reading
                progress, and personalized designs.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Auto-detect book information from photos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Customizable frame designs and layouts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span>Reading progress and statistics overlay</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <ImageIcon className="w-16 h-16 text-purple-600 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Smart Frame
                    </h3>
                    <p className="text-sm text-gray-600">
                      Beautiful book posts
                    </p>
                    <div className="space-y-2">
                      <div className="h-2 bg-purple-100 rounded w-full"></div>
                      <div className="h-2 bg-purple-100 rounded w-3/4 mx-auto"></div>
                      <div className="h-2 bg-purple-100 rounded w-1/2 mx-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sentence Collection Feature */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-2">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <BookOpen className="w-16 h-16 text-blue-600 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Sentence Collection
                    </h3>
                    <p className="text-sm text-gray-600">
                      Capture meaningful quotes
                    </p>
                    <div className="space-y-3">
                      <Card className="border-blue-200 p-3">
                        <div className="flex items-center space-x-2">
                          <Camera className="w-4 h-4 text-blue-600" />
                          <div className="h-1.5 bg-blue-100 rounded flex-1"></div>
                        </div>
                      </Card>
                      <Card className="border-blue-200 p-3">
                        <div className="flex items-center space-x-2">
                          <BookOpen className="w-4 h-4 text-blue-600" />
                          <div className="h-1.5 bg-blue-100 rounded flex-1"></div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-6 lg:order-1">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <Badge className="bg-blue-100 text-blue-600">Feature 2</Badge>
              </div>
              <h2 className="text-3xl font-bold">
                Sentence <span className="text-blue-600">Collection</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Capture and organize meaningful quotes by photographing book
                pages. Build your personal library of inspiration with
                intelligent text recognition and seamless organization tools.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>OCR technology for accurate text capture</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Smart categorization and tagging</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span>Search and filter your collection</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Book Talk Feature */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                </div>
                <Badge className="bg-green-100 text-green-600">Feature 3</Badge>
              </div>
              <h2 className="text-3xl font-bold">
                Book <span className="text-green-600">Talk</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Chat with AI authors about your collected sentences and get
                personalized recommendations. Engage in meaningful discussions
                about your reading journey with intelligent AI companions.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>AI-powered book discussions</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Personalized reading recommendations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span>Context-aware conversations</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8 aspect-square flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <MessageSquare className="w-16 h-16 text-green-600 mx-auto" />
                    <h3 className="text-lg font-semibold text-gray-800">
                      Book Talk
                    </h3>
                    <p className="text-sm text-gray-600">
                      AI-powered discussions
                    </p>
                    <div className="space-y-3">
                      <div className="bg-green-100 rounded-lg p-3 text-left">
                        <div className="h-2 bg-green-200 rounded w-full mb-1"></div>
                        <div className="h-2 bg-green-200 rounded w-2/3"></div>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3 text-left">
                        <div className="h-2 bg-gray-200 rounded w-3/4 mb-1"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-purple-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Reading Experience?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            tkCaptureBook is currently in development. <br />
            Be the first to know when it launches!
          </p>
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <ExternalLink className="w-4 h-4 mr-2" />
            Coming Soon
          </Button>
        </div>
      </section>
    </div>
  );
}
