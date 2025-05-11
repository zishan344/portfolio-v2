"use client"

import { type LucideIcon, Code, Server, Database, Cloud, Palette, Globe, Cpu, LineChart } from "lucide-react"
import { motion } from "framer-motion"

import { Card, CardContent } from "@/components/ui/card"

interface SkillCardProps {
  title: string
  description: string
  icon: string
}

export default function SkillCard({ title, description, icon }: SkillCardProps) {
  const getIcon = (): LucideIcon => {
    switch (icon) {
      case "Code":
        return Code
      case "Server":
        return Server
      case "Database":
        return Database
      case "Cloud":
        return Cloud
      case "Palette":
        return Palette
      case "Globe":
        return Globe
      case "Cpu":
        return Cpu
      case "LineChart":
        return LineChart
      default:
        return Code
    }
  }

  const Icon = getIcon()

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -5 }}
    >
      <Card className="border-none shadow-md hover:shadow-lg transition-shadow">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <motion.div
            className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4"
            whileHover={{ scale: 1.1, backgroundColor: "var(--primary-20)" }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="h-6 w-6 text-primary" />
          </motion.div>
          <h3 className="font-bold text-lg mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
