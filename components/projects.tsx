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
    title: "Chicago Bike Share Data Analysis",
    description:
      "Analyzed 6M+ records from Chicago's Bike Share program using Python and Tableau to uncover usage trends and improve rider experience.",
    image: "images/indego2.webp",
    technologies: ["Python", "Pandas", "Plotly", "Excel", "Tableau"],
    github: "https://www.kaggle.com/code/yajuvendrasinh/divvy-chicago-bikeshare-data-analysis-google-crtv2/notebook",
    demo: "https://public.tableau.com/views/BikeshareFULLDATA/Dashboard1",
  },
  {
    id: 2,
    title: "Global Press Freedom Analysis",
    description:
      "Performed data analysis on global press freedom (2014–2023) using Python to uncover regional and temporal trends.",
    image: "images/13298079_5171382.jpg",
    technologies: ["Python", "Web Scraping", "Seaborn", "Public Policy Analysis"],
    github: "https://www.kaggle.com/code/yajuvendrasinh/declining-press-freedom-eda-with-interactive-viz",
    demo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Music Store Analysis With SQL",
    description:
      "Analyzed a digital music store database to help optimize business operations and answer key business questions using SQL queries.",
    image: "images/SQL Music Store Analysis.jpg",
    technologies: ["SQL", "Data Analysis", "PostgreSQL"],
    github: "https://github.com/yajuvendrasinh/sql_projects/tree/main/music_store_analysis",
    demo: "https://github.com/yajuvendrasinh/sql_projects/tree/main/music_store_analysis",
  },
  {
    id: 4,
    title: "Student Habits & Academic Performance Analysis",
    description:
      "Analyzed student habits and academic performance using data science (regression, clustering, classification) to uncover key predictors of exam success and provide actionable insights for improvement.",
    image: "images/Student_Habits_Academic_Performance_Analysis.png",
    technologies: ["NumPy", "Linear Regression", "Matplotlib", "Random Forest"],
    github: "https://github.com/yajuvendrasinh/data-science-projects/tree/main/Student-Habits-and-Academic-Performance",
    demo: "https://medium.com/@yajuvendra/uncovering-the-secrets-of-academic-success-a-data-science-journey-336301a497a1",
  },
  {
    id: 5,
    title: "Diabetes Prediction Model",
    description:
      "Built and tuned a Random Forest classifier on a 100k-record dataset to predict diabetes with high accuracy (~97.1%).",
    image: "images/diabetes_thumbnail.jpg",
    technologies: ["Scikit-learn", "RandomizedSearchCV", "Machine Learning (Classification)"],
    github: "https://github.com/yajuvendrasinh/data-science-projects/tree/main/diabetes_prediction_project",
    demo: "https://github.com/yajuvendrasinh/data-science-projects/tree/main/diabetes_prediction_project",
  },
  {
    id: 6,
    title: "Project Title 6",
    description:
      "Add your project description here. Describe what the project does, what technologies you used, and what insights or results you achieved.",
    image: "placeholder.svg?height=400&width=600",
    technologies: ["Technology 1", "Technology 2", "Technology 3"],
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
