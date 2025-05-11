import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import SkillCard from "@/components/skill-card";
import ProjectCard from "@/components/project-card";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import ScaleIn from "@/components/animations/scale-in";
import TextReveal from "@/components/animations/text-reveal";
import NameDisplay from "@/components/name-display";
import me from "../asset/Images/1746075117350.jpg";
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1 mt-16">
        {" "}
        {/* Add top margin to account for fixed header */}
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 space-y-4">
                <div>
                  <TextReveal>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-3">
                      Hi, I'm
                    </h1>
                  </TextReveal>

                  <div className="mt-1 mb-3">
                    <NameDisplay
                      firstName="Mohammad"
                      middleName="Marouful Islam"
                      lastName="Zishan"
                    />
                  </div>
                </div>
                <FadeIn delay={0.2}>
                  <p className="text-xl text-muted-foreground">
                    Full Stack Software Engineer specializing in modern web
                    technologies and creating exceptional digital experiences.
                  </p>
                </FadeIn>
                <FadeIn delay={0.3}>
                  <div className="flex flex-wrap gap-3">
                    <Button asChild>
                      <Link href="/contact">
                        Get in touch <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/portfolio">View my work</Link>
                    </Button>
                  </div>
                </FadeIn>
                <FadeIn delay={0.4}>
                  <div className="flex gap-4 pt-2">
                    <Link
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Github className="h-5 w-5" />
                        <span className="sr-only">GitHub</span>
                      </Button>
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer">
                      <Button variant="ghost" size="icon">
                        <Linkedin className="h-5 w-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="mailto:contact@example.com">
                      <Button variant="ghost" size="icon">
                        <Mail className="h-5 w-5" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
                  </div>
                </FadeIn>
              </div>
              <ScaleIn delay={0.2}>
                <div className="flex-shrink-0">
                  <div className="relative h-60 w-60 md:h-80 md:w-80 overflow-hidden rounded-full border-4 border-background shadow-xl">
                    <Image
                      src={me}
                      alt="Mohammad Marouful Islam Zishan"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </ScaleIn>
            </div>
          </div>
        </section>
        {/* Skills Overview */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FadeIn>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    My Skills
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    I've worked with a variety of technologies across the full
                    stack.
                  </p>
                </div>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
              <SkillCard
                title="Frontend Development"
                description="React, Next.js, TypeScript, Tailwind CSS"
                icon="Code"
              />
              <SkillCard
                title="Backend Development"
                description="Node.js, Express, Python, Django"
                icon="Server"
              />
              <SkillCard
                title="Database"
                description="PostgreSQL, MongoDB, Redis, Prisma"
                icon="Database"
              />
              <SkillCard
                title="DevOps"
                description="Docker, CI/CD, AWS, Vercel"
                icon="Cloud"
              />
            </StaggerContainer>
          </div>
        </section>
        {/* Featured Projects */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FadeIn>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Featured Projects
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Some of my recent work that showcases my skills and
                    expertise.
                  </p>
                </div>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <ProjectCard
                title="E-commerce Platform"
                description="A full-stack e-commerce solution with payment processing and inventory management."
                tags={["Next.js", "TypeScript", "Stripe", "Prisma"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="Task Management App"
                description="A collaborative task management tool with real-time updates and team features."
                tags={["React", "Node.js", "Socket.io", "MongoDB"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="AI Content Generator"
                description="An AI-powered application that generates content based on user prompts."
                tags={["Python", "TensorFlow", "React", "FastAPI"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
            </StaggerContainer>
            <FadeIn delay={0.6} className="flex justify-center mt-8">
              <Button asChild variant="outline">
                <Link href="/portfolio">
                  View all projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
        {/* Blog Preview */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <FadeIn>
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    Latest Articles
                  </h2>
                  <p className="max-w-[700px] text-muted-foreground md:text-xl">
                    Thoughts, tutorials, and insights about technology and
                    development.
                  </p>
                </div>
              </FadeIn>
            </div>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <FadeIn>
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Blog post thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground">
                        May 7, 2023
                      </p>
                      <h3 className="text-xl font-bold mt-2">
                        Building Scalable React Applications
                      </h3>
                      <p className="text-muted-foreground mt-2 line-clamp-3">
                        Learn how to structure your React applications for
                        scalability and maintainability.
                      </p>
                      <Link
                        href="/blog/building-scalable-react-applications"
                        className="text-primary inline-flex items-center mt-4">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
              <FadeIn delay={0.1}>
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Blog post thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground">
                        April 15, 2023
                      </p>
                      <h3 className="text-xl font-bold mt-2">
                        The Future of Web Development
                      </h3>
                      <p className="text-muted-foreground mt-2 line-clamp-3">
                        Exploring emerging technologies and trends that will
                        shape the future of web development.
                      </p>
                      <Link
                        href="/blog/future-of-web-development"
                        className="text-primary inline-flex items-center mt-4">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
              <FadeIn delay={0.2}>
                <Card>
                  <CardContent className="p-0">
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=200&width=400"
                        alt="Blog post thumbnail"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground">
                        March 22, 2023
                      </p>
                      <h3 className="text-xl font-bold mt-2">
                        Optimizing Database Performance
                      </h3>
                      <p className="text-muted-foreground mt-2 line-clamp-3">
                        Tips and techniques for improving database performance
                        in production applications.
                      </p>
                      <Link
                        href="/blog/optimizing-database-performance"
                        className="text-primary inline-flex items-center mt-4">
                        Read more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </FadeIn>
            </StaggerContainer>
            <FadeIn delay={0.6} className="flex justify-center mt-8">
              <Button asChild variant="outline">
                <Link href="/blog">
                  View all articles <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </FadeIn>
          </div>
        </section>
        {/* Contact CTA */}
        <section className="py-12 md:py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <FadeIn className="flex flex-col items-center text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Let's Work Together
              </h2>
              <p className="max-w-[700px] md:text-xl">
                Have a project in mind or want to discuss potential
                opportunities? I'd love to hear from you.
              </p>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Get in touch</Link>
              </Button>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
