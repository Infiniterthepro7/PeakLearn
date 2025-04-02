"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

const engineeringPrograms = [
  "Electrical Engineering",
  "Mechanical Engineering",
  "Computer Engineering",
  "Civil Engineering",
  "Chemical Engineering",
]

const semesters = [
  "1st Semester",
  "2nd Semester",
  "3rd Semester",
  "4th Semester",
  "5th Semester",
  "6th Semester",
  "7th Semester",
  "8th Semester",
]

export function CourseSelector() {
  const [program, setProgram] = useState<string>("")
  const [semester, setSemester] = useState<string>("")

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="space-y-2">
            <label
              htmlFor="program"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Engineering Program
            </label>
            <Select value={program} onValueChange={setProgram}>
              <SelectTrigger id="program">
                <SelectValue placeholder="Select program" />
              </SelectTrigger>
              <SelectContent>
                {engineeringPrograms.map((prog) => (
                  <SelectItem key={prog} value={prog}>
                    {prog}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label
              htmlFor="semester"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Current Semester
            </label>
            <Select value={semester} onValueChange={setSemester}>
              <SelectTrigger id="semester">
                <SelectValue placeholder="Select semester" />
              </SelectTrigger>
              <SelectContent>
                {semesters.map((sem) => (
                  <SelectItem key={sem} value={sem}>
                    {sem}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-end">
            <Button className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              Update Recommendations
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

