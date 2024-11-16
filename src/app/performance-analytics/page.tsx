'use client';
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Progress from "@/components/ui/progress";
import {
  BarChart,
  LineChart,
  PieChart,
  Bar,
  Line,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Header from "@/components/ui/header";
import Link from "next/link";

// Define types for data
interface ProgressData {
  subject: string;
  score: number;
}

interface TimeSpentData {
  name: string;
  value: number;
}

interface WeeklyProgressData {
  name: string;
  progress: number;
}

interface Risk {
  value: number;
  label: string;
}

export default function PerformanceAnalytics() { 
  const [progressData, setProgressData] = useState<ProgressData[]>([]);
  const [timeSpentData, setTimeSpentData] = useState<TimeSpentData[]>([]);
  const [weeklyProgressData, setWeeklyProgressData] = useState<WeeklyProgressData[]>([]);
  const [overallRisk, setOverallRisk] = useState<Risk>({ value: 0, label: "Loading..." });
  const [keyFactors, setKeyFactors] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<string[]>([]);

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      setProgressData([
        { subject: "Math", score: 85 },
        { subject: "Science", score: 75 },
        { subject: "History", score: 90 },
        { subject: "Language", score: 80 },
      ]);

      setTimeSpentData([
        { name: "Math", value: 30 },
        { name: "Science", value: 25 },
        { name: "History", value: 20 },
        { name: "Language", value: 25 },
      ]);

      setWeeklyProgressData([
        { name: "Week 1", progress: 20 },
        { name: "Week 2", progress: 35 },
        { name: "Week 3", progress: 50 },
        { name: "Week 4", progress: 65 },
        { name: "Week 5", progress: 80 },
        { name: "Week 6", progress: 90 },
      ]);

      setOverallRisk({ value: 20, label: "Low" });

      setKeyFactors([
        "Consistent attendance",
        "Good assignment completion rate",
        "Active participation in discussions",
        "Regular use of learning resources",
      ]);

      setRecommendations([
        "Continue maintaining your current study habits",
        "Consider joining a study group for additional support",
        "Explore advanced topics in your areas of strength",
      ]);
    };

    fetchData();
  }, []);

  return (
    <div>
    <Header/>
        <div className="container mx-auto p-6 min-h-screen bg-gray-100 text-black">
        <h1 className="text-3xl font-bold mb-6">Performance Analytics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <Card>
            <CardHeader>
                <CardTitle>Subject Progress</CardTitle>
                <CardDescription>Your progress in different subjects</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                <BarChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="subject" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="score" fill="#8884d8" />
                </BarChart>
                </ResponsiveContainer>
            </CardContent>
            </Card>
            <Card>
            <CardHeader>
                <CardTitle>Time Spent Distribution</CardTitle>
                <CardDescription>How yo&apos;ve allocated your study time</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie dataKey="value" data={timeSpentData} fill="#8884d8" label />
                    <Tooltip />
                </PieChart>
                </ResponsiveContainer>
            </CardContent>
            </Card>
        </div>
        <Card>
            <CardHeader>
            <CardTitle>Weekly Progress</CardTitle>
            <CardDescription>Your learning progress over the past 6 weeks</CardDescription>
            </CardHeader>
            <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="progress" stroke="#8884d8" />
                </LineChart>
            </ResponsiveContainer>
            </CardContent>
        </Card>
        <Card>
            <CardHeader>
            <CardTitle>Dropout Risk Assessment</CardTitle>
            <CardDescription>Based on your current performance and engagement</CardDescription>
            </CardHeader>
            <CardContent>
            <div className="space-y-4">
                <div>
                <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall Risk</span>
                    <span className="text-sm font-medium">{overallRisk.label}</span>
                </div>
                <Progress value={overallRisk.value} className="h-2" />
                </div>
                <div>
                <h3 className="text-lg font-medium mb-2">Key Factors</h3>
                <ul className="list-disc pl-5 space-y-1">
                    {keyFactors.map((factor, index) => (
                    <li key={index}>{factor}</li>
                    ))}
                </ul>
                </div>
                <div>
                <h3 className="text-lg font-medium mb-2">Recommendations</h3>
                <ul className="list-disc pl-5 space-y-1">
                    {recommendations.map((recommendation, index) => (
                    <li key={index}>{recommendation}</li>
                    ))}
                </ul>
                </div>
            </div>
            </CardContent>
        </Card>
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
