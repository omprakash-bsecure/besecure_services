import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  position: string
}

export default function TestimonialCard({ quote, author, position }: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <Quote className="h-8 w-8 text-red-600 mb-4 opacity-50" />
        <p className="mb-4 italic">{quote}</p>
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-gray-500">{position}</p>
        </div>
      </CardContent>
    </Card>
  )
}
