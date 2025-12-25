import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Sample experience data - replace with your actual experience
const experiences = [
  {
    id: 1,
    title: "Business Development Executive",
    company: "Alian Software, Anand, Gujarat",
    period: "Jan 2024 - Present",
    description:
      "Driving sales and marketing initiatives through Upwork, specializing in Shopify projects. Building and nurturing client relationships while identifying new business opportunities to drive revenue growth.",
    achievements: [
      "1....",
      "2....",
      "3....",
    ],
    technologies: ["Business Development", "Sales", "Upwork", "Shopify", "Client Acquisition", "Account Management"],
  },
  {
    id: 2,
    title: "Client Servicing Executive",
    company: "IndiaMART InterMESH Ltd, Rajkot, Gujarat",
    period: "Jan 2022 - Mar 2023",
    description:
      "Managed client relationships and sales operations, leveraging data analysis tools like Excel and Google Sheets to generate insights that supported strategic decisions, while utilizing ERP systems to streamline workflows, exceed revenue targets, and enhance customer retention through proactive engagement and collaboration with cross-functional teams.",
    achievements: [
      "1.....",
      "2....",
      "3....",
    ],
    technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "React"],
  },
  {
    id: 3,
    title: "NIL NIL",
    company: "ABC . LTD",
    period: "Jun 2089 - Feb 2099",
    description:
      "Asdfsfsdd in the dsdfsdfsdnt of fdcvxvdfs sdfdcvsef and egf sdgfdtergfgfd. Grfgfdger dfgdf dfrgvdfg rgtererrrgs to dvrgdfvdv egdfervere and xgerrfrehdfbvb.",
    achievements: [
      "Developed dfgdfver dfgervefve rgfdg 10+ egfdergre regdfgxg",
      "Implemented wegdfbtb rgxdgertwt ergdgrhn ertwdgxdg rgyhrtbgfb",
      "Created nhgnccgbt UI drgregxbgt that xdrgxbtbsb user trhcfnghn",
    ],
    technologies: ["ABCD", "XYZ", "LMNOP", "QRSTUV", "WXY"],
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
