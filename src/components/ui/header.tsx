import Link from 'next/link';
import { GraduationCap, User, ArrowUpRight } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* Left Section: Logo and Navigation */}
      <div className="flex items-center space-x-8">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-black" />
          <span className="text-2xl text-black font-semibold">EduDrop</span>
        </Link>

        <nav className="flex space-x-6 text-black">
          <Link href="/dashboard" className="text-lg hover:text-indigo-300 transition-colors">Home</Link>
          <Link href="/learning-path" className="text-lg hover:text-indigo-300 transition-colors">Learning Path</Link>
          <Link href="/performance-analytics" className="text-lg hover:text-indigo-300 transition-colors">Performance Analytics</Link>
        </nav>
      </div>

      {/* Right Section: Links and Profile */}
      <div className="flex items-center space-x-6 text-black">
        <Link href="/DashLearn" className="flex items-center text-lg hover:text-indigo-300 transition-colors">
          <span className="mr-2">DashLearn</span>
          <ArrowUpRight className="h-5 w-5" />
        </Link>

        <Link href="/profile" className="flex items-center">
          <User className="h-8 w-8 text-black hover:text-indigo-300 transition-colors" />
        </Link>
      </div>
    </header>
  );
}
