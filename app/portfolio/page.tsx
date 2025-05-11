import Link from "next/link"

import NavBar from "@/components/nav-bar"
import Footer from "@/components/footer"
import ProjectCard from "@/components/project-card"
import FadeIn from "@/components/animations/fade-in"
import StaggerContainer from "@/components/animations/stagger-container"
import TextReveal from "@/components/animations/text-reveal"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1">
        {/* Portfolio Hero */}
        <section className="py-12 md:py-20 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <TextReveal>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Portfolio</h1>
              </TextReveal>
              <FadeIn delay={0.2}>
                <p className="text-xl text-muted-foreground">
                  A collection of projects that showcase my skills and experience in software development.
                </p>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <ProjectCard
                title="Financial Dashboard"
                description="A comprehensive dashboard for tracking investments and financial metrics."
                tags={["React", "D3.js", "Express", "PostgreSQL"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="Social Media Analytics"
                description="A tool for analyzing social media performance and audience engagement."
                tags={["Vue.js", "Python", "Django", "Redis"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="Health & Fitness App"
                description="A mobile-first application for tracking workouts and nutrition."
                tags={["React Native", "GraphQL", "Node.js", "MongoDB"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="Real Estate Marketplace"
                description="A platform for listing and searching properties with advanced filtering."
                tags={["Next.js", "Tailwind CSS", "Firebase", "Google Maps API"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="Weather Application"
                description="A weather forecasting app with location-based services and alerts."
                tags={["React", "Redux", "OpenWeather API", "Geolocation"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
              <ProjectCard
                title="Learning Management System"
                description="An educational platform for creating and managing online courses."
                tags={["Angular", "Express", "MongoDB", "AWS S3"]}
                imageUrl="/placeholder.svg?height=200&width=400"
                githubUrl="https://github.com"
                demoUrl="https://example.com"
              />
            </StaggerContainer>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <FadeIn className="max-w-3xl mx-auto text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Case Studies</h2>
              <p className="text-muted-foreground">
                In-depth analysis of selected projects, highlighting challenges, solutions, and outcomes.
              </p>
            </FadeIn>

            <StaggerContainer className="grid gap-6 md:grid-cols-2">
              <Link href="/portfolio/case-study-ecommerce" className="group">
                <FadeIn direction="up">
                  <div className="relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
                    <div className="p-6">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        E-commerce Platform Redesign
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        How we improved conversion rates by 35% through UX improvements and performance optimization.
                      </p>
                      <p className="text-sm text-primary mt-4">Read case study →</p>
                    </div>
                  </div>
                </FadeIn>
              </Link>

              <Link href="/portfolio/case-study-analytics" className="group">
                <FadeIn direction="up" delay={0.1}>
                  <div className="relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg">
                    <div className="p-6">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        Social Media Analytics Dashboard
                      </h3>
                      <p className="text-muted-foreground mt-2">
                        Building a real-time analytics platform that processes millions of data points daily.
                      </p>
                      <p className="text-sm text-primary mt-4">Read case study →</p>
                    </div>
                  </div>
                </FadeIn>
              </Link>
            </StaggerContainer>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <FadeIn className="max-w-3xl mx-auto text-center space-y-4 mb-8">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Client Testimonials</h2>
              <p className="text-muted-foreground">What clients and collaborators have to say about working with me.</p>
            </FadeIn>

            <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <FadeIn>
                <div className="rounded-lg border bg-background p-6">
                  <div className="space-y-4">
                    <p className="italic text-muted-foreground">
                      "Alex delivered our project on time and exceeded our expectations. His attention to detail and
                      problem-solving skills made a significant difference in the final product."
                    </p>
                    <div>
                      <p className="font-semibold">Sarah Johnson</p>
                      <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.1}>
                <div className="rounded-lg border bg-background p-6">
                  <div className="space-y-4">
                    <p className="italic text-muted-foreground">
                      "Working with Alex was a pleasure. He not only understood our technical requirements but also
                      provided valuable insights that improved our product's user experience."
                    </p>
                    <div>
                      <p className="font-semibold">Michael Chen</p>
                      <p className="text-sm text-muted-foreground">Product Manager, InnovateCo</p>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <div className="rounded-lg border bg-background p-6">
                  <div className="space-y-4">
                    <p className="italic text-muted-foreground">
                      "Alex's technical expertise and communication skills made our collaboration seamless. He's a
                      developer who truly understands both the technical and business aspects of a project."
                    </p>
                    <div>
                      <p className="font-semibold">Emily Rodriguez</p>
                      <p className="text-sm text-muted-foreground">CTO, DigitalSolutions</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </StaggerContainer>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
