"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      const response = await fetch("https://formspree.io/f/mwpblvpn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to submit form")
      }
    } catch (error) {
      setSubmitError("There was an error submitting the form. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-4xl md:text-5xl">Contact Me</h2>
        <p className="max-w-2xl mx-auto mt-4 text-center text-muted-foreground">
          Have a question or want to work together? Feel free to reach out!
        </p>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Mail className="w-8 h-8 text-primary" />
              <div>
                <CardTitle>Email</CardTitle>
                <CardDescription>Get in touch via email</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <a href="mailto:gidayajuvendrasinh@gmail.com" className="text-primary hover:underline">
                gidayajuvendrasinh@gmail.com
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Phone className="w-8 h-8 text-primary" />
              <div>
                <CardTitle>Phone</CardTitle>
                <CardDescription>Call me directly</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <a href="tel://+918469685882/" className="text-primary hover:underline">
                +91 8469 685 882
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-primary"
              >
                <path
                  d="M6.5 8C7.32843 8 8 7.32843 8 6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8Z"
                  fill="currentColor"
                />
                <path
                  d="M5 10C5 9.44772 5.44772 9 6 9H7C7.55228 9 8 9.44771 8 10V18C8 18.5523 7.55228 19 7 19H6C5.44772 19 5 18.5523 5 18V10Z"
                  fill="currentColor"
                />
                <path
                  d="M11 19H12C12.5523 19 13 18.5523 13 18V13.5C13 12 16 11 16 13V18.0004C16 18.5527 16.4477 19 17 19H18C18.5523 19 19 18.5523 19 18V12C19 10 17.5 9 15.5 9C13.5 9 13 10.5 13 10.5V10C13 9.44771 12.5523 9 12 9H11C10.4477 9 10 9.44772 10 10V18C10 18.5523 10.4477 19 11 19Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M20 1C21.6569 1 23 2.34315 23 4V20C23 21.6569 21.6569 23 20 23H4C2.34315 23 1 21.6569 1 20V4C1 2.34315 2.34315 1 4 1H20ZM20 3C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3H20Z"
                  fill="currentColor"
                />
              </svg>
              <div>
                <CardTitle>LinkedIn</CardTitle>
                <CardDescription>Connect professionally</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <a
                href="https://www.linkedin.com/in/yajuvendrasinh/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                linkedin.com/in/yajuvendrasinh
              </a>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <MapPin className="w-8 h-8 text-primary" />
              <div>
                <CardTitle>Location</CardTitle>
                <CardDescription>Based in</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p>Gujarat, India 🇮🇳</p>
            </CardContent>
          </Card>
        </div>
        <Card className="max-w-2xl mx-auto mt-12">
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitSuccess ? (
              <div className="p-4 text-center rounded-md bg-primary/10">
                <p className="font-medium text-primary">Thank you for your message! I&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email"
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject of your message"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={5}
                    required
                  />
                </div>
                {submitError && <div className="p-2 text-sm text-red-500 rounded-md bg-red-50">{submitError}</div>}
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-2 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
