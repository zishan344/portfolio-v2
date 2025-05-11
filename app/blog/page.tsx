import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import NavBar from "@/components/nav-bar";
import Footer from "@/components/footer";
import FadeIn from "@/components/animations/fade-in";
import StaggerContainer from "@/components/animations/stagger-container";
import TextReveal from "@/components/animations/text-reveal";
import { HeroTitle } from "@/components/hero-titl";

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />

      <main className="flex-1">
        {/* Blog Hero */}
        <HeroTitle
          title="Blog & Insights"
          description="Thoughts, tutorials, and insights about technology and development."
        />

        {/* Featured Post */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <FadeIn className="max-w-4xl mx-auto">
              <Card className="overflow-hidden border-none shadow-lg">
                <CardContent className="p-0">
                  <div className="relative h-64 md:h-80 w-full overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Featured blog post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 md:p-8">
                    <p className="text-sm text-muted-foreground">
                      May 7, 2023 • 10 min read
                    </p>
                    <h2 className="text-2xl font-bold mt-2 md:text-3xl">
                      The Future of Web Development: Trends to Watch in 2023
                    </h2>
                    <p className="text-muted-foreground mt-4">
                      Exploring emerging technologies and trends that will shape
                      the future of web development, from AI-powered tools to
                      new frameworks and methodologies.
                    </p>
                    <Button asChild className="mt-6">
                      <Link href="/blog/future-of-web-development">
                        Read full article{" "}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-12 md:py-16 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <FadeIn>
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl mb-8">
                  All Articles
                </h2>
              </FadeIn>

              <StaggerContainer className="grid gap-8">
                <FadeIn>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=200&width=300"
                            alt="Blog post thumbnail"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <p className="text-sm text-muted-foreground">
                            May 7, 2023 • 10 min read
                          </p>
                          <h3 className="text-xl font-bold mt-2">
                            Building Scalable React Applications
                          </h3>
                          <p className="text-muted-foreground mt-2">
                            Learn how to structure your React applications for
                            scalability and maintainability, with practical
                            examples and best practices.
                          </p>
                          <Link
                            href="/blog/building-scalable-react-applications"
                            className="text-primary inline-flex items-center mt-4">
                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=200&width=300"
                            alt="Blog post thumbnail"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <p className="text-sm text-muted-foreground">
                            April 15, 2023 • 8 min read
                          </p>
                          <h3 className="text-xl font-bold mt-2">
                            Optimizing Database Performance
                          </h3>
                          <p className="text-muted-foreground mt-2">
                            Tips and techniques for improving database
                            performance in production applications, from
                            indexing to query optimization.
                          </p>
                          <Link
                            href="/blog/optimizing-database-performance"
                            className="text-primary inline-flex items-center mt-4">
                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=200&width=300"
                            alt="Blog post thumbnail"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <p className="text-sm text-muted-foreground">
                            March 22, 2023 • 6 min read
                          </p>
                          <h3 className="text-xl font-bold mt-2">
                            Introduction to TypeScript for JavaScript Developers
                          </h3>
                          <p className="text-muted-foreground mt-2">
                            A beginner-friendly guide to TypeScript, explaining
                            key concepts and how to migrate your JavaScript
                            projects.
                          </p>
                          <Link
                            href="/blog/introduction-to-typescript"
                            className="text-primary inline-flex items-center mt-4">
                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=200&width=300"
                            alt="Blog post thumbnail"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <p className="text-sm text-muted-foreground">
                            February 10, 2023 • 12 min read
                          </p>
                          <h3 className="text-xl font-bold mt-2">
                            Building a CI/CD Pipeline for Frontend Applications
                          </h3>
                          <p className="text-muted-foreground mt-2">
                            A step-by-step guide to setting up continuous
                            integration and deployment for your frontend
                            projects.
                          </p>
                          <Link
                            href="/blog/cicd-pipeline-frontend"
                            className="text-primary inline-flex items-center mt-4">
                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>

                <FadeIn>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0">
                      <div className="md:flex">
                        <div className="relative h-48 md:h-auto md:w-1/3 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=200&width=300"
                            alt="Blog post thumbnail"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="p-6 md:w-2/3">
                          <p className="text-sm text-muted-foreground">
                            January 5, 2023 • 7 min read
                          </p>
                          <h3 className="text-xl font-bold mt-2">
                            Accessibility in Web Development: A Practical Guide
                          </h3>
                          <p className="text-muted-foreground mt-2">
                            Learn how to make your web applications more
                            accessible, with practical tips and tools for
                            testing and implementation.
                          </p>
                          <Link
                            href="/blog/accessibility-guide"
                            className="text-primary inline-flex items-center mt-4">
                            Read more <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </FadeIn>
              </StaggerContainer>

              <FadeIn delay={0.6} className="flex justify-center mt-8">
                <Button variant="outline">Load more articles</Button>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <FadeIn className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Subscribe to my newsletter
              </h2>
              <p className="text-muted-foreground">
                Get notified when I publish new articles and tutorials. No spam,
                unsubscribe at any time.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button>Subscribe</Button>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
