import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BarChart, PieChart, Calendar, TrendingUp, Award } from "lucide-react"
import { SubjectProgress } from "@/components/subject-progress"
import { StudyHabits } from "@/components/study-habits"
import { AchievementsList } from "@/components/achievements-list"

export default function ProgressPage() {
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
            <a
              href="/dashboard"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Dashboard
            </a>
            <a
              href="/courses"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              Courses
            </a>
            <a href="/progress" className="text-sm font-medium transition-colors hover:text-primary">
              Progress
            </a>
            <a href="#" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Settings
            </a>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <span className="text-sm font-medium hidden sm:inline-block">John Doe</span>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">JD</div>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-3xl font-bold">Your Progress</h1>
            <div className="flex items-center gap-2">
              <Button variant="outline">
                <Calendar className="mr-2 h-4 w-4" />
                Last 30 Days
              </Button>
              <Button>
                <TrendingUp className="mr-2 h-4 w-4" />
                Generate Report
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Study Hours</CardTitle>
                <BarChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">87.5 hours</div>
                <p className="text-xs text-muted-foreground">+12.5 hours from last month</p>
                <Progress value={75} className="mt-3" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Course Completion</CardTitle>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">68%</div>
                <p className="text-xs text-muted-foreground">5 of 8 courses in progress</p>
                <Progress value={68} className="mt-3" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Longest Streak</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">14 days</div>
                <p className="text-xs text-muted-foreground">Current streak: 7 days</p>
                <Progress value={50} className="mt-3" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Achievements</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12 earned</div>
                <p className="text-xs text-muted-foreground">3 new this month</p>
                <Progress value={40} className="mt-3" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="subjects" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="subjects">Subject Progress</TabsTrigger>
              <TabsTrigger value="habits">Study Habits</TabsTrigger>
              <TabsTrigger value="achievements">Achievements</TabsTrigger>
            </TabsList>
            <TabsContent value="subjects" className="mt-6">
              <SubjectProgress />
            </TabsContent>
            <TabsContent value="habits" className="mt-6">
              <StudyHabits />
            </TabsContent>
            <TabsContent value="achievements" className="mt-6">
              <AchievementsList />
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

