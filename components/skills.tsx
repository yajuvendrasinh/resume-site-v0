import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Sample skills data - replace with your actual skills
const skillCategories = [
  {
    id: 1,
    name: "Marketing & Sales",
    skills: [
      { name: "Digital Marketing Strategy", level: 85 },
      { name: "Social Media Marketing", level: 90 },
      { name: "Content Marketing", level: 85 },
      { name: "SEO & SEM", level: 80 },
      { name: "Sales Funnel Optimization", level: 75 },
      { name: "Lead Generation", level: 85 },
      { name: "Email Marketing", level: 80 },
      { name: "Market Research & Analysis", level: 85 },
    ],
  },
  {
    id: 2,
    name: "Soft Skills",
    skills: [
      { name: "Problem Solving", level: 90 },
      { name: "Communication", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Adaptability", level: 85 },
      { name: "Leadership", level: 75 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">Skills</h2>
        <p className="max-w-2xl mx-auto mt-4 text-center text-muted-foreground">
          A comprehensive overview of my technical and soft skills.
        </p>
        <div className="grid gap-8 mt-12 md:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.id}>
              <CardContent className="pt-6">
                <h3 className="mb-4 text-xl font-bold">{category.name}</h3>
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
