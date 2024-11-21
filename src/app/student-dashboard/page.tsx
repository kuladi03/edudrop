"use client"
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Progress from "@/components/ui/progress"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, GraduationCap, LineChart } from 'lucide-react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react'
import Header from '@/components/ui/header'

const data = [
  { name: 'Week 1', progress: 20 },
  { name: 'Week 2', progress: 35 },
  { name: 'Week 3', progress: 50 },
  { name: 'Week 4', progress: 65 },
  { name: 'Week 5', progress: 80 },
  { name: 'Week 6', progress: 90 },
]

export default function StudentDashboard() {
    const [isClient, setIsClient] = useState(false);
  
    useEffect(() => {
      setIsClient(true);
    }, []);
  
    return (
    <div> 
        <Header/>
      <div className="bg-gray-100 text-black" >
        <main className="flex-1 p-6 overflow-y-auto">
          <h1 className="text-2xl font-bold mb-6">Welcome back, Aditya!</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Course Progress</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">75%</div>
                <Progress value={75} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  +2% from last week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Learning Streak</CardTitle>
                <LineChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14 days</div>
                <Progress value={70} className="mt-2" />
                <p className="text-xs text-muted-foreground mt-2">
                  Keep it up! You&apos;re on fire!
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Concept of the Day</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Neural Networks</div>
                <p className="text-xs text-muted-foreground mt-2">
                  Explore the basics of artificial neural networks
                </p>
                <Button className="mt-4 w-full">Start Learning</Button>
              </CardContent>
            </Card>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your progress over the past 6 weeks</CardDescription>
              </CardHeader>
              <CardContent>
                {isClient && (
                    <div style={{ width: '100%', height: '300px' }}>
                        <ResponsiveContainer>
                            <AreaChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Area type="monotone" dataKey="progress" stroke="#8884d8" fill="#8884d8" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>AI Resource Suggestions</CardTitle>
                <CardDescription>Personalized learning materials</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-medium">Introduction to Machine Learning</h3>
                    <p className="text-sm text-muted-foreground">Video course - 2 hours</p>
                    <Button variant="outline" className="mt-2">Watch Now</Button>
                  </li>
                  <li>
                    <h3 className="font-medium">Python for Data Science</h3>
                    <p className="text-sm text-muted-foreground">Interactive tutorial - 3 hours</p>
                    <Button variant="outline" className="mt-2">Start Tutorial</Button>
                  </li>
                  <li>
                    <h3 className="font-medium">Statistical Analysis Techniques</h3>
                    <p className="text-sm text-muted-foreground">E-book - 150 pages</p>
                    <Button variant="outline" className="mt-2">Read Now</Button>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </main>
        </div>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
            <p className="text-xs text-gray-500">© 2024 EduDrop.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link className="text-xs text-blue-600 hover:underline" href="#">Terms of Service</Link>
            <Link className="text-xs text-blue-600 hover:underline" href="#">Privacy</Link>
            </nav>
        </footer>
    </div>
    )
}