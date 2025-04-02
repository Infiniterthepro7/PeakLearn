"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Award, Clock, Zap, BookOpen, Calendar, Target, TrendingUp, CheckCircle } from "lucide-react"

// Mock data for achievements
const achievements = [
  {
    id: 1,
    title: "Consistent Learner",
    description: "Study for 7 consecutive days",
    icon: <Calendar className="h-5 w-5" />,
    progress: 100,
    completed: true,
    date: "Mar 28, 2025",
  },
  {
    id: 2,
    title: "Knowledge Explorer",
    description: "Complete 50 topics across all subjects",
    icon: <BookOpen className="h-5 w-5" />,
    progress: 100,
    completed: true,
    date: "Mar 15, 2025",
  },
  {
    id: 3,
    title: "Focus Master",
    description: "Complete a 3-hour study session without breaks",
    icon: <Target className="h-5 w-5" />,
    progress: 100,
    completed: true,
    date: "Mar 10, 2025",
  },
  {
    id: 4,
    title: "Early Bird",
    description: "Complete 10 morning study sessions",
    icon: <Clock className="h-5 w-5" />,
    progress: 70,
    completed: false,
    date: null,
  },
  {
    id: 5,
    title: "Subject Expert",
    description: "Achieve 90% completion in any subject",
    icon: <Award className="h-5 w-5" />,
    progress: 85,
    completed: false,
    date: null,
  },
  {
    id: 6,
    title: "Speed Learner",
    description: "Complete 5 topics in a single day",
    icon: <Zap className="h-5 w-5" />,
    progress: 100,
    completed: true,
    date: "Feb 25, 2025",
  },
  {
    id: 7,
    title: "Milestone Maker",
    description: "Study for a total of 100 hours",
    icon: <TrendingUp className="h-5 w-5" />,
    progress: 87,
    completed: false,
    date: null,
  },
  {
    id: 8,
    title: "Perfect Week",
    description: "Meet all daily study goals for an entire week",
    icon: <CheckCircle className="h-5 w-5" />,
    progress: 57,
    completed: false,
    date: null,
  },
]

export function AchievementsList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {achievements.map((achievement) => (
        <Card key={achievement.id} className={`overflow-hidden ${achievement.completed ? "border-primary/50" : ""}`}>
          <CardContent className="p-4">
            <div className="flex flex-col items-center text-center space-y-3">
              <div className={`p-3 rounded-full ${achievement.completed ? "bg-primary/20" : "bg-muted"}`}>
                {achievement.icon}
              </div>

              <div>
                <h3 className="font-medium">{achievement.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{achievement.description}</p>
              </div>

              <div className="w-full space-y-1">
                <div className="flex justify-between text-xs">
                  <span>{achievement.progress}%</span>
                  {achievement.completed ? (
                    <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100/80">
                      Completed
                    </Badge>
                  ) : (
                    <span>In Progress</span>
                  )}
                </div>
                <Progress value={achievement.progress} />
              </div>

              {achievement.completed && (
                <div className="text-xs text-muted-foreground">Earned on {achievement.date}</div>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

