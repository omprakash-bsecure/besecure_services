import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-white/30">
            <div className="container flex h-16 items-center justify-between px-4 md:px-6">
                <Link href="/" className="flex items-center gap-3">
                    <div className="h-12 w-auto relative">
                        <img
                            src="/bsecure_logo.png"
                            alt="BSECURE Information Technology Logo"
                            className="size-14 object-contain"
                        />
                    </div>
                    <div className="hidden lg:block">
                        <span className="text-lg font-bold tracking-wide">
                            BSECURE Information Technology
                        </span>
                    </div>
                </Link>

                <nav className="hidden md:flex gap-8 rounded-lg bg-primary/20 p-4">
                    <Link href="#services" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                        About
                    </Link>
                    <Link href="#why-us" className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors">
                        Why Choose Us
                    </Link>
                </nav>

                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-gray-700">
                        <Phone className="h-4 w-4" />
                        <a href="tel:+919162118159" className="text-sm hover:text-gray-900 transition-colors">
                            +919162118159
                        </a>
                    </div>
                    <Button className=" hidden md:flex bg-primary text-white font-medium px-6 py-2 rounded-md">
                        Contact
                    </Button>
                </div>
            </div>
        </header>
    );
}