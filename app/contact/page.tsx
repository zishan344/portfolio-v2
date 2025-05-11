import Link from "next/link";
import { Mail, MapPin, Phone, Github, Linkedin, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import TextReveal from "@/components/animations/text-reveal";
import { HeroTitle } from "@/components/hero-titl";

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1">
        {/* Contact Hero */}
        <HeroTitle
          title="Get in Touch"
          description="Have a project in mind or want to discuss potential opportunities?
                      I'd love to hear from you."
        />

        {/* Contact Form & Info */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Contact Form */}
              <FadeIn direction="left">
                <div className="space-y-6">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Send me a message</h2>
                    <p className="text-muted-foreground">
                      Fill out the form below and I'll get back to you as soon
                      as possible.
                    </p>
                  </div>

                  <StaggerContainer className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Name
                        </label>
                        <Input id="name" placeholder="John Doe" required />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Project Inquiry"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        className="min-h-[150px]"
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Send Message
                    </Button>
                  </StaggerContainer>
                </div>
              </FadeIn>

              {/* Contact Info */}
              <FadeIn direction="right" delay={0.2}>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-bold">Contact Information</h2>
                    <p className="text-muted-foreground">
                      Feel free to reach out through any of the following
                      channels.
                    </p>
                  </div>

                  <StaggerContainer className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Mail className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Email</h3>
                        <p className="text-muted-foreground">
                          maroufulislam.zishan@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Phone</h3>
                        <p className="text-muted-foreground">
                          +880 1810-272303
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="h-5 w-5 mt-0.5 text-primary" />
                      <div>
                        <h3 className="font-medium">Location</h3>
                        <p className="text-muted-foreground">
                          Chattogram, Bangladesh
                        </p>
                      </div>
                    </div>
                  </StaggerContainer>

                  <div className="space-y-4">
                    <h3 className="font-medium">Connect with me</h3>
                    <div className="flex space-x-4">
                      <Link
                        href="https://github.com/zishan344"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <Github className="h-5 w-5" />
                          <span className="sr-only">GitHub</span>
                        </Button>
                      </Link>
                      <Link
                        href="https://linkedin.com/in/marouful-islam-zishan"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Button>
                      </Link>
                      <Link
                        href="https://x.com/zishan3344"
                        target="_blank"
                        rel="noopener noreferrer">
                        <Button variant="outline" size="icon">
                          <X className="h-5 w-5" />
                          <span className="sr-only">X</span>
                        </Button>
                      </Link>
                    </div>
                  </div>

                  <FadeIn delay={0.4}>
                    <div className="rounded-lg border p-6 bg-muted/50">
                      <h3 className="font-medium mb-2">Availability</h3>
                      <p className="text-muted-foreground mb-4">
                        I'm currently available for freelance work and
                        consulting. My typical response time is within 24 hours.
                      </p>
                      <div className="flex items-center space-x-2">
                        <div className="h-3 w-3 rounded-full bg-green-500"></div>
                        <span className="text-sm">
                          Available for new projects
                        </span>
                      </div>
                    </div>
                  </FadeIn>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <FadeIn className="text-center space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Frequently Asked Questions
                </h2>
                <p className="text-muted-foreground">
                  Common questions about my services and process.
                </p>
              </FadeIn>

              <StaggerContainer className="space-y-4">
                <div className="rounded-lg border bg-background p-6">
                  <h3 className="font-bold">
                    What is your typical process for a new project?
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    I start with a discovery call to understand your
                    requirements, followed by a proposal outlining scope,
                    timeline, and cost. Once approved, I begin with design
                    mockups before moving to development, with regular check-ins
                    throughout the process.
                  </p>
                </div>

                <div className="rounded-lg border bg-background p-6">
                  <h3 className="font-bold">What are your rates?</h3>
                  <p className="text-muted-foreground mt-2">
                    My rates vary depending on the project scope and complexity.
                    I offer both hourly and project-based pricing. Please
                    contact me with your project details for a custom quote.
                  </p>
                </div>

                <div className="rounded-lg border bg-background p-6">
                  <h3 className="font-bold">
                    How long does a typical project take?
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Project timelines vary based on scope and complexity. A
                    simple website might take 2-4 weeks, while a complex web
                    application could take 2-3 months or more. I'll provide a
                    detailed timeline in my proposal.
                  </p>
                </div>

                <div className="rounded-lg border bg-background p-6">
                  <h3 className="font-bold">
                    Do you offer maintenance services after the project is
                    complete?
                  </h3>
                  <p className="text-muted-foreground mt-2">
                    Yes, I offer maintenance packages to keep your website or
                    application up-to-date, secure, and running smoothly. We can
                    discuss these options once your project is nearing
                    completion.
                  </p>
                </div>
              </StaggerContainer>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
