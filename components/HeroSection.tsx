import { Phone, CheckCircle } from "lucide-react";
import { Badge } from '@/components/ui/badge';

export async function HeroSection() {
    return (
        <section className="min-h-[95vh] flex items-center justify-center">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 xl:gap-24 items-center justify-items-center">
                    <div className="text-center lg:text-left max-w-xl">
                        <Badge variant="destructive" className="mb-4 text-base">
                            #1 CCTV Installation Service in Ranchi
                        </Badge>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                            Best CCTV Camera Installation Services in
                            <span className="text-primary block">Ranchi, Jharkhand</span>
                        </h1>
                        <p className="text-lg font-semibold lg:hidden md:hidden sm:hidden flex justify-center text-center mb-6"><span className="text-primary mr-1.5">BSECURE</span>Information Technology</p>
                        <p className="text-lg md:text-lg lg:text-xl opacity-80 mb-8 leading-relaxed text-justify">
                            We offer the best CCTV camera installation, biometric systems, computer services (installation, repair, and maintenance), and complete IT solutions across Jharkhand - including Ranchi, Dhanbad, and Hazaribagh. Trusted by over 500 satisfied customers statewide.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
                            <a href="tel:+919162118159" className="flex gap-1 rounded-lg bg-primary text-white px-2.5 py-5 font-medium text-lg items-center justify-center">
                                <Phone className="w-5 h-5 mr-2" />
                                Call Now: +91 9162118159
                            </a>
                        </div>
                        <div className="flex items-center space-x-2 text-xs lg:space-x-8 md:space-x-6 sm:space-x-4 lg:text-base md:text-sm sm:text-sm font-medium">                            <div className="flex items-center space-x-1">
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
                    <div className="flex justify-center items-center">
                        <div className="border-primary border-l-4 border-b-4 rounded-xl">
                            <img
                                src="/hero-bg.webp"
                                alt="Happy CCTV customer"
                                fetchPriority="high"
                                className="rounded-md border-primary border size-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}