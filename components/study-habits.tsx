"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function StudyHabits() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Study Time Distribution</CardTitle>
            <CardDescription>Hours spent studying by time of day</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-end justify-between gap-2 pt-6">
              {[
                { time: "6-8 AM", hours: 5 },
                { time: "8-10 AM", hours: 12 },
                { time: "10-12 PM", hours: 8 },
                { time: "12-2 PM", hours: 3 },
                { time: "2-4 PM", hours: 6 },
                { time: "4-6 PM", hours: 10 },
                { time: "6-8 PM", hours: 15 },
                { time: "8-10 PM", hours: 18 },
                { time: "10-12 AM", hours: 7 },
              ].map((slot) => (
                <div key={slot.time} className="relative flex flex-col items-center">
                  <div
                    className="w-6 sm:w-8 bg-primary rounded-t"
                    style={{ height: `${(slot.hours / 20) * 200}px` }}
                  ></div>
                  <span className="text-xs mt-2 rotate-45 origin-left sm:rotate-0">{slot.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Weekly Study Pattern</CardTitle>
            <CardDescription>Hours spent studying by day of week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[250px] flex items-end justify-between gap-2 pt-6">
              {[
                { day: "Mon", hours: 3.5, target: 3 },
                { day: "Tue", hours: 2, target: 3 },
                { day: "Wed", hours: 4, target: 3 },
                { day: "Thu", hours: 1.5, target: 3 },
                { day: "Fri", hours: 2.5, target: 3 },
                { day: "Sat", hours: 5, target: 4 },
                { day: "Sun", hours: 4.5, target: 4 },
              ].map((day) => (
                <div key={day.day} className="relative flex flex-col items-center">
                  <div
                    className="absolute bottom-0 w-6 sm:w-8 border-t-2 border-dashed border-yellow-500"
                    style={{ height: `${(day.target / 5) * 200}px` }}
                  ></div>
                  <div
                    className="w-6 sm:w-8 bg-primary rounded-t"
                    style={{ height: `${(day.hours / 5) * 200}px` }}
                  ></div>
                  <span className="text-xs mt-2">{day.day}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Study Efficiency Analysis</CardTitle>
          <CardDescription>Insights into your study habits and recommendations</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="insights">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="insights">Key Insights</TabsTrigger>
              <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              <TabsTrigger value="comparison">Peer Comparison</TabsTrigger>
            </TabsList>
            <TabsContent value="insights" className="space-y-4 pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Positive Patterns</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Consistent evening study sessions (6-10 PM)</li>
                    <li>Strong weekend study habits</li>
                    <li>Good balance across multiple subjects</li>
                    <li>Regular breaks during long study sessions</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Areas for Improvement</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Inconsistent weekday study schedule</li>
                    <li>Limited morning study sessions</li>
                    <li>Tendency to cram before deadlines</li>
                    <li>Frequent distractions during afternoon sessions</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Peak Productivity Times</h4>
                <p className="text-sm text-muted-foreground">
                  Based on your study patterns, your peak productivity times are between 7-9 PM on weekdays and 10 AM-12
                  PM on weekends. Consider scheduling your most challenging topics during these times for optimal
                  learning efficiency.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="recommendations" className="space-y-4 pt-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Personalized Recommendations</h4>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Establish a consistent morning study routine (even 30 minutes) to improve retention</li>
                  <li>Implement the Pomodoro technique (25 min study, 5 min break) during afternoon sessions</li>
                  <li>Create a dedicated distraction-free study environment for weekday sessions</li>
                  <li>Distribute study time more evenly throughout the week to avoid weekend cramming</li>
                  <li>Try spaced repetition for difficult concepts in Engineering Mathematics</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-sm font-medium">Suggested Schedule Adjustments</h4>
                <p className="text-sm text-muted-foreground">
                  Consider shifting some of your weekend study hours to Tuesday and Thursday evenings. This will create
                  a more balanced weekly schedule and improve long-term retention.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="space-y-4 pt-4">
              <div className="space-y-2">
                <h4 className="text-sm font-medium">Peer Comparison</h4>
                <p className="text-sm text-muted-foreground">
                  Compared to other Computer Science students in your semester, you study approximately 23 hours per
                  week, which is 15% above the average of 20 hours. Your consistency score is in the top 30% of your
                  peers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Where You Excel</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Total study hours (top 25%)</li>
                    <li>Weekend dedication (top 15%)</li>
                    <li>Subject distribution (top 40%)</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Where You Can Improve</h4>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                    <li>Weekday consistency (bottom 45%)</li>
                    <li>Morning study sessions (bottom 30%)</li>
                    <li>Pre-exam preparation timeline (bottom 50%)</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}

