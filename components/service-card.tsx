import { Camera, Phone, Laptop, Fingerprint, Bell, Network, Video, DoorOpen, Car, Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ServiceDialog from "./service-dialog"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  details: string[]
}

export default function ServiceCard({ title, description, icon, details }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "cctv":
        return <Camera className="h-10 w-10 text-red-600" />
      case "intercom":
        return <Phone className="h-10 w-10 text-red-600" />
      case "computer":
        return <Laptop className="h-10 w-10 text-red-600" />
      case "fingerprint":
        return <Fingerprint className="h-10 w-10 text-red-600" />
      case "alarm":
        return <Bell className="h-10 w-10 text-red-600" />
      case "network":
        return <Network className="h-10 w-10 text-red-600" />
      case "video-door":
        return <Video className="h-10 w-10 text-red-600" />
      case "doorbell":
        return <DoorOpen className="h-10 w-10 text-red-600" />
      case "car-camera":
        return <Car className="h-10 w-10 text-red-600" />
      case "smart-home":
        return <Home className="h-10 w-10 text-red-600" />
      default:
        return <Camera className="h-10 w-10 text-red-600" />
    }
  }

  return (
    <ServiceDialog title={title} description={description} icon={icon} details={details}>
      <Card className="overflow-hidden transition-all hover:shadow-md cursor-pointer border-red-100">
        <CardContent className="p-6">
          <div className="mb-4">{getIcon()}</div>
          <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700 w-full">
            Learn More
          </Button>
        </CardContent>
      </Card>
    </ServiceDialog>
  )
}
