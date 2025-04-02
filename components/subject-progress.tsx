"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, ArrowUpRight } from "lucide-react"

// Mock data for subject progress
const subjects = [
  {
    id: 1,
    name: "Object-Oriented Programming",
    code: "CS102",
    progress: 85,
    grade: "A",
    lastStudied: "2 days ago",
    topics: 24,
    topicsCompleted: 20,
  },
  {
    id: 2,
    name: "Data Structures",
    code: "CS103",
    progress: 72,
    grade: "B+",
    lastStudied: "Yesterday",
    topics: 30,
    topicsCompleted: 22,
  },
  {
    id: 3,
    name: "Digital Logic Design",
    code: "EC101",
    progress: 65,
    grade: "B",
    lastStudied: "3 days ago",
    topics: 20,
    topicsCompleted: 13,
  },
  {
    id: 4,
    name: "Engineering Mathematics II",
    code: "MA102",
    progress: 50,
    grade: "C+",
    lastStudied: "5 days ago",
    topics: 25,
    topicsCompleted: 12,
  },
]

export function SubjectProgress() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {subjects.map((subject) => (
          <Card key={subject.id}>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{subject.name}</CardTitle>
                  <CardDescription>{subject.code}</CardDescription>
                </div>
                <Badge>{subject.grade}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Overall Progress</span>
                    <span className="text-sm font-medium">{subject.progress}%</span>
                  </div>
                  <Progress value={subject.progress} />
                </div>

                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center">
                    <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
                    <span>
                      {subject.topicsCompleted} of {subject.topics} topics
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Last studied: </span>
                    <span>{subject.lastStudied}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full">
                  <ArrowUpRight className="mr-1 h-4 w-4" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Semester Progress</CardTitle>
          <CardDescription>Overall progress across all subjects this semester</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="flex items-center justify-center">
              <div className="relative h-40 w-40">
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                  <circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="hsl(var(--primary))"
                    strokeWidth="10"
                    strokeDasharray="283"
                    strokeDashoffset={283 - (283 * 68) / 100}
                    transform="rotate(-90 50 50)"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-3xl font-bold">68%</span>
                  <span className="text-xs text-muted-foreground">Completed</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Strengths</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Object-Oriented Programming concepts</li>
                  <li>Algorithm implementation</li>
                  <li>Problem-solving skills</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Areas for Improvement</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Mathematical foundations</li>
                  <li>Circuit analysis</li>
                  <li>Theoretical concepts</li>
                </ul>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

