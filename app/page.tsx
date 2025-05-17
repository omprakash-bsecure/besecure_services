import Link from "next/link"
import Image from "next/image"
import { Clock, MapPin, Phone, Mail, Instagram, Globe, Shield, CheckCircle } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ContactForm from "@/components/contact-form"
import ServiceCard from "@/components/service-card"
import TestimonialCard from "@/components/testimonial-card"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-10 w-auto relative">
              <Image
                src="/bsecure_logo.png"
                alt="Bsecure Digital Technology Logo"
                width={100}
                height={40}
                className="h-full w-auto object-contain"
              />
            </div>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="#services" className="text-sm font-medium hover:underline underline-offset-4">
              Services
            </Link>
            <Link href="#about" className="text-sm font-medium hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#why-us" className="text-sm font-medium hover:underline underline-offset-4">
              Why Choose Us
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild className="hidden md:flex bg-red-600 hover:bg-red-700">
              <Link href="#contact">Get a Quote</Link>
            </Button>
            <Button variant="outline" size="icon" className="md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-black/60 z-10" />
          <div
            className="relative h-[600px] bg-cover bg-center animate-subtle-zoom"
            style={{
              backgroundImage: "url('/hero-bg.jpg')",
            }}
          >
            <div className="container relative z-20 flex h-full flex-col items-center justify-center text-center text-white px-4 md:px-6">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Secure Your Home or Business Today
              </h1>
              <p className="mt-4 max-w-[700px] text-lg text-white/90">
                Your trusted CCTV partner in Jharkhand providing comprehensive security solutions
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                  <Link href="#contact">Get Free Consultation</Link>
                </Button>
                <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="#services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Our Services
              </h2>
              <p className="mt-4 max-w-[700px] text-gray-600">
                Comprehensive security and technology solutions for homes and businesses
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <ServiceCard
                title="CCTV Camera Installation"
                description="Residential & Commercial Solutions, New Setup, Repair & AMC"
                icon="cctv"
                details={[
                  "HD Coaxial Cameras (DVR-based)",
                  "IP Cameras (NVR-based)",
                  "WiFi Wireless Cameras",
                  "Residential & Commercial Solutions",
                  "New Setup, Repair & AMC",
                  "24/7 Technical Support",
                ]}
              />
              <ServiceCard
                title="Intercom Systems"
                description="Sales, Installation & Maintenance of Audio & Video Intercoms"
                icon="intercom"
                details={[
                  "Audio & Video Intercoms",
                  "Sales & Installation",
                  "Maintenance Services",
                  "Integration with Security Systems",
                  "Multi-unit Building Solutions",
                  "Wireless Options Available",
                ]}
              />
              <ServiceCard
                title="Computer Services"
                description="Desktop & Laptop Repairs, New System Setup, Upgrades & Accessories"
                icon="computer"
                details={[
                  "Desktop & Laptop Repairs",
                  "New System Setup",
                  "Hardware Upgrades",
                  "Software Installation",
                  "Virus Removal",
                  "Data Recovery Services",
                ]}
              />
              <ServiceCard
                title="Biometric Solutions"
                description="Attendance Systems, Access Control Systems with Complete Installation & Support"
                icon="fingerprint"
                details={[
                  "Attendance Systems",
                  "Access Control Systems",
                  "Fingerprint Recognition",
                  "Facial Recognition",
                  "Complete Installation & Support",
                  "Integration with Existing Systems",
                ]}
              />
              <ServiceCard
                title="Alarm Systems"
                description="Burglar Alarms, Fire Alarms, Motion Sensors for complete protection"
                icon="alarm"
                details={[
                  "Burglar Alarms",
                  "Fire Alarms",
                  "Motion Sensors",
                  "Remote Monitoring",
                  "Mobile Alerts",
                  "24/7 Monitoring Services",
                ]}
              />
              <ServiceCard
                title="Networking Services"
                description="LAN/WAN Setup, Structured Cabling, WiFi Setup & Range Extension"
                icon="network"
                details={[
                  "LAN/WAN Setup & Maintenance",
                  "Structured Cabling",
                  "WiFi Setup & Range Extension",
                  "Network Switches, Routers",
                  "Firewall Installation",
                  "Network Security Solutions",
                ]}
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                  About Bsecure Digital Technology
                </h2>
                <p className="mt-4 text-gray-600">
                  Bsecure Digital Technology is Jharkhand's leading provider of security and technology solutions. With
                  years of experience in the industry, we have established ourselves as a trusted partner for homes and
                  businesses seeking reliable security systems.
                </p>
                <p className="mt-4 text-gray-600">
                  Our team of certified professionals is dedicated to delivering high-quality installations, prompt
                  service, and ongoing support to ensure your security systems function optimally at all times.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Button asChild className="bg-red-600 hover:bg-red-700">
                    <Link href="#contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg flex items-center justify-center bg-gray-50 p-8">
                <Image
                  src="/security-illustration.png"
                  alt="Security system illustration"
                  width={400}
                  height={300}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section id="why-us" className="py-16 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                Why Choose Us
              </h2>
              <p className="mt-4 max-w-[700px] text-gray-600">
                We're committed to providing the highest quality security solutions with exceptional service
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-red-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Free Site Visit</h3>
                  <p className="text-gray-600">
                    We offer complimentary site visits to assess your security needs and provide tailored solutions.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">Expert Technicians</h3>
                  <p className="text-gray-600">
                    Our team consists of certified professionals with years of experience in security systems.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-red-100 shadow-sm hover:shadow-md transition-all">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="h-12 w-12 rounded-full bg-red-600 flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">24/7 Support</h3>
                  <p className="text-gray-600">
                    We provide round-the-clock support to ensure your security systems are always functioning optimally.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
              <p className="mt-4 max-w-[700px] text-gray-500">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="Bsecure installed our home security system and we couldn't be happier. Professional service and excellent quality."
                author="Rajesh Kumar"
                position="Homeowner, Ranchi"
              />
              <TestimonialCard
                quote="As a business owner, security is paramount. Bsecure provided a comprehensive solution that gives me peace of mind."
                author="Priya Sharma"
                position="Business Owner, Hazaribagh"
              />
              <TestimonialCard
                quote="The team at Bsecure is responsive and knowledgeable. They helped us upgrade our outdated security system efficiently."
                author="Amit Singh"
                position="Office Manager, Ranchi"
              />
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                <p className="mt-4 text-gray-500">
                  Have questions or ready to secure your property? Contact us today for a free consultation.
                </p>
                <div className="mt-8 space-y-4">
                  <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-500">+91 9162118159, +91 8825304242</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-500">besecurecamservice@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Ranchi Office</h3>
                      <p className="text-gray-500">Pragatipath bahubajar, Ranchi-834001</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Hazaribagh Office</h3>
                      <p className="text-gray-500">Danto khurd katkamsandi, Hazaribagh-825319</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Instagram className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Instagram</h3>
                      <p className="text-gray-500">@bsecurecamservice</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Globe className="h-5 w-5 text-red-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <p className="text-gray-500">www.bsecuretech.in</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-white">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="h-10 w-auto relative">
                  <Image
                    src="/bsecure_logo.png"
                    alt="Bsecure Digital Technology Logo"
                    width={100}
                    height={40}
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>
              <p className="text-gray-600 max-w-xs">
                Your trusted CCTV partner in Jharkhand providing comprehensive security solutions.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-900">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#services" className="text-gray-600 hover:text-red-600">
                  Services
                </Link>
                <Link href="#about" className="text-gray-600 hover:text-red-600">
                  About Us
                </Link>
                <Link href="#why-us" className="text-gray-600 hover:text-red-600">
                  Why Choose Us
                </Link>
                <Link href="#contact" className="text-gray-600 hover:text-red-600">
                  Contact
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-900">Services</h3>
              <nav className="flex flex-col gap-2">
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  CCTV Installation
                </Link>
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  Intercom Systems
                </Link>
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  Biometric Solutions
                </Link>
                <Link href="#" className="text-gray-600 hover:text-red-600">
                  Networking Services
                </Link>
              </nav>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4 text-gray-900">Contact Us</h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-red-600" />
                  <p>+91 9162118159, +91 8825304242</p>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-red-600" />
                  <p>besecurecamservice@gmail.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-600" />
                  <p>Ranchi & Hazaribagh, Jharkhand</p>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="h-4 w-4 text-red-600" />
                  <p>@bsecurecamservice</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-600">
            <p>© {new Date().getFullYear()} Bsecure Digital Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
