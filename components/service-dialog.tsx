"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Camera, Phone, Laptop, Fingerprint, Bell, Network, Video, DoorOpen, Car, Home } from "lucide-react"

interface ServiceDialogProps {
  title: string
  description: string
  icon: string
  details: string[]
  children: React.ReactNode
}

export default function ServiceDialog({ title, description, icon, details, children }: ServiceDialogProps) {
  const [open, setOpen] = useState(false)

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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            {getIcon()}
            <DialogTitle className="text-xl">{title}</DialogTitle>
          </div>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          <h4 className="font-medium text-gray-900 mb-2">What we offer:</h4>
          <ul className="space-y-2">
            {details.map((detail, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="h-5 w-5 mt-0.5 text-red-600 flex-shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </div>
                <span className="text-gray-600">{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6 flex justify-end">
          <Button className="bg-red-600 hover:bg-red-700" onClick={() => setOpen(false)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
