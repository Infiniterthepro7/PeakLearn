import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter } from "lucide-react"
import { CourseCard } from "@/components/course-card"
import { FileUploader } from "@/components/file-uploader"

// Mock data for SRM University Computer Science courses
const srmCourses = {
  "1st Semester": [
    {
      id: "cs101",
      code: "CS101",
      title: "Introduction to Programming",
      credits: 4,
      description: "Fundamentals of programming using C language, algorithms, and problem-solving techniques.",
      instructor: "Dr. Rajesh Kumar",
      difficulty: "Beginner",
      materials: 12,
    },
    {
      id: "ma101",
      code: "MA101",
      title: "Engineering Mathematics I",
      credits: 4,
      description: "Calculus, differential equations, and linear algebra with applications in engineering.",
      instructor: "Dr. Priya Sharma",
      difficulty: "Medium",
      materials: 8,
    },
    {
      id: "ph101",
      code: "PH101",
      title: "Engineering Physics",
      credits: 3,
      description: "Mechanics, waves, optics, and modern physics concepts for engineers.",
      instructor: "Dr. Venkat Rao",
      difficulty: "Medium",
      materials: 10,
    },
    {
      id: "ch101",
      code: "CH101",
      title: "Engineering Chemistry",
      credits: 3,
      description: "Fundamental chemical principles and their applications in engineering.",
      instructor: "Dr. Lakshmi Narayanan",
      difficulty: "Medium",
      materials: 7,
    },
    {
      id: "hs101",
      code: "HS101",
      title: "Technical English",
      credits: 2,
      description: "English communication skills for technical and professional contexts.",
      instructor: "Prof. Anita Desai",
      difficulty: "Easy",
      materials: 5,
    },
  ],
  "2nd Semester": [
    {
      id: "cs102",
      code: "CS102",
      title: "Object-Oriented Programming",
      credits: 4,
      description: "Object-oriented programming concepts using Java, inheritance, polymorphism, and encapsulation.",
      instructor: "Dr. Sanjay Gupta",
      difficulty: "Medium",
      materials: 14,
    },
    {
      id: "cs103",
      code: "CS103",
      title: "Data Structures",
      credits: 4,
      description: "Arrays, linked lists, stacks, queues, trees, and basic algorithms.",
      instructor: "Dr. Meenakshi Sundaram",
      difficulty: "Hard",
      materials: 16,
    },
    {
      id: "ma102",
      code: "MA102",
      title: "Engineering Mathematics II",
      credits: 4,
      description: "Probability, statistics, numerical methods, and complex analysis.",
      instructor: "Dr. Ramesh Babu",
      difficulty: "Medium",
      materials: 9,
    },
    {
      id: "ec101",
      code: "EC101",
      title: "Digital Logic Design",
      credits: 3,
      description: "Boolean algebra, logic gates, combinational and sequential circuits.",
      instructor: "Dr. Karthik Raman",
      difficulty: "Medium",
      materials: 11,
    },
    {
      id: "me101",
      code: "ME101",
      title: "Engineering Graphics",
      credits: 2,
      description: "Technical drawing, projections, and CAD fundamentals.",
      instructor: "Prof. Suresh Kumar",
      difficulty: "Easy",
      materials: 6,
    },
  ],
  "3rd Semester": [
    {
      id: "cs201",
      code: "CS201",
      title: "Design and Analysis of Algorithms",
      credits: 4,
      description: "Algorithm design techniques, complexity analysis, and optimization strategies.",
      instructor: "Dr. Arun Balaji",
      difficulty: "Hard",
      materials: 15,
    },
    {
      id: "cs202",
      code: "CS202",
      title: "Database Management Systems",
      credits: 4,
      description: "Relational database concepts, SQL, normalization, and transaction management.",
      instructor: "Dr. Lakshmi Priya",
      difficulty: "Medium",
      materials: 13,
    },
    {
      id: "cs203",
      code: "CS203",
      title: "Computer Organization and Architecture",
      credits: 3,
      description: "CPU organization, memory hierarchy, I/O interfaces, and assembly language programming.",
      instructor: "Dr. Venkatesh S",
      difficulty: "Hard",
      materials: 12,
    },
    {
      id: "cs204",
      code: "CS204",
      title: "Operating Systems",
      credits: 4,
      description: "Process management, memory management, file systems, and security concepts.",
      instructor: "Dr. Rajkumar P",
      difficulty: "Hard",
      materials: 14,
    },
    {
      id: "ma201",
      code: "MA201",
      title: "Discrete Mathematics",
      credits: 3,
      description: "Logic, set theory, graph theory, and combinatorics for computer science.",
      instructor: "Dr. Sundar Rajan",
      difficulty: "Medium",
      materials: 10,
    },
  ],
  "4th Semester": [
    {
      id: "cs205",
      code: "CS205",
      title: "Computer Networks",
      credits: 4,
      description: "Network architectures, protocols, routing algorithms, and network security.",
      instructor: "Dr. Divya Krishnan",
      difficulty: "Medium",
      materials: 13,
    },
    {
      id: "cs206",
      code: "CS206",
      title: "Software Engineering",
      credits: 3,
      description:
        "Software development lifecycle, requirements engineering, design patterns, and testing methodologies.",
      instructor: "Dr. Mohan Kumar",
      difficulty: "Medium",
      materials: 11,
    },
    {
      id: "cs207",
      code: "CS207",
      title: "Theory of Computation",
      credits: 3,
      description: "Automata theory, formal languages, Turing machines, and computability.",
      instructor: "Dr. Padma Suresh",
      difficulty: "Hard",
      materials: 9,
    },
    {
      id: "cs208",
      code: "CS208",
      title: "Web Technologies",
      credits: 3,
      description: "HTML, CSS, JavaScript, and server-side programming for web applications.",
      instructor: "Prof. Anand Kumar",
      difficulty: "Medium",
      materials: 15,
    },
    {
      id: "cs209",
      code: "CS209",
      title: "Artificial Intelligence",
      credits: 4,
      description: "Search algorithms, knowledge representation, machine learning, and natural language processing.",
      instructor: "Dr. Srinivasan R",
      difficulty: "Hard",
      materials: 14,
    },
  ],
}

export default function CoursesPage() {
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
            <a href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
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
            <span className="text-sm font-medium hidden sm:inline-block">John Doe</span>
            <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">JD</div>
          </div>
        </div>
      </header>

      <main className="flex-1 container py-6">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <h1 className="text-3xl font-bold">SRM University Courses</h1>
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <div className="relative flex-1 sm:flex-none">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <input
                  type="search"
                  placeholder="Search courses..."
                  className="pl-8 h-9 w-full sm:w-[200px] lg:w-[300px] rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                />
              </div>
              <Button variant="outline" size="sm" className="whitespace-nowrap">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2">
              <Tabs defaultValue="1st Semester" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4">
                  <TabsTrigger value="1st Semester">1st Semester</TabsTrigger>
                  <TabsTrigger value="2nd Semester">2nd Semester</TabsTrigger>
                  <TabsTrigger value="3rd Semester">3rd Semester</TabsTrigger>
                  <TabsTrigger value="4th Semester">4th Semester</TabsTrigger>
                </TabsList>

                {Object.entries(srmCourses).map(([semester, courses]) => (
                  <TabsContent key={semester} value={semester} className="mt-6">
                    <div className="grid gap-4">
                      {courses.map((course) => (
                        <CourseCard key={course.id} course={course} />
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div>
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>AI Topic Analysis</CardTitle>
                  <CardDescription>
                    Upload course materials to get AI-generated summaries and important topics
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <FileUploader />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

