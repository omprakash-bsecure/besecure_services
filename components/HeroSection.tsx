import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function HeroSection() {
    return (
        <section>
            <div className="container mx-auto px-4 lg:px-6 relative ">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px] py-16">
                    <div>
                        <Badge variant="secondary" className="mb-4 bg-primary text-white text-base">
                            #1 CCTV Installation Service in Ranchi
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Best CCTV Camera
                            <span className="text-primary block">Installation in Ranchi</span>
                            Jharkhand
                        </h1>
                        <p className="text-xl opacity-80  mb-8 leading-relaxed">
                            Professional security camera installation, biometric systems, and IT services across Ranchi and Hazaribagh. Trusted by 500+ customers in Jharkhand.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-white text-lg">
                                <a href="tel:+919162118159">
                                    <Phone className="w-5 h-5 mr-2" />
                                    Call Now: +91 9162118159
                                </a>
                            </Button>
                        </div>
                        <div className="flex items-center space-x-2 text-xs lg:space-x-8 md:space-x-6 sm:space-x-4 lg:text-base md:text-sm sm:text-sm font-medium">
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>Free Quotation</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>24/7 Support in Jharkhand</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <CheckCircle className="w-5 h-5 text-primary" />
                                <span>Free Site Visit</span>
                            </div>
                        </div>
                    </div>
                    <div className="border-primary border-l-4 border-b-4 rounded-xl">
                        <img
                            src="/hero-bg.png"
                            alt="Happy CCTV customer"
                            className="object-cover rounded-md border-primary border"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}