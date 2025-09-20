import Link from "next/link";
import Image from "next/image";
import { Button } from '@/components/ui/button';

export function AboutSection() {
    return (
        <section id="about" className="py-16">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                            About BSECURE Information Technology
                        </h2>
                        <p className="mt-4 text-gray-600 text-justify">
                            BSECURE Information Technology is Jharkhand's leading CCTV installation and security solutions provider. With
                            years of experience in the industry, we have established ourselves as a trusted partner for homes and
                            businesses seeking reliable security systems in Ranchi and Hazaribagh.
                        </p>
                        <p className="mt-4 text-gray-600 text-justify">
                            Our team of certified professionals is dedicated to delivering high-quality CCTV installations, prompt
                            service, and ongoing support to ensure your security systems function optimally at all times.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <Button asChild className="bg-primary hover:bg-primary-dark">
                                <Link href="#contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="relative h-[400px] overflow-hidden rounded-lg flex items-center justify-center bg-gray-50 p-8">
                        <Image
                            src="/security-illustration.png"
                            alt="CCTV security system illustration"
                            width={400}
                            height={300}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
