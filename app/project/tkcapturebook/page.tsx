import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
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

      {/* Featured Project - tkCaptureBook */}
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

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                    <ImageIcon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Smart Frame</h3>
                    <p className="text-gray-600">
                      Create beautiful social media posts with book metadata and
                      custom frames
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">
                      Sentence Collection
                    </h3>
                    <p className="text-gray-600">
                      Capture and organize meaningful quotes by photographing
                      book pages
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                    <MessageSquare className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Book Talk</h3>
                    <p className="text-gray-600">
                      Chat with AI authors about your collected sentences and
                      get personalized recommendations
                    </p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                <ExternalLink className="w-4 h-4 mr-2" />
                Coming Soon
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-1 shadow-2xl">
                <div className="bg-white rounded-3xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-lg">tkCaptureBook</h4>
                      <Badge className="bg-purple-100 text-purple-600">
                        Beta
                      </Badge>
                    </div>
                    <div className="space-y-4">
                      <Card className="border-purple-200">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-purple-100 rounded-lg"></div>
                            <div className="flex-1">
                              <div className="h-2 bg-purple-100 rounded mb-2"></div>
                              <div className="h-2 bg-purple-100 rounded w-2/3"></div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-blue-200">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <Camera className="w-6 h-6 text-blue-600" />
                            <span className="text-sm text-gray-600">
                              Capture & Collect
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                      <Card className="border-green-200">
                        <CardContent className="p-4">
                          <div className="flex items-center space-x-3">
                            <MessageSquare className="w-6 h-6 text-green-600" />
                            <span className="text-sm text-gray-600">
                              AI Chat Ready
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
