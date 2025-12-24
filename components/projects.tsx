import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

// Sample project data - replace with your actual projects
const projects = [
  {
    id: 1,
    title: "Project Title 1",
    description:
      "Add your project description here. Describe what the project does and what results you achieved.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Skill 1", "Skill 2", "Skill 3"],
    github: "https://github.com/yourusername/project1",
    demo: "https://your-demo-link.com",
  },
  {
    id: 2,
    title: "Project Title 2",
    description:
      "Add your project description here. Describe what the project does and what results you achieved.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Skill 1", "Skill 2", "Skill 3"],
    github: "https://github.com/yourusername/project2",
    demo: "https://your-demo-link.com",
  },
  {
    id: 3,
    title: "Project Title 3",
    description:
      "Add your project description here. Describe what the project does and what results you achieved.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Skill 1", "Skill 2", "Skill 3"],
    github: "https://github.com/yourusername/project3",
    demo: "https://your-demo-link.com",
  },
  {
    id: 4,
    title: "Project Title 4",
    description:
      "Add your project description here. Describe what the project does and what results you achieved.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Skill 1", "Skill 2", "Skill 3"],
    github: "https://github.com/yourusername/project4",
    demo: "https://your-demo-link.com",
  },
  {
    id: 5,
    title: "Project Title 5",
    description:
      "Add your project description here. Describe what the project does and what results you achieved.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Skill 1", "Skill 2", "Skill 3"],
    github: "https://github.com/yourusername/project5",
    demo: "https://your-demo-link.com",
  },
  {
    id: 6,
    title: "Project Title 6",
    description:
      "Add your project description here. Describe what the project does and what results you achieved.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Skill 1", "Skill 2", "Skill 3"],
    github: "https://github.com/yourusername/project6",
    demo: "https://your-demo-link.com",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">Projects</h2>
        <p className="max-w-2xl mx-auto mt-4 text-center text-muted-foreground">
          Here are some of the projects I&apos;ve worked on. Each project represents different skills and technologies
          I&apos;ve mastered.
        </p>
        <div className="grid gap-8 mt-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden transition-all hover:shadow-lg">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button asChild variant="outline" size="sm">
                  <Link href={project.github} target="_blank" rel="noopener noreferrer">
                    <Image src="/images/code.png" alt="Code" width={16} height={16} className="mr-2" />
                    Code
                  </Link>
                </Button>
                <Button asChild size="sm">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
