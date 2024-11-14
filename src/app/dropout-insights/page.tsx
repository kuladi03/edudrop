'use client'
import { ReactNode, useState } from "react";

// Tabs Component
interface TabsProps {
  children: ReactNode;
  value: string;
  onValueChange: (value: string) => void;
  className?: string;
}

export function Tabs({ children, value, onValueChange, className }: TabsProps) {
  return <div className={`space-y-4 ${className}`}>{children}</div>;
}

// TabsList Component
interface TabsListProps {
  children: ReactNode;
}

export function TabsList({ children }: TabsListProps) {
  return <div className="flex space-x-4">{children}</div>;
}

// TabsTrigger Component
interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
  onClick: () => void;
}

export function TabsTrigger({ children, value, className, onClick }: TabsTriggerProps) {
  return (
    <button
      className={`py-2 px-4 text-sm font-medium rounded-t-lg ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// TabsContent Component
interface TabsContentProps {
  children: ReactNode;
  value: string;
}

export function TabsContent({ children, value }: TabsContentProps) {
  return <div>{children}</div>;
}

// The DropoutInsights Component
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
// import { useState } from 'react';

// Mock data - replace with real data in production
const dropoutByGender = [
  { name: 'Male', dropoutRate: 16 },
  { name: 'Female', dropoutRate: 14 },
  { name: 'Other', dropoutRate: 15 },
]

const dropoutByArea = [
  { name: 'Urban', dropoutRate: 12 },
  { name: 'Semi-Urban', dropoutRate: 15 },
  { name: 'Rural', dropoutRate: 18 },
]

const dropoutByCaste = [
  { name: 'General', dropoutRate: 10 },
  { name: 'OBC', dropoutRate: 15 },
  { name: 'SC', dropoutRate: 18 },
  { name: 'ST', dropoutRate: 20 },
]

const dropoutByStandard = [
  { name: '5th', dropoutRate: 5 },
  { name: '6th', dropoutRate: 7 },
  { name: '7th', dropoutRate: 10 },
  { name: '8th', dropoutRate: 12 },
  { name: '9th', dropoutRate: 15 },
  { name: '10th', dropoutRate: 18 },
]

export default function DropoutInsights() {
  const [selectedTab, setSelectedTab] = useState("gender");

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Detailed Dropout Analysis</CardTitle>
          <CardDescription>Segmented by various demographic factors</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList>
              <TabsTrigger value="gender" onClick={() => setSelectedTab('gender')}>Gender</TabsTrigger>
              <TabsTrigger value="area" onClick={() => setSelectedTab('area')}>Area</TabsTrigger>
              <TabsTrigger value="caste" onClick={() => setSelectedTab('caste')}>Caste</TabsTrigger>
              <TabsTrigger value="standard" onClick={() => setSelectedTab('standard')}>Standard/Age</TabsTrigger>
            </TabsList>

            {/* Only render content for the active tab */}
            {selectedTab === "gender" && (
              <DropoutChart data={dropoutByGender} title="Dropout Rate by Gender" />
            )}
            {selectedTab === "area" && (
              <DropoutChart data={dropoutByArea} title="Dropout Rate by Area" />
            )}
            {selectedTab === "caste" && (
              <DropoutChart data={dropoutByCaste} title="Dropout Rate by Caste" />
            )}
            {selectedTab === "standard" && (
              <DropoutChart data={dropoutByStandard} title="Dropout Rate by Standard" chartType="line" />
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function DropoutChart({ data, title, chartType = 'bar' }: { data: { name: string; dropoutRate: number }[], title: string; chartType?: 'bar' | 'line' }) {
  return (
    <div className="h-[300px]">
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        {chartType === 'bar' ? (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="dropoutRate" fill="#8884d8" />
          </BarChart>
        ) : (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="dropoutRate" stroke="#8884d8" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
}
