"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, User, FileText, ChevronDown, ChevronUp } from "lucide-react"

interface CourseProps {
  course: {
    id: string
    code: string
    title: string
    credits: number
    description: string
    instructor: string
    difficulty: string
    materials: number
  }
}

export function CourseCard({ course }: CourseProps) {
  const [expanded, setExpanded] = useState(false)

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-100 text-green-800 hover:bg-green-100/80"
      case "Medium":
        return "bg-yellow-100 text-yellow-800 hover:bg-yellow-100/80"
      case "Hard":
        return "bg-red-100 text-red-800 hover:bg-red-100/80"
      default:
        return ""
    }
  }

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2">
              <CardTitle>{course.title}</CardTitle>
              <Badge variant="outline">{course.code}</Badge>
            </div>
            <CardDescription>{course.description}</CardDescription>
          </div>
          <Badge className={getDifficultyColor(course.difficulty)}>{course.difficulty}</Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4 text-muted-foreground" />
            <span>{course.instructor}</span>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4 text-muted-foreground" />
            <span>{course.credits} Credits</span>
          </div>
          <div className="flex items-center">
            <FileText className="mr-1 h-4 w-4 text-muted-foreground" />
            <span>{course.materials} Materials</span>
          </div>
        </div>

        {expanded && (
          <div className="mt-4 space-y-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Course Outline</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Introduction to key concepts and fundamentals</li>
                <li>Theoretical foundations and principles</li>
                <li>Practical applications and case studies</li>
                <li>Advanced topics and current research</li>
                <li>Project work and assessments</li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2">Learning Outcomes</h4>
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Understand core principles and methodologies</li>
                <li>Apply theoretical knowledge to practical problems</li>
                <li>Analyze and evaluate complex scenarios</li>
                <li>Develop critical thinking and problem-solving skills</li>
              </ul>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-between pt-2">
        <Button variant="outline" size="sm" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <>
              <ChevronUp className="mr-1 h-4 w-4" />
              Show Less
            </>
          ) : (
            <>
              <ChevronDown className="mr-1 h-4 w-4" />
              Show More
            </>
          )}
        </Button>
        <Button size="sm">
          <BookOpen className="mr-1 h-4 w-4" />
          Add to My Courses
        </Button>
      </CardFooter>
    </Card>
  )
}

