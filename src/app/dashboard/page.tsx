'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectItem } from "@/components/ui/select";
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';
import DropoutInsights from '../dropout-insights/page';
import SolutionPathways from '../solution-pathways/page';
import Header from '@/components/ui/header'; 

// Mock data - replace with real data in production
const overviewData = {
  totalStudents: 10000,
  atRiskStudents: 1500,
  dropoutRate: 15,
};

export default function Dashboard() {
  const [selectedState, setSelectedState] = useState('All India');
  const [selectedTab, setSelectedTab] = useState("insights");

  return (
    <div className="flex flex-col">
      {/* Include Header at the top */}
      <Header />

      {/* Main content */}
      <div className="flex flex-col justify-center space-y-4 p-6 shadow-lg bg-white">
        {/* State Selector */}
        <Select defaultValue={selectedState} onValueChange={setSelectedState}>
          <SelectItem value="All India">All India</SelectItem>
          <SelectItem value="Maharashtra">Maharashtra</SelectItem>
          <SelectItem value="Karnataka">Karnataka</SelectItem>
          <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
        </Select>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Total Students</CardTitle>
              <Users className="h-4 w-4 text-black" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-black">{overviewData.totalStudents.toLocaleString()}</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">At-Risk Students</CardTitle>
              <AlertTriangle className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-black">{overviewData.atRiskStudents.toLocaleString()}</div>
              <p className="text-xs text-black">
                {((overviewData.atRiskStudents / overviewData.totalStudents) * 100).toFixed(1)}% of total
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-black">Dropout Rate</CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-black">{overviewData.dropoutRate}%</div>
              <p className="text-xs text-black">
                {overviewData.dropoutRate > 10 ? 'Above' : 'Below'} national average
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tabs for Insights and Solutions */}
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
          <div className="flex justify-center space-x-4">
            <TabsList>
              <TabsTrigger
                value="insights"
                isSelected={selectedTab === 'insights'} // Add isSelected prop to check if this tab is selected
                onClick={() => setSelectedTab('insights')}
                className={`text-lg font-medium ${selectedTab === 'insights' ? 'text-blue-600' : 'text-black'}`}
              >
                Dropout Insights
              </TabsTrigger>

              <TabsTrigger
                value="solutions"
                isSelected={selectedTab === 'solutions'} // Add isSelected prop to check if this tab is selected
                onClick={() => setSelectedTab('solutions')}
                className={`text-lg font-medium ${selectedTab === 'solutions' ? 'text-blue-600' : 'text-black'}`}
              >
                Solution Pathways
              </TabsTrigger>
            </TabsList>
          </div>

          {/* Tab Content */}
          <TabsContent isActive={selectedTab === "insights"}>
            {selectedTab === "insights" && <DropoutInsights />}
          </TabsContent>

          <TabsContent isActive={selectedTab === "solutions"}>
            {selectedTab === "solutions" && <SolutionPathways />}
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
