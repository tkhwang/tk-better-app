import Link from "next/link";

export default function PageHeader() {
  return (
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
  );
}
