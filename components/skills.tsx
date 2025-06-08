import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

// Sample skills data - replace with your actual skills
const skillCategories = [
  {
    id: 1,
    name: "Programming & Analytics",
    skills: [
      { name: "Python (Pandas, NumPy, Scikit-learn)", level: 90 },
      { name: "SQL (Joins, CTEs, Subqueries, Window Functions)", level: 85 },
      { name: "R Programming", level: 70 },
      { name: "Regex", level: 75 },
      { name: "Excel - Power Query", level: 70 },
    ],
  },
  {
    id: 2,
    name: "Data Visualization & BI",
    skills: [
      { name: "Tableau ", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Matplotlib & Seaborn", level: 85 },
      { name: "Plotly Express", level: 80 },
      { name: "Excel (Pivot Tables, VLOOKUP, Charts)", level: 90 },
    ],
  },
  {
    id: 3,
    name: "Data Handling & Analysis",
    skills: [
      { name: "Exploratory Data Analysis(EDA)", level: 90 },
      { name: "Data Cleaning & Wrangling", level: 85 },
      { name: "Web Scraping (BeautifulSoup, Requests)", level: 70 },
      { name: "Data Validation & Quality Checks", level: 75 },
    ],
  },
    {
    id: 4,
    name: "Machine Learning",
    skills: [
      { name: "Classification (Logistic, Decision Tree, Random Forest)", level: 70 },
      { name: "Model Evaluation & Tuning", level: 65 },
      { name: "Hyperparameter Tuning (RandomizedSearchCV)", level: 60 },
      { name: "Feature Engineering", level: 65 },
    ],
  },
    {
    id: 5,
    name: "Tools & Platforms",
    skills: [
      { name: "Jupyter Notebook", level: 90 },
      { name: "Git/GitHub", level: 85 },
      { name: "Trello, Asana (Project Management)", level: 80 },
      { name: "Google Sheets & Slides", level: 85 },
      { name: "VS Code / JupyterLab", level: 65 },
    ],
  },
  {
    id: 6,
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
