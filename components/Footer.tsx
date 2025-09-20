import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-white">
            <div className="container px-4 md:px-6 py-8">
                <div className="grid gap-8 lg:grid-cols-4">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-4">
                            <div className="h-10 w-auto relative">
                                <Image
                                    src="/bsecure_logo.png"
                                    alt="BSECURE Information Technology Logo"
                                    width={100}
                                    height={40}
                                    className="h-full w-auto object-contain"
                                />
                            </div>
                        </Link>
                        <p className="text-gray-600 max-w-xs">
                            Your trusted CCTV installation partner in Jharkhand providing comprehensive security solutions.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-gray-900">Quick Links</h3>
                        <nav className="flex flex-col gap-2">
                            <Link href="#services" className="text-gray-600 hover:text-primary">
                                CCTV Services
                            </Link>
                            <Link href="#about" className="text-gray-600 hover:text-primary">
                                About Us
                            </Link>
                            <Link href="#why-us" className="text-gray-600 hover:text-primary">
                                Why Choose Us
                            </Link>
                            <Link href="#contact" className="text-gray-600 hover:text-primary">
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-gray-900">Services</h3>
                        <nav className="flex flex-col gap-2">
                            <Link href="#" className="text-gray-600 hover:text-primary">
                                CCTV Installation
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-primary">
                                Intercom Systems
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-primary">
                                Biometric Solutions
                            </Link>
                            <Link href="#" className="text-gray-600 hover:text-primary">
                                Networking Services
                            </Link>
                        </nav>
                    </div>
                    <div>
                        <h3 className="text-lg font-medium mb-4 text-gray-900">Contact BSECURE</h3>
                        <div className="space-y-2 text-gray-600">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-primary" />
                                <p>
                                    <a href="tel:+919162118159" className="hover:text-primary">+91 9162118159</a>,
                                    <a href="tel:+918825304242" className="hover:text-primary"> +91 8825304242</a>
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail className="h-4 w-4 text-primary" />
                                <p>
                                    <a href="mailto:besecurecamservice@gmail.com" className="hover:text-primary">
                                        besecurecamservice@gmail.com
                                    </a>
                                </p>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-primary" />
                                <p>Ranchi & Hazaribagh, Jharkhand</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Instagram className="h-4 w-4 text-primary" />
                                <p>
                                    <a
                                        href="https://instagram.com/bsecurecamservice"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-primary"
                                    >
                                        @bsecurecamservice
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 text-center text-gray-600">
                    <p>© {currentYear} BSECURE Information Technology. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}