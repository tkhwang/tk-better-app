import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function PageHeaderProjectTkbookcapture() {
  return (
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
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">tk</span>
            </div>
            <span className="font-bold text-xl">Better.app</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
