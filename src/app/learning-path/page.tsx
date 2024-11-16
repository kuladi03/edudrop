"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Progress from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, Users, Video } from 'lucide-react';
import Header from '@/components/ui/header'; 
import Link from "next/link";

export default function AdaptiveLearningPaths() {
  const [selectedTab, setSelectedTab] = useState("current-path");

  return (
    <div>
        <Header />
    <div className="container mx-auto p-6 min-h-screen bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-6">Adaptive Learning Paths</h1>
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="current-path" isSelected={selectedTab === "current-path"} onClick={() => setSelectedTab("current-path")}>
            Current Path
          </TabsTrigger>
          <TabsTrigger value="recommended-paths" isSelected={selectedTab === "recommended-paths"} onClick={() => setSelectedTab("recommended-paths")}>
            Recommended Paths
          </TabsTrigger>
          <TabsTrigger value="study-rooms" isSelected={selectedTab === "study-rooms"} onClick={() => setSelectedTab("study-rooms")}>
            Collaborative Study Rooms
          </TabsTrigger>
        </TabsList>

        {/* Current Path Content */}
        <TabsContent className="space-y-4" isActive={selectedTab === "current-path"}>
          <Card>
            <CardHeader>
              <CardTitle>Data Science Fundamentals</CardTitle>
              <CardDescription>Your current learning path</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">Overall Progress</span>
                  <span>65%</span>
                </div>
                <Progress value={65} size="medium" color="bg-blue-500" className="h-2" />
              </div>
              <div className="mt-4 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Current Module: Introduction to Machine Learning</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Supervised Learning</li>
                    <li>Unsupervised Learning</li>
                    <li>Reinforcement Learning</li>
                  </ul>
                </div>
                <Button>Continue Learning</Button>
              </div>
            </CardContent>
          </Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Next Video */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Next Up</CardTitle>
                <Video className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <h3 className="font-medium">Video: Neural Networks Explained</h3>
                <p className="text-sm text-muted-foreground">Duration: 15 minutes</p>
                <Button variant="outline" className="mt-2">Watch Now</Button>
              </CardContent>
            </Card>
            {/* Recommended Practice */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Recommended Practice</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <h3 className="font-medium">Quiz: Machine Learning Basics</h3>
                <p className="text-sm text-muted-foreground">10 questions</p>
                <Button variant="outline" className="mt-2">Start Quiz</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Recommended Paths Content */}
        <TabsContent className="space-y-4" isActive={selectedTab === "recommended-paths"}>
          <Card>
            <CardHeader>
              <CardTitle>Recommended Learning Paths</CardTitle>
              <CardDescription>Based on your interests and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <h3 className="font-medium">Advanced Data Analysis</h3>
                  <p className="text-sm text-muted-foreground">Dive deeper into statistical methods and data visualization</p>
                  <Button variant="outline" className="mt-2">Explore Path</Button>
                </li>
                <li>
                  <h3 className="font-medium">AI and Deep Learning</h3>
                  <p className="text-sm text-muted-foreground">Explore cutting-edge AI technologies and applications</p>
                  <Button variant="outline" className="mt-2">Explore Path</Button>
                </li>
                <li>
                  <h3 className="font-medium">Data Engineering Fundamentals</h3>
                  <p className="text-sm text-muted-foreground">Learn about data pipelines, ETL processes, and big data technologies</p>
                  <Button variant="outline" className="mt-2">Explore Path</Button>
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Collaborative Study Rooms Content */}
        <TabsContent className="space-y-4" isActive={selectedTab === "study-rooms"}>
          <Card>
            <CardHeader>
              <CardTitle>Collaborative Study Rooms</CardTitle>
              <CardDescription>Join or create a virtual study room</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {/* Study Room 1 */}
                <li className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Machine Learning Study Group</h3>
                    <p className="text-sm text-muted-foreground">5 participants | Topic: Neural Networks</p>
                  </div>
                  <Button>Join Room</Button>
                </li>
                {/* Study Room 2 */}
                <li className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Data Visualization Workshop</h3>
                    <p className="text-sm text-muted-foreground">3 participants | Topic: Interactive Dashboards</p>
                  </div>
                  <Button>Join Room</Button>
                </li>
                {/* Study Room 3 */}
                <li className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Python Coding Challenge</h3>
                    <p className="text-sm text-muted-foreground">7 participants | Topic: Algorithms</p>
                  </div>
                  <Button>Join Room</Button>
                </li>
              </ul>
              <Button className="w-full mt-4" variant="outline">
                <Users className="mr-2 h-4 w-4" />
                Create New Study Room
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-white">
        <p className="text-xs text-gray-500">© 2024 EduDrop.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-blue-600 hover:underline" href="#">Terms of Service</Link>
          <Link className="text-xs text-blue-600 hover:underline" href="#">Privacy</Link>
        </nav>
      </footer>
    </div>
  );
}
