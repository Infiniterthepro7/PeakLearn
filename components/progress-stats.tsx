"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Mock data for progress stats
const subjectProgress = [
  { subject: "Circuit Analysis", progress: 75 },
  { subject: "Digital Logic", progress: 60 },
  { subject: "Differential Equations", progress: 45 },
  { subject: "Signals and Systems", progress: 30 },
  { subject: "Electromagnetic Theory", progress: 20 },
]

const weeklyStudyHours = [
  { day: "Mon", hours: 2.5 },
  { day: "Tue", hours: 3 },
  { day: "Wed", hours: 1.5 },
  { day: "Thu", hours: 2 },
  { day: "Fri", hours: 3.5 },
  { day: "Sat", hours: 0 },
  { day: "Sun", hours: 0 },
]

export function ProgressStats() {
  const totalHours = weeklyStudyHours.reduce((sum, day) => sum + day.hours, 0)
  const averageProgress = subjectProgress.reduce((sum, subject) => sum + subject.progress, 0) / subjectProgress.length

  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Weekly Study Hours</CardTitle>
            <CardDescription>Total: {totalHours} hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[150px] flex items-end justify-between gap-2">
              {weeklyStudyHours.map((day) => (
                <div key={day.day} className="relative flex flex-col items-center">
                  <div className="w-8 bg-primary rounded-t" style={{ height: `${(day.hours / 4) * 100}px` }}></div>
                  <span className="text-xs mt-2">{day.day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overall Progress</CardTitle>
            <CardDescription>Average across all subjects</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center pt-6">
            <div className="relative h-40 w-40 flex items-center justify-center">
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
                  strokeDashoffset={283 - (283 * averageProgress) / 100}
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center text-center">
                <span className="text-3xl font-bold">{Math.round(averageProgress)}%</span>
                <span className="text-xs text-muted-foreground">Completed</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Study Efficiency</CardTitle>
            <CardDescription>Time spent vs. progress made</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Focused Study</span>
                <span className="text-sm font-medium">65%</span>
              </div>
              <Progress value={65} />

              <div className="flex items-center justify-between">
                <span className="text-sm">Retention Rate</span>
                <span className="text-sm font-medium">72%</span>
              </div>
              <Progress value={72} />

              <div className="flex items-center justify-between">
                <span className="text-sm">Practice Completion</span>
                <span className="text-sm font-medium">48%</span>
              </div>
              <Progress value={48} />
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Subject Progress</CardTitle>
          <CardDescription>Track your progress across different subjects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {subjectProgress.map((subject) => (
              <div key={subject.subject} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">{subject.subject}</span>
                  <span className="text-sm text-muted-foreground">{subject.progress}%</span>
                </div>
                <Progress value={subject.progress} />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

