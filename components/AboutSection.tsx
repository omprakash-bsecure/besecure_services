import Link from "next/link";
import Image from "next/image";

export function AboutSection() {
    return (
        <section id="about" className="py-16">
            <div className="container px-4 md:px-6">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900">
                            About BSECURE Information Technology - Best CCTV Installation Company in Jharkhand
                        </h2>
                        <p className="mt-4 text-gray-600 text-justify">
                            BSECURE Information Technology is the best and cheapest CCTV camera installation company in Ranchi, Khunti, Hazaribagh, Dhanbad, Bokaro and Ramgarh. We are Jharkhand's top quality and most affordable CCTV installation service provider offering professional security camera installation, CCTV camera repair, and complete surveillance solutions for homes, offices, shops, schools and industries.
                        </p>
                        <p className="mt-4 text-gray-600 text-justify">
                            Our expert CCTV installation team provides best quality HD CCTV camera installation, affordable night vision CCTV cameras, cheapest outdoor security camera installation, premium dome CCTV cameras, budget-friendly bullet cameras, low cost wireless CCTV installation, best price IP camera installation, and affordable DVR NVR setup in Ranchi Jharkhand. We also offer cheapest biometric attendance system installation and low cost fingerprint device setup.
                        </p>
                        <p className="mt-4 text-gray-600 text-justify">
                            Our affordable IT services include best computer repair Ranchi, cheapest laptop repair services, low price desktop computer sales, affordable intercom system installation, budget telephone networking, cheap EPABX installation, low cost LAN network installation, affordable Wi-Fi setup, and cheapest computer accessories in Hazaribagh, Khunti, and Bokaro.
                        </p>
                        <p className="mt-4 text-gray-600 text-justify">
                            Choose BSECURE for best and cheapest CCTV installation in Ranchi with free site visit, highest quality CCTV camera installation at lowest prices in Jharkhand, affordable 2 year warranty, budget-friendly 24/7 CCTV support, and cheap AMC services. Call now for best quality and most affordable CCTV camera installation service in Ranchi, Hazaribagh, Khunti, Dhanbad, Bokaro, and Ramgarh.
                        </p>
                        <div className="mt-8">
                            <Link
                                href="#contact"
                                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                            >
                                Get Free CCTV Quote in Ranchi
                            </Link>
                        </div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg flex items-center justify-center">
                        <img
                            src="/camera-installation.jpg"
                            alt="Professional CCTV camera installation service in Ranchi Jharkhand - Best security system setup"
                            loading="lazy"
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}