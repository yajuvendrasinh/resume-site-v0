import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample experience data - replace with your actual experience
const experiences = [
  {
    id: 1,
    title: "Business Analyst",
    company: "Alian Software, Anand, Gujarat",
    period: "Jan 2024 - Present",
    description:
      "Led strategic IT solution planning and managed multiple cross-functional projects across diverse domains, collaborating with global stakeholders, particularly from North America and Europe to deliver scalable solutions aligned with client business goals and drive business development initiatives.",
    achievements: [
      "Analyzed Shopify store data (sales, traffic, conversions, AOV, LTV) using Excel and SQL to identify revenue bottlenecks.",
      "Built reports and dashboards in Power BI, helping improve campaign ROI by 18% and boosting store performance by 10–15%.",
      "Led requirement-gathering sessions with stakeholders from North America, Europe, and India, resulting in clear project scopes and reduced rework.",
      "Coordinated with clients and developers through regular meetings to gather evolving requirements and led teams to ensure timely delivery, exceeding client expectations.",
      "Built and nurtured partnerships with premium clients, contributing to long-term revenue generation.",
      "Delivered IT projects on time by applying Agile (Scrum) practices and streamlining communication between clients and development teams.",
      "Improved team efficiency through effective use of Trello, Asana, and other project management tools.",
      "Handled a team of 3+ juniors, fostering collaboration and helping set SOPs to ensure quality outcomes and team growth.",
      "Enhanced the company’s online brand visibility via strategic LinkedIn content planning.",
    ],
    technologies: ["Business Development", "Project Management", "Agile (Scrum)", "Stakeholder Management", "Team Leadership", "Asana"],
  },
  {
    id: 2,
    title: "Client Servicing Executive",
    company: "IndiaMART InterMESH Ltd, Rajkot, Gujarat",
    period: "Jan 2022 - Mar 2023",
    description:
      "Managed client relationships and sales operations, leveraging data analysis tools like Excel and Google Sheets to generate insights that supported strategic decisions, while utilizing ERP systems to streamline workflows, exceed revenue targets, and enhance customer retention through proactive engagement and collaboration with cross-functional teams.",
    achievements: [
      "Achieved 130% of revenue targets by strengthening relationships with existing paid members and driving repeat business, resulting in a 25% increase in customer retention through consistent engagement and value-driven service.",
      "Effectively utilized proprietary ERP to efficiently track and manage all aspects of the sales process, ensuring seamless coordination with internal support teams and timely delivery of exceptional service to clients.",
      "Utilized advanced Excel, PowerPoint and Google sheets skills to analyse sales data and create insightful reports that helped senior management make informed decisions.",
      "Collaborated with cross-functional teams to ensure adherence to sales processes and collect market feedback to provide periodic updates to management for the formulation of policy and strategy, resulting in improved customer satisfaction and retention.",
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">Experience</h2>
        <p className="max-w-2xl mx-auto mt-4 text-center text-muted-foreground">
          My professional journey and the companies I&apos;ve had the pleasure to work with.
        </p>
        <div className="mt-12 space-y-8">
          {experiences.map((exp) => (
            <Card key={exp.id}>
              <CardHeader>
                <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                  <div>
                    <CardTitle>{exp.title}</CardTitle>
                    <CardDescription className="text-base">
                      {exp.company} | {exp.period}
                    </CardDescription>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{exp.description}</p>
                <div>
                  <h4 className="mb-2 font-semibold">Key Achievements:</h4>
                  <ul className="pl-5 space-y-1 list-disc">
                    {exp.achievements.map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
