"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, Clock, CheckCircle, X } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { format } from "date-fns"

// Mock data for study schedule
const scheduleItems = [
  {
    id: 1,
    title: "Circuit Analysis Fundamentals",
    date: new Date(2025, 3, 3), // April 3, 2025
    startTime: "09:00 AM",
    endTime: "11:00 AM",
    completed: false,
  },
  {
    id: 2,
    title: "Digital Logic Design",
    date: new Date(2025, 3, 3), // April 3, 2025
    startTime: "02:00 PM",
    endTime: "04:00 PM",
    completed: false,
  },
  {
    id: 3,
    title: "Differential Equations",
    date: new Date(2025, 3, 4), // April 4, 2025
    startTime: "10:00 AM",
    endTime: "12:00 PM",
    completed: false,
  },
  {
    id: 4,
    title: "Signals and Systems",
    date: new Date(2025, 3, 5), // April 5, 2025
    startTime: "01:00 PM",
    endTime: "03:00 PM",
    completed: false,
  },
]

export function StudySchedule() {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [schedule, setSchedule] = useState(scheduleItems)

  const toggleCompleted = (id: number) => {
    setSchedule(schedule.map((item) => (item.id === id ? { ...item, completed: !item.completed } : item)))
  }

  const filteredSchedule = date
    ? schedule.filter(
        (item) =>
          item.date.getDate() === date.getDate() &&
          item.date.getMonth() === date.getMonth() &&
          item.date.getFullYear() === date.getFullYear(),
      )
    : []

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <Button variant="outline">Generate Optimal Schedule</Button>
      </div>

      {filteredSchedule.length > 0 ? (
        <div className="space-y-4">
          {filteredSchedule.map((item) => (
            <Card key={item.id} className={cn(item.completed && "opacity-60")}>
              <CardHeader className="p-4 pb-2 flex flex-row items-start justify-between space-y-0">
                <CardTitle className="text-base font-medium">{item.title}</CardTitle>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => toggleCompleted(item.id)}>
                  {item.completed ? <X className="h-4 w-4" /> : <CheckCircle className="h-4 w-4" />}
                </Button>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>
                    {item.startTime} - {item.endTime}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardContent className="p-6 flex flex-col items-center justify-center min-h-[200px] text-center">
            <CalendarIcon className="h-10 w-10 text-muted-foreground mb-4" />
            <p className="text-muted-foreground">
              {date ? "No study sessions scheduled for this day." : "Select a date to view your schedule."}
            </p>
            <Button className="mt-4">Add Study Session</Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

