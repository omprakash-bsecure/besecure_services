'use client';
import React from 'react';
import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const services = [
    {
        title: "CCTV Camera Installation",
        description: "Professional HD & IP camera systems for complete security coverage in Ranchi and Jharkhand",
        features: ["HD Coaxial Cameras (DVR-based)", "IP Cameras (NVR-based)", "WiFi Wireless Cameras", "24/7 Technical Support"],
        imageName: "cctv-installation.png"
    },
    {
        title: "Intercom Systems",
        description: "Advanced audio & video intercom solutions for homes and offices across Jharkhand",
        features: ["Audio & Video Intercoms", "Multi-unit Building Solutions", "Wireless Options Available", "Integration Ready"],
        imageName: "intercom-systems.png"
    },
    {
        title: "Computer Services",
        description: "Complete IT solutions from repairs to new system installations for businesses in Ranchi",
        features: ["Desktop & Laptop Repairs", "Hardware Upgrades", "Software Installation", "Data Recovery Services"],
        imageName: "computer-services.png"
    },
    {
        title: "Biometric Solutions",
        description: "Advanced biometric access control and attendance systems for enhanced security",
        features: ["Fingerprint Recognition", "Facial Recognition", "Access Control Systems", "Complete Installation & Support"],
        imageName: "biometric-systems.png"
    },
    {
        title: "Alarm Systems",
        description: "Complete alarm solutions for maximum property protection in Ranchi and Hazaribagh",
        features: ["Burglar Alarms", "Fire Alarms", "Motion Sensors", "24/7 Monitoring Services"],
        imageName: "alarm-systems.png"
    },
    {
        title: "Networking Services",
        description: "Professional network setup and maintenance for optimal connectivity in Jharkhand",
        features: ["LAN/WAN Setup", "Structured Cabling", "WiFi Setup & Extension", "Network Security Solutions"],
        imageName: "networking-services.png"
    }
];

export function ServicesSection() {
    return (
        <section id="services" className="py-16 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                        Our Security Services in Ranchi & Jharkhand
                    </h2>
                    <p className="mt-4 max-w-[700px] text-gray-600">
                        Complete CCTV installation, security systems, and IT solutions for homes and businesses
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow aspect-square">
                            <div className="relative h-full w-full">
                                <Image
                                    src={`/${service.imageName}`}
                                    alt={service.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent backdrop-blur-[0.5px]" />
                                <CardContent className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                    <p className="text-gray-200 mb-4 text-sm line-clamp-2">{service.description}</p>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant="secondary" className="w-full bg-white/90 hover:bg-white text-gray-900">
                                                Know More
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle className="text-xl">
                                                    {service.title}
                                                </DialogTitle>
                                                <DialogDescription className="text-base">
                                                    {service.description}
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="mt-4">
                                                <h4 className="font-semibold mb-3">Features & Services:</h4>
                                                <ul className="space-y-2">
                                                    {service.features.map((feature, featureIndex) => (
                                                        <li key={featureIndex} className="flex items-center gap-2">
                                                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                                            <span>{feature}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                                <div className="mt-6 flex gap-2">
                                                    <Button asChild className="bg-primary hover:bg-primary-dark">
                                                        <a href="tel:+919162118159">
                                                            <Phone className="h-4 w-4 mr-2" />
                                                            Call Now
                                                        </a>
                                                    </Button>
                                                </div>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                </CardContent>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
