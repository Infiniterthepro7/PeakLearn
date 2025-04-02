import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Calendar, Clock, BookOpen, BarChart, CheckCircle } from "lucide-react"
import { CourseSelector } from "@/components/course-selector"
import { RecommendedTopics } from "@/components/recommended-topics"
import { StudySchedule } from "@/components/study-schedule"
import { ProgressStats } from "@/components/progress-stats"

export default function Dashboard() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <a href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">PeakLearn</span>
            </a>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <a href="/dashboard" className="text-sm font-medium transition-colors hover:text-primary">
              Dashboard
            </a>
            <a
              href="/courses"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Courses
            </a>
            <a
              href="/progress"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Progress
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Settings
            </a>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <span className="text-sm font-medium">John Doe</span>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">JD</div>
          </div>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <Button>
              <Calendar className="mr-2 h-4 w-4" />
              Today's Plan
            </Button>
          </div>

          <CourseSelector />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Study Hours</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12.5h</div>
                <p className="text-xs text-muted-foreground">+2.5 hours from last week</p>
                <Progress value={62} className="mt-3" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Topics Covered</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24/40</div>
                <p className="text-xs text-muted-foreground">60% of curriculum completed</p>
                <Progress value={60} className="mt-3" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">7 days</div>
                <p className="text-xs text-muted-foreground">Keep it up!</p>
                <Progress value={70} className="mt-3" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Assignments</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3 pending</div>
                <p className="text-xs text-muted-foreground">Next due: Circuit Analysis (2 days)</p>
                <Progress value={40} className="mt-3" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="recommended" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="recommended">Recommended Topics</TabsTrigger>
              <TabsTrigger value="schedule">Study Schedule</TabsTrigger>
              <TabsTrigger value="progress">Progress</TabsTrigger>
            </TabsList>
            <TabsContent value="recommended" className="mt-6">
              <RecommendedTopics />
            </TabsContent>
            <TabsContent value="schedule" className="mt-6">
              <StudySchedule />
            </TabsContent>
            <TabsContent value="progress" className="mt-6">
              <ProgressStats />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

