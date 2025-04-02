"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Plus } from "lucide-react"

// Mock data for recommended topics
const recommendedTopics = [
  {
    id: 1,
    title: "Circuit Analysis Fundamentals",
    description: "Learn about Kirchhoff's laws, node voltage method, and mesh current analysis.",
    difficulty: "Medium",
    estimatedTime: "3 hours",
    importance: "High",
    category: "Electrical Engineering",
  },
  {
    id: 2,
    title: "Digital Logic Design",
    description: "Boolean algebra, logic gates, and combinational circuit design techniques.",
    difficulty: "Hard",
    estimatedTime: "4 hours",
    importance: "High",
    category: "Computer Engineering",
  },
  {
    id: 3,
    title: "Differential Equations",
    description: "First-order and second-order differential equations with applications in engineering.",
    difficulty: "Hard",
    estimatedTime: "5 hours",
    importance: "Medium",
    category: "Mathematics",
  },
  {
    id: 4,
    title: "Signals and Systems",
    description: "Fourier series, Fourier transform, and Laplace transform with applications.",
    difficulty: "Medium",
    estimatedTime: "4 hours",
    importance: "High",
    category: "Electrical Engineering",
  },
]

export function RecommendedTopics() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
      {recommendedTopics.map((topic) => (
        <Card key={topic.id}>
          <CardHeader className="pb-3">
            <div className="flex justify-between items-start">
              <CardTitle>{topic.title}</CardTitle>
              <Badge variant={topic.importance === "High" ? "destructive" : "secondary"}>
                {topic.importance} Priority
              </Badge>
            </div>
            <CardDescription>{topic.description}</CardDescription>
          </CardHeader>
          <CardContent className="pb-3">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{topic.estimatedTime}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="mr-1 h-4 w-4 text-muted-foreground" />
                <span>{topic.category}</span>
              </div>
              <Badge variant="outline">{topic.difficulty}</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="w-full">
              <Plus className="mr-2 h-4 w-4" />
              Add to Schedule
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

