import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { LucideIcon } from "lucide-react"

interface ProductCardProps {
  icon: LucideIcon
  title: string
  description: string
  badge?: string
}

export function ProductCard({ icon: Icon, title, description, badge }: ProductCardProps) {
  return (
    <Card className="bg-curser-card border-curser-primary/20 hover:border-curser-primary transition-all duration-300 hover:shadow-lg hover:shadow-curser-primary/20">
      <CardHeader>
        <div className="flex items-start justify-between mb-4">
          <div className="p-3 rounded-lg bg-curser-primary/10">
            <Icon className="h-6 w-6 text-curser-primary" />
          </div>
          {badge && (
            <Badge className="bg-curser-primary/20 text-curser-primary border-curser-primary/30">
              {badge}
            </Badge>
          )}
        </div>
        <CardTitle className="text-curser-text mb-2">{title}</CardTitle>
        <CardDescription className="text-curser-subtle">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

