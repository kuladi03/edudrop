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
  onClick: () => void; // Make sure the click handler is passed down correctly
}

export function TabsTrigger({ children, value, className, onClick }: TabsTriggerProps) {
  return (
    <button
      className={`py-2 px-4 text-sm font-medium rounded-t-lg ${className}`}
      onClick={onClick} // Handle click event here
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

// SolutionPathways Component

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookOpen, GraduationCap, HeartHandshake, Lightbulb } from 'lucide-react';

export default function SolutionPathways() {
  const [selectedTab, setSelectedTab] = useState("government");

  const handleTabChange = (value: string) => {
    setSelectedTab(value);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Personalized Intervention Strategies</CardTitle>
          <CardDescription>Tailored solutions to reduce dropout risk</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={selectedTab} onValueChange={handleTabChange} className="space-y-4">
            <TabsList>
              <TabsTrigger value="government" onClick={() => handleTabChange("government")}>Government Schemes</TabsTrigger>
              <TabsTrigger value="scholarships" onClick={() => handleTabChange("scholarships")}>Scholarships</TabsTrigger>
              <TabsTrigger value="learning" onClick={() => handleTabChange("learning")}>Learning Paths</TabsTrigger>
              <TabsTrigger value="support" onClick={() => handleTabChange("support")}>Support Programs</TabsTrigger>
            </TabsList>
            <TabsContent value="government">
              <GovernmentSchemes />
            </TabsContent>
            <TabsContent value="scholarships">
              <Scholarships />
            </TabsContent>
            <TabsContent value="learning">
              <LearningPaths />
            </TabsContent>
            <TabsContent value="support">
              <SupportPrograms />
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}

function GovernmentSchemes() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Government Educational Support Programs</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <GraduationCap className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Sarva Shiksha Abhiyan (SSA)</h4>
            <p className="text-sm text-muted-foreground">Comprehensive program for universal elementary education</p>
          </div>
        </li>
        <li className="flex items-start">
          <GraduationCap className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Mid-Day Meal Scheme</h4>
            <p className="text-sm text-muted-foreground">Provides nutritious meals to improve attendance and retention</p>
          </div>
        </li>
        <li className="flex items-start">
          <GraduationCap className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Rashtriya Madhyamik Shiksha Abhiyan (RMSA)</h4>
            <p className="text-sm text-muted-foreground">Enhances access to secondary education</p>
          </div>
        </li>
      </ul>
      <Button>Explore More Schemes</Button>
    </div>
  );
}

function Scholarships() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Scholarship Opportunities</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <HeartHandshake className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">National Means-cum-Merit Scholarship</h4>
            <p className="text-sm text-muted-foreground">For economically weaker students with good academic records</p>
          </div>
        </li>
        <li className="flex items-start">
          <HeartHandshake className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Pre-Matric Scholarships for SC/ST Students</h4>
            <p className="text-sm text-muted-foreground">Financial assistance for students from scheduled castes and tribes</p>
          </div>
        </li>
        <li className="flex items-start">
          <HeartHandshake className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">State-Specific Merit Scholarships</h4>
            <p className="text-sm text-muted-foreground">Varies by state, rewards academic excellence</p>
          </div>
        </li>
      </ul>
      <Button>Find Scholarships</Button>
    </div>
  );
}

function LearningPaths() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Personalized Learning Paths</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <BookOpen className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Adaptive Learning Modules</h4>
            <p className="text-sm text-muted-foreground">AI-powered lessons that adjust to individual learning speeds</p>
          </div>
        </li>
        <li className="flex items-start">
          <BookOpen className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Skill-Based Learning Tracks</h4>
            <p className="text-sm text-muted-foreground">Focus on practical skills aligned with career interests</p>
          </div>
        </li>
        <li className="flex items-start">
          <BookOpen className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Peer-Assisted Study Sessions</h4>
            <p className="text-sm text-muted-foreground">Collaborative learning groups for challenging subjects</p>
          </div>
        </li>
      </ul>
      <Button>Customize Learning Path</Button>
    </div>
  );
}

function SupportPrograms() {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium">Additional Support Programs</h3>
      <ul className="space-y-2">
        <li className="flex items-start">
          <Lightbulb className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Mentorship Program</h4>
            <p className="text-sm text-muted-foreground">One-on-one guidance from experienced mentors</p>
          </div>
        </li>
        <li className="flex items-start">
          <Lightbulb className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Career Counseling</h4>
            <p className="text-sm text-muted-foreground">Explore future career paths and set goals</p>
          </div>
        </li>
        <li className="flex items-start">
          <Lightbulb className="mr-2 h-5 w-5 mt-0.5" />
          <div>
            <h4 className="font-medium">Counseling and Well-being Support</h4>
            <p className="text-sm text-muted-foreground">Mental health resources to reduce stress</p>
          </div>
        </li>
      </ul>
      <Button>Get More Support</Button>
    </div>
  );
}
