"use client"

import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"

interface ProductCardProps {
  icon: LucideIcon
  title: string
  description: string
  badge?: string
  specs?: string[]
  delay?: number
  price?: string
}

export function ProductCard({ icon: Icon, title, description, badge, specs, delay = 0, price }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
    >
      <Card className="bg-neutral-900 border-primary-500/20 hover:border-primary-500 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20 h-full">
        <CardHeader>
          <div className="flex items-start justify-between mb-4">
            <motion.div
              className="p-3 rounded-lg bg-primary-500/10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.5 }}
            >
              <Icon className="h-6 w-6 text-primary-400" />
            </motion.div>
            {badge && (
              <Badge className="bg-primary-500/20 text-primary-400 border-primary-500/30">
                {badge}
              </Badge>
            )}
          </div>
          <CardTitle className="text-neutral-50 mb-2">{title}</CardTitle>
          {price && (
            <div className="mb-3">
              <span className="text-2xl font-bold text-primary-400">{price}</span>
            </div>
          )}
          <CardDescription className="text-neutral-400 mb-4">
            {description}
          </CardDescription>
          {specs && specs.length > 0 && (
            <div className="mt-4 pt-4 border-t border-neutral-800">
              <h4 className="text-sm font-semibold text-primary-400 mb-2">Specifications:</h4>
              <ul className="space-y-1">
                {specs.map((spec, index) => (
                  <li key={index} className="text-xs text-neutral-400 flex items-start">
                    <span className="text-primary-500 mr-2">•</span>
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </CardHeader>
      </Card>
    </motion.div>
  )
}
