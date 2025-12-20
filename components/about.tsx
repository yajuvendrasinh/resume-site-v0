import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">About Me</h2>
        <div className="grid items-center gap-8 mt-12 md:grid-cols-2">
          <div className="flex justify-center md:order-last">
            <div className="relative w-80 h-80 overflow-hidden rounded-full sm:w-80 sm:h-80 md:w-96 md:h-96 outline outline-primary/10 outline-offset-4">
              <div className="relative w-full h-full md:hidden">
                <Image
                  src="/images/picofme.avif"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="relative w-full h-full hidden md:block">
                <Image
                  src="/images/picofme.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg">
              Hello! I&apos;m a results-oriented professional who uniquely blends data science and business analysis
              expertise. I focus on uncovering meaningful insights and translating them into impactful business
              strategies. My strong foundation in statistical analysis, machine learning, and data visualization allows
              me to thrive on tackling complex business challenges and transforming raw data into actionable
              recommendations.
            </p>
            <p className="text-lg">
              Driven by a desire to uncover insights from data, my journey has led me to develop strong skills in data
              science methodologies and business intelligence. This enables me to contribute across the entire data
              project lifecycle, from defining business problems and formulating analytical strategies to building
              predictive models and communicating findings effectively. I am consistently motivated by the opportunity
              to use data to identify key trends and optimize business processes.
            </p>
            <p className="text-lg">
              Outside of work, I'm a lifelong learner with a keen interest in exploring new analytical techniques and
              understanding the evolving landscape of data-driven business.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href="https://2ly.link/286BO" target="_blank">
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
