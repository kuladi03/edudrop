'use client'
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';
import DropoutInsights from '../dropout-insights/page';
import { useRouter } from 'next/navigation';
import SolutionPathways from '../solution-pathways/page'

// Mock data - replace with real data in production
const overviewData = {
  totalStudents: 10000,
  atRiskStudents: 1500,
  dropoutRate: 15,
};

export default function Dashboard() {
  const [selectedState, setSelectedState] = useState('All India');
  const [selectedTab, setSelectedTab] = useState("insights");
  const router = useRouter();

  const handleTabClick = (value: string) => {
    setSelectedTab(value);
    if (value === 'insights') {
      router.push('/dropout-insights');
    } else if (value === 'solutions') {
      router.push('/solution-pathways');
    }
  };

  return (
    <div className="flex flex-col justify-center space-y-4 bg-white p-6 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-900">EduDrop Dashboard</h1>

      {/* State Selector */}
      <div className="mb-6">
        <Select onValueChange={setSelectedState} defaultValue={selectedState}>
          <SelectTrigger className="w-[180px]">
            <SelectValue>{selectedState || "Select State"}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="All India">All India</SelectItem>
            <SelectItem value="Maharashtra">Maharashtra</SelectItem>
            <SelectItem value="Karnataka">Karnataka</SelectItem>
            <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Total Students</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{overviewData.totalStudents.toLocaleString()}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">At-Risk Students</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{overviewData.atRiskStudents.toLocaleString()}</div>
            <p className="text-xs text-gray-600">
              {((overviewData.atRiskStudents / overviewData.totalStudents) * 100).toFixed(1)}% of total
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-800">Dropout Rate</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{overviewData.dropoutRate}%</div>
            <p className="text-xs text-gray-600">
              {overviewData.dropoutRate > 10 ? 'Above' : 'Below'} national average
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs for Insights and Solutions */}
      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="insights" onClick={() => handleTabClick('insights')} className="text-lg font-medium text-gray-800">
            Dropout Insights
          </TabsTrigger>
          <TabsTrigger value="solutions" onClick={() => handleTabClick('solutions')} className="text-lg font-medium text-gray-800">
            Solution Pathways
          </TabsTrigger>
        </TabsList>

        {/* Tab Content */}
        <TabsContent value="insights">
          {/* Only show Dropout Insights content when the 'insights' tab is selected */}
          {selectedTab === "insights" && <DropoutInsights />}
        </TabsContent>

        <TabsContent value="solutions">
          {/* Content for Solution Pathways - This can be expanded with relevant content */}
          {selectedTab === "solutions" && <SolutionPathways/>}
        </TabsContent>
      </Tabs>
    </div>
  );
}
