'use client';

import { useState, ChangeEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GraduationCap, ArrowRight, BookOpen, Users, TrendingUp } from "lucide-react";

export default function LandingPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleLogin = () => {
    if (!email || !password) {
      setError("Please enter both email and password.");
    } else {
      setError("");
      console.log("Logging in with", { email, password });
      router.push("/dashboard");
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-500 to-teal-500">
      <header className="px-4 lg:px-6 h-16 flex items-center bg-white shadow-md">
        <Link className="flex items-center justify-center" href="#">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <span className="ml-2 text-3xl font-bold text-blue-600">EduDrop</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link className="text-sm font-medium text-blue-600 hover:underline" href="#features">Features</Link>
          <Link className="text-sm font-medium text-blue-600 hover:underline" href="#about">About</Link>
          <Link className="text-sm font-medium text-blue-600 hover:underline" href="#contact">Contact</Link>
        </nav>
      </header>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* Left side - Intro section */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl text-white">
                    Empowering Students, Reducing Dropouts
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    EduDrop is revolutionizing education by providing personalized learning paths,
                    AI-driven resources, and collaborative tools to boost student engagement and success.
                  </p>
                </div>
                <div className="flex flex-col gap-4 min-[400px]:flex-row">
                  <Link href="/dashboard">
                    <Button className="inline-flex items-center justify-center text-white bg-blue-700 hover:bg-blue-800">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="#learn-more">
                    <Button variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right side - Login Form */}
              <div className="flex flex-col justify-center space-y-4 bg-white p-6 rounded-lg shadow-lg">
                <div className="space-y-2">
                  <h2 className="text-2xl font-bold text-gray-900">Login</h2>
                  <p className="text-gray-900">
                    Access your personalized learning experience
                  </p>
                </div>
                <div className="space-y-4">
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <div className="flex flex-col space-y-1">  
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                    <Input
                      id="email"
                      placeholder="Email Address"
                      required
                      type="email"
                      value={email}
                      onChange={handleEmailChange}
                      className="border-gray-300 focus:ring-blue-500"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">  
                    <label htmlFor="password" className="text-sm font-medium text-gray-700">Password</label>
                    <Input
                      id="password"
                      placeholder="Password"
                      required
                      type="password"
                      value={password}
                      onChange={handlePasswordChange}
                      className="border-gray-300 focus:ring-blue-500"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 text-white hover:bg-blue-700" onClick={handleLogin}>
                    Login
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="learn-more" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <BookOpen className="h-12 w-12 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Personalized Learning</h2>
                <p className="text-gray-900">
                  Tailored learning paths adapt to each student`&apos`s unique needs and pace.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <Users className="h-12 w-12 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Collaborative Study</h2>
                <p className="text-gray-900">
                  Join virtual study rooms and learn together with peers.
                </p>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <TrendingUp className="h-12 w-12 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Performance Analytics</h2>
                <p className="text-gray-900">
                  Track progress and identify areas for improvement with detailed insights.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2024 EduDrop. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-blue-600 hover:underline" href="#">Terms of Service</Link>
          <Link className="text-xs text-blue-600 hover:underline" href="#">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
