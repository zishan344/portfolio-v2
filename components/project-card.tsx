"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  githubUrl?: string
  demoUrl?: string
}

export default function ProjectCard({ title, description, tags, imageUrl, githubUrl, demoUrl }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow h-full">
        <CardContent className="p-0 h-full flex flex-col">
          <div className="relative h-48 w-full overflow-hidden">
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }} className="h-full w-full">
              <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
            </motion.div>
          </div>
          <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-bold text-xl mb-2">{title}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">{description}</p>

            <div className="flex flex-wrap gap-2 mb-4">
              {tags.map((tag, index) => (
                <motion.div
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.2 }}
                >
                  <Badge variant="secondary">{tag}</Badge>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2">
              {githubUrl && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" /> Code
                    </Link>
                  </Button>
                </motion.div>
              )}
              {demoUrl && (
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" /> Demo
                    </Link>
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
