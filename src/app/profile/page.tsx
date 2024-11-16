"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import Progress from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { BarChart, BookOpen, GraduationCap, Mail, MapPin, Phone, User } from 'lucide-react'
import Header from '@/components/ui/header'
import Link from 'next/link'

const userData = {
  name: "Alex Johnson",
  email: "alex.johnson@example.com",
  phone: "+91 98765 43210",
  address: "123 Education St, Knowledge City, IN 400001",
  avatar: "/placeholder.svg?height=100&width=100",
  grade: "10th Standard",
  school: "Bright Future High School",
  overallProgress: 75,
  subjects: [
    { name: "Mathematics", progress: 80 },
    { name: "Science", progress: 75 },
    { name: "English", progress: 85 },
    { name: "Social Studies", progress: 70 },
  ],
  recentAchievements: [
    "Completed Python Basics course",
    "Achieved 90% in Mid-term Mathematics exam",
    "Participated in Science Fair project",
  ],
}

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false)
  const [selectedTab, setSelectedTab] = useState("details");

  return (
    <div>
      <Header/>
    <div className="container mx-auto p-6 min-h-screen bg-gray-100 text-black">
      <h1 className="text-3xl font-bold mb-6">Student Profile</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar className="w-20 h-20">
                <AvatarImage src={userData.avatar} alt={userData.name} />
                <AvatarFallback>{userData.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div>
                <CardTitle>{userData.name}</CardTitle>
                <CardDescription>{userData.grade}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <span>{userData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <span>{userData.phone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span>{userData.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <GraduationCap className="w-4 h-4 text-muted-foreground" />
                <span>{userData.school}</span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Academic Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Overall Progress</span>
                  <span className="text-sm font-medium">{userData.overallProgress}%</span>
                </div>
                <Progress value={userData.overallProgress} className="h-2" />
              </div>
              {userData.subjects.map((subject, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">{subject.name}</span>
                    <span className="text-sm font-medium">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="mt-6">
        <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
          <TabsList>
            <TabsTrigger value="details" isSelected={selectedTab === "details"} onClick={() => setSelectedTab("details")}>
                Personal Details
                </TabsTrigger>
                <TabsTrigger value="achievements" isSelected={selectedTab === "achievements"} onClick={() => setSelectedTab("achievements")}>
                Recent Achievements
                </TabsTrigger>
                <TabsTrigger value="recommendations" isSelected={selectedTab === "recommendations"} onClick={() => setSelectedTab("recommendations")}>
                Recommendations
                </TabsTrigger>
                </TabsList>
                <TabsContent isActive={selectedTab === "details"}>
            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
                <CardDescription>Update your personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input id="name" defaultValue={userData.name} disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={userData.email} disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input id="phone" defaultValue={userData.phone} disabled={!isEditing} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Textarea id="address" defaultValue={userData.address} disabled={!isEditing} />
                    </div>
                  </div>
                  <Button type="button" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent isActive={selectedTab === "achievements"}>
            <Card>
              <CardHeader>
                <CardTitle>Recent Achievements</CardTitle>
                <CardDescription>Your latest academic accomplishments</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {userData.recentAchievements.map((achievement, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <GraduationCap className="w-4 h-4 text-muted-foreground" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent isActive={selectedTab === "recommendations"}>
            <Card>
              <CardHeader>
                <CardTitle>Personalized Recommendations</CardTitle>
                <CardDescription>Suggested actions to improve your academic performance</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-2">
                    <BookOpen className="w-5 h-5 text-muted-foreground" />
                    <span>Review your Mathematics notes for better understanding.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <User className="w-5 h-5 text-muted-foreground" />
                    <span>Participate in peer study groups to enhance learning.</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <BarChart className="w-5 h-5 text-muted-foreground" />
                    <span>Focus on improving your Science grades with regular practice.</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
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
