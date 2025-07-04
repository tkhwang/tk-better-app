import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export function HeaderProjectTkcaptureBook() {
  return (
    <nav className="sticky top-0 z-10 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <Link
          href="/"
          className="inline-flex items-center text-gray-600 hover:text-purple-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
      </div>
    </nav>
  );
}
