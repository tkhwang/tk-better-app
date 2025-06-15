import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Camera,
  BookOpen,
  MessageSquare,
  ImageIcon,
  ChevronDown,
  Github,
  Mail,
} from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">tk</span>
            </div>
            <span className="font-bold text-xl">Better.app</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-blue-600 font-medium">
              Home
            </Link>
            <Link
              href="#projects"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge
                variant="outline"
                className="text-blue-600 border-blue-200"
              >
                One-Person Development
              </Badge>
              <div className="space-y-6">
                <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                  Creating <span className="text-blue-600">better</span>{" "}
                  fullstack services with{" "}
                  <span className="text-blue-600">AI-powered creativity</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Solo developer specializing in innovative mobile applications.
                  Currently building the tkCapture series - camera-powered apps
                  that enhance your daily experiences.
                </p>
              </div>
            </div>
            <div className="relative">
              {/* Mobile App Mockup */}
              <div className="relative mx-auto w-80 h-[600px]">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
                    {/* Status Bar */}
                    <div className="bg-gray-900 h-8 flex items-center justify-center">
                      <div className="w-20 h-1 bg-white rounded-full"></div>
                    </div>

                    {/* App Content */}
                    <div className="p-6 space-y-6">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <h3 className="text-xl font-bold">tkCaptureBook</h3>
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                          <Camera className="w-4 h-4 text-purple-600" />
                        </div>
                      </div>

                      {/* Book Frame Feature */}
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <ImageIcon className="w-5 h-5 text-purple-600" />
                          <span className="text-sm font-medium text-purple-600">
                            Smart Frame
                          </span>
                        </div>
                        <div className="bg-white rounded-xl p-3 shadow-sm">
                          <div className="flex items-center space-x-3">
                            <div className="w-12 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded"></div>
                            <div className="flex-1">
                              <div className="h-2 bg-gray-200 rounded mb-2"></div>
                              <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Sentence Collection */}
                      <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <BookOpen className="w-5 h-5 text-blue-600" />
                          <span className="text-sm font-medium text-blue-600">
                            Collected Quotes
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="h-2 bg-blue-100 rounded mb-1"></div>
                            <div className="h-2 bg-blue-100 rounded w-4/5"></div>
                          </div>
                          <div className="bg-white rounded-lg p-3 shadow-sm">
                            <div className="h-2 bg-green-100 rounded mb-1"></div>
                            <div className="h-2 bg-green-100 rounded w-3/5"></div>
                          </div>
                        </div>
                      </div>

                      {/* Book Talk Feature */}
                      <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-2xl p-4">
                        <div className="flex items-center space-x-2 mb-3">
                          <MessageSquare className="w-5 h-5 text-green-600" />
                          <span className="text-sm font-medium text-green-600">
                            Book Talk
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-white rounded-lg p-2 ml-8 shadow-sm">
                            <div className="h-2 bg-gray-200 rounded"></div>
                          </div>
                          <div className="bg-green-600 rounded-lg p-2 mr-8 shadow-sm">
                            <div className="h-2 bg-green-400 rounded"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-600 rounded-2xl flex items-center justify-center shadow-lg animate-pulse">
                  <Camera className="w-8 h-8 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="absolute top-1/2 -right-6 w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center shadow-lg">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <ChevronDown className="w-6 h-6 text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* tkCapture Series Overview */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              The <span className="text-blue-600">tkCapture</span> Series
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of camera-powered mobile applications designed to
              enhance your daily experiences through innovative technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Link href="/project/tkcapturebook">
              <Card className="border-purple-200 hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                    <BookOpen className="w-6 h-6 text-purple-600" />
                  </div>
                  <CardTitle className="text-purple-600">tkCaptureBook</CardTitle>
                  <CardDescription>Reading Management App</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Transform your reading experience with smart photo frames,
                    sentence collection, and AI-powered book discussions.
                  </p>
                  <Badge className="bg-purple-100 text-purple-600">
                    In Development
                  </Badge>
                </CardContent>
              </Card>
            </Link>

            <Card className="border-gray-200 opacity-75">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-gray-400" />
                </div>
                <CardTitle className="text-gray-400">tkCapture[Next]</CardTitle>
                <CardDescription>Coming Soon</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  The next innovative camera application in the tkCapture
                  series. Stay tuned for more details.
                </p>
                <Badge
                  variant="outline"
                  className="text-gray-400 border-gray-300"
                >
                  Planned
                </Badge>
              </CardContent>
            </Card>

            <Card className="border-gray-200 opacity-75">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                  <Camera className="w-6 h-6 text-gray-400" />
                </div>
                <CardTitle className="text-gray-400">
                  tkCapture[Future]
                </CardTitle>
                <CardDescription>Future Release</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">
                  More exciting camera-powered applications are in the pipeline.
                  The future of mobile photography awaits.
                </p>
                <Badge
                  variant="outline"
                  className="text-gray-400 border-gray-300"
                >
                  Concept
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Let's Build Something <span className="text-blue-600">Better</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Interested in collaborating or learning more about the tkCapture
            series? I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
            <Button size="lg" variant="outline">
              <Github className="w-4 h-4 mr-2" />
              View on GitHub
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">tk</span>
              </div>
              <span className="font-bold text-xl">Better.app</span>
            </div>
            <p className="text-gray-400 text-sm">
              2024 tkBetter.app. Creating better mobile experiences, one app at
              a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
