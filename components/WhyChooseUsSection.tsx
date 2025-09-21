import { CheckCircle, Shield, Clock } from "lucide-react";
import { Card, CardContent } from '@/components/ui/card';

export function WhyChooseUsSection() {
    return (
        <section id="why-us" className="py-16 bg-gray-100">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-gray-900">
                        Why Choose BSECURE for CCTV Installation
                    </h2>
                    <p className="mt-4 max-w-[700px] text-gray-600">
                        We're committed to providing the best CCTV installation services with exceptional customer support
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                                <CheckCircle className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Free Site Visit</h3>
                            <p className="text-gray-600 text-justify">
                                We offer complimentary site visits to assess your security needs and provide tailored CCTV solutions.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                                <Shield className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">Expert CCTV Technicians</h3>
                            <p className="text-gray-600 text-justify">
                                Our team consists of certified professionals with years of experience in CCTV and security systems.
                            </p>
                        </CardContent>
                    </Card>
                    <Card className="border-primary/20 shadow-sm hover:shadow-md transition-all">
                        <CardContent className="p-6 flex flex-col items-center text-center">
                            <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center mb-4">
                                <Clock className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-gray-900">24/7 Support</h3>
                            <p className="text-gray-600 text-justify">
                                We provide round-the-clock support to ensure your CCTV systems are always functioning optimally.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}