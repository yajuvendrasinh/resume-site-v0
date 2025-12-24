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
            <div className="relative w-56 h-56 overflow-hidden rounded-full sm:w-80 sm:h-80 md:w-96 md:h-96 outline outline-primary/10 outline-offset-4">
              <Image
                src="/images/picofme.avif"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="space-y-6">
            <p className="text-lg">
              Results-driven Business Development Professional with 3+ years of experience managing a premium portfolio
              of clients across tech and marketplace sectors, delivering strategic partnerships and revenue growth.
              Proven track record in onboarding and nurturing long-term client relationships, driving data-led
              decision-making, and collaborating cross-functionally to deliver value. Passionate about helping
              businesses grow and delivering exceptional partner experiences.
            </p>
            <div className="pt-4">
              <Button asChild>
                <Link href="https://aliansoftware.com" target="_blank">
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
