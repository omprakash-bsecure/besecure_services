import { Phone, Mail, MapPin, Globe, Instagram, Linkedin, FacebookIcon } from "lucide-react";
import { Button } from '@/components/ui/button';
import { ContactForm } from '@/components/ContactForm';

export function ContactSection() {
    return (
        <section id="contact" className="py-16 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact BSECURE for CCTV Installation</h2>
                        <p className="mt-4 text-gray-500">
                            Ready to secure your property in Ranchi or Hazaribagh? Contact us today for a free CCTV consultation.
                        </p>
                        <div className="mt-8 space-y-4">
                            <div className="flex items-start gap-4">
                                <Phone className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <h3 className="font-medium">Call for CCTV Installation</h3>
                                    <p className="text-gray-500">
                                        <a href="tel:+919162118159" className="hover:text-primary">+91 9162118159</a>,
                                        <a href="tel:+918825304242" className="hover:text-primary"> +91 8825304242</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Mail className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <h3 className="font-medium">Email</h3>
                                    <p className="text-gray-500">
                                        <a href="mailto:bsecurecamservice@gmail.com" className="hover:text-primary">
                                            bsecurecamservice@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <h3 className="font-medium">Ranchi Office</h3>
                                    <p className="text-gray-500">Pragatipath, Bahubajar, Ranchi-834001</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <h3 className="font-medium">Hazaribagh Office</h3>
                                    <p className="text-gray-500">Danto Khurd Katkamsandi, Hazaribagh-825319</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Globe className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <h3 className="font-medium">Website</h3>
                                    <p className="text-gray-500">
                                        <a href="https://www.bsecuretech.in" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                                            www.bsecuretech.in
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-medium mb-3">Follow Us</h3>
                                <div className="flex items-center space-x-3 p-3 text-primary rounded-lg w-fit border">
                                    <a
                                        href="https://www.instagram.com/bsecureinfotech"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-7 h-7 rounded-full flex items-center justify-center"
                                    >
                                        <Instagram className="w-5 h-5 " />
                                        <span className="sr-only">Bsecure Instagram</span>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/company/bsecure-digital-technology/"
                                        className="w-7 h-7  rounded-full flex items-center justify-center"
                                        target="_blank"
                                    >
                                        <Linkedin className="w-5 h-5" />
                                        <span className="sr-only">BSecure Linkedin</span>
                                    </a>
                                    <a
                                        href="https://facebook.com/bsecureinfotech"
                                        target="_blank"
                                        className="w-7 h-7  rounded-full flex items-center justify-center"
                                    >
                                        <FacebookIcon className="w-5 h-5" />
                                        <span className="sr-only">BSecure Facebook</span>
                                    </a>
                                </div>
                            </div>

                        </div>

                        <Button asChild className="bg-primary hover:bg-primary-dark mt-4">
                            <a href="tel:+919162118159">
                                <Phone className="h-4 w-4 mr-2" />
                                Call Now
                            </a>
                        </Button>
                    </div>

                    <ContactForm />
                </div>
            </div>
        </section>
    );
}
