import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import TextReveal from "@/components/animations/text-reveal";
import me from "../../asset/Images/1746075117350.jpg";
export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1">
        {/* About Hero */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              
                <div className="space-y-4">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Me
                  </h1>

                  <p className="text-xl text-muted-foreground">
                    I'm a passionate Full-Stack software Engineer with over 2
                    years of experience building web applications and digital
                    experiences.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="/contact">
                        Contact me <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline">
                      <Download className="mr-2 h-4 w-4" /> Download Resume
                    </Button>
                  </div>
                </div>

              
                <div className="flex justify-center lg:justify-end">
                  <div className="relative h-80 w-80 overflow-hidden rounded-xl border-4 border-background shadow-xl">
                    <Image
                      src={me}
                      alt="Alex Johnson"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
            
            </div>
          </div>
        </section>

        {/* Biography */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <FadeIn className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                My Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  I began my journey in software development during my college
                  years, where I studied Computer Science at the University of
                  Technology. What started as a curiosity quickly evolved into a
                  passion for creating elegant solutions to complex problems.
                </p>
                <p>
                  After graduating, I joined a startup where I had the
                  opportunity to work on a variety of projects across the full
                  stack. This experience was invaluable, as it allowed me to
                  develop a broad skill set and understand how different parts
                  of an application work together.
                </p>
                <p>
                  Over the years, I've specialized in modern JavaScript
                  frameworks, particularly React and Next.js, while maintaining
                  a strong foundation in backend technologies. I believe in
                  writing clean, maintainable code and creating intuitive user
                  experiences.
                </p>
                <p>
                  When I'm not coding, you can find me hiking in the mountains,
                  reading science fiction, or experimenting with new cooking
                  recipes. I'm also an active member of the local tech
                  community, where I occasionally speak at meetups and mentor
                  aspiring developers.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Experience */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <FadeIn>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Professional Experience
                </h2>
              </FadeIn>

              <StaggerContainer className="space-y-6">
                <FadeIn>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-xl">
                              Senior Frontend Developer
                            </h3>
                            <p className="text-primary">TechNova Solutions</p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            2021 - Present
                          </p>
                        </div>
                        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                          <li>
                            Lead the frontend development of the company's
                            flagship SaaS product
                          </li>
                          <li>
                            Implemented a component library that improved
                            development speed by 40%
                          </li>
                          <li>
                            Mentored junior developers and conducted code
                            reviews
                          </li>
                          <li>
                            Collaborated with UX designers to create intuitive
                            user interfaces
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-xl">
                              Full Stack Developer
                            </h3>
                            <p className="text-primary">Innovate Digital</p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            2018 - 2021
                          </p>
                        </div>
                        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                          <li>
                            Developed and maintained multiple client projects
                            using React, Node.js, and MongoDB
                          </li>
                          <li>
                            Implemented RESTful APIs and GraphQL endpoints
                          </li>
                          <li>
                            Optimized application performance, reducing load
                            times by 60%
                          </li>
                          <li>
                            Participated in agile development processes and
                            sprint planning
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold text-xl">
                              Junior Web Developer
                            </h3>
                            <p className="text-primary">WebCraft Agency</p>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            2016 - 2018
                          </p>
                        </div>
                        <ul className="space-y-2 text-muted-foreground list-disc pl-5">
                          <li>
                            Built responsive websites for clients across various
                            industries
                          </li>
                          <li>
                            Worked with WordPress, HTML, CSS, and JavaScript
                          </li>
                          <li>
                            Assisted in the migration of legacy systems to
                            modern frameworks
                          </li>
                          <li>
                            Collaborated with the design team to implement
                            pixel-perfect designs
                          </li>
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <FadeIn>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                  Education & Certifications
                </h2>
              </FadeIn>

              <FadeIn delay={0.1}>
                <Card className="border-none shadow-md">
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-bold text-xl">
                            BSc in Computer Science
                          </h3>
                          <p className="text-primary">
                            University of Technology
                          </p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          2012 - 2016
                        </p>
                      </div>
                      <p className="text-muted-foreground">
                        Graduated with honors. Specialized in software
                        engineering and data structures.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>

              <StaggerContainer className="grid gap-4 sm:grid-cols-2">
                <FadeIn>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">
                          AWS Certified Developer
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Amazon Web Services, 2020
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.1}>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">
                          Professional Scrum Master I
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Scrum.org, 2019
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">
                          React Advanced Certification
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          Frontend Masters, 2021
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <Card className="border-none shadow-md">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">
                          MongoDB Certified Developer
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          MongoDB University, 2022
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Personal Philosophy */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <FadeIn className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                My Philosophy
              </h2>
              <p className="text-xl">
                "I believe that great software is not just about code—it's about
                creating experiences that make people's lives better. My goal is
                to build solutions that are not only technically excellent but
                also intuitive and accessible to everyone."
              </p>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
