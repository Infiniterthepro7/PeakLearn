"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Upload, X, FileText, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface FileItem {
  id: string
  name: string
  size: number
  type: string
  analyzed: boolean
}

export function FileUploader() {
  const [files, setFiles] = useState<FileItem[]>([])
  const [isDragging, setIsDragging] = useState(false)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList).map((file) => ({
      id: Math.random().toString(36).substring(2, 9),
      name: file.name,
      size: file.size,
      type: file.type,
      analyzed: false,
    }))

    setFiles((prev) => [...prev, ...newFiles])
  }

  const removeFile = (id: string) => {
    setFiles(files.filter((file) => file.id !== id))
  }

  const analyzeFiles = () => {
    // Simulate AI analysis
    setTimeout(() => {
      setFiles(files.map((file) => ({ ...file, analyzed: true })))
      setShowAnalysis(true)
    }, 1500)
  }

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " bytes"
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + " KB"
    else return (bytes / 1048576).toFixed(1) + " MB"
  }

  return (
    <div className="space-y-4">
      <div
        className={cn(
          "border-2 border-dashed rounded-lg p-6 text-center cursor-pointer transition-colors",
          isDragging ? "border-primary bg-primary/5" : "border-muted-foreground/25 hover:border-primary/50",
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input type="file" ref={fileInputRef} onChange={handleFileInput} className="hidden" multiple />
        <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
        <h3 className="text-sm font-medium mb-1">Drag & drop files here</h3>
        <p className="text-xs text-muted-foreground mb-2">Upload lecture notes, slides, or any course materials</p>
        <Button variant="outline" size="sm" type="button">
          Browse Files
        </Button>
      </div>

      {files.length > 0 && (
        <div className="space-y-3">
          <div className="text-sm font-medium">Uploaded Files</div>
          {files.map((file) => (
            <Card key={file.id} className="overflow-hidden">
              <CardContent className="p-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-sm font-medium truncate max-w-[150px]">{file.name}</div>
                    <div className="text-xs text-muted-foreground">{formatFileSize(file.size)}</div>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  {file.analyzed && (
                    <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100/80">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Analyzed
                    </Badge>
                  )}
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeFile(file.id)
                    }}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}

          <Button className="w-full" onClick={analyzeFiles} disabled={files.every((file) => file.analyzed)}>
            Analyze with AI
          </Button>
        </div>
      )}

      {showAnalysis && (
        <div className="mt-6 space-y-4">
          <div className="text-sm font-medium">AI Analysis Results</div>

          <Card>
            <CardContent className="p-4 space-y-3">
              <div>
                <h3 className="text-sm font-medium mb-1">Key Topics Identified</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Object-Oriented Programming</Badge>
                  <Badge variant="secondary">Inheritance</Badge>
                  <Badge variant="secondary">Polymorphism</Badge>
                  <Badge variant="secondary">Encapsulation</Badge>
                  <Badge variant="secondary">Design Patterns</Badge>
                  <Badge variant="secondary">Java Collections</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Topic Summary</h3>
                <p className="text-sm text-muted-foreground">
                  The uploaded materials cover object-oriented programming principles with a focus on Java. Key concepts
                  include classes, objects, inheritance, polymorphism, and encapsulation. The materials also introduce
                  design patterns and the Java Collections Framework.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Important Concepts</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>
                    <span className="font-medium">Inheritance:</span> Mechanism where a class inherits properties and
                    behaviors from another class
                  </li>
                  <li>
                    <span className="font-medium">Polymorphism:</span> Ability of an object to take many forms,
                    particularly through method overriding
                  </li>
                  <li>
                    <span className="font-medium">Encapsulation:</span> Bundling of data and methods that operate on
                    that data within a single unit
                  </li>
                  <li>
                    <span className="font-medium">Design Patterns:</span> Reusable solutions to common problems in
                    software design
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-1">Study Recommendations</h3>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  <li>Focus on understanding inheritance hierarchies and their practical applications</li>
                  <li>Practice implementing polymorphism through method overriding</li>
                  <li>Study the Factory and Observer design patterns in detail</li>
                  <li>Review Java Collections Framework, especially Lists and Maps</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Button variant="outline" className="w-full">
            Add to Study Plan
          </Button>
        </div>
      )}
    </div>
  )
}

