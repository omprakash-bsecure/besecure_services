export function FAQSection() {
    const faqs = [
        {
            question: "Do you provide CCTV installation in Ranchi?",
            answer: "Yes. Bsecure Information Technology offers professional CCTV installation in Ranchi for homes, shops, offices, and apartments."
        },
        {
            question: "Which areas of Jharkhand do you serve?",
            answer: "We serve Ranchi, Dhanbad, Bokaro, Ramgarh, Hazaribag, and Khunti for CCTV, computer repair, and networking services."
        },
        {
            question: "Do you only install CCTV cameras or also provide other services?",
            answer: "We also provide computer repair & sales, computer accessories, networking services, smart home integration, and car dash cameras."
        },
        {
            question: "What type of CCTV cameras do you install?",
            answer: "We install wireless CCTV cameras, IP cameras (NVR-based systems), and HD/Coaxial cameras (DVR-based systems)."
        },
        {
            question: "Do you provide Annual Maintenance Contracts (AMC)?",
            answer: "Yes. We offer AMC for CCTV, computers, and networks for regular checkups and priority service."
        },
        {
            question: "Can you repair laptops and desktops?",
            answer: "Yes. We provide repair for desktops, laptops, and servers."
        },
        {
            question: "Do you sell computer accessories?",
            answer: "Yes, including keyboards, mice, printers, storage devices, and networking equipment."
        },
        {
            question: "Do you provide Wi-Fi and networking setup for offices?",
            answer: "Yes. We provide LAN installation, Wi-Fi setup, office networking, and troubleshooting services."
        },
        {
            question: "How do I know which CCTV system is right for me?",
            answer: "We inspect your site and recommend wireless systems for homes/small offices, IP cameras for businesses/institutions, or HD/DVR systems for cost-effective monitoring."
        },
        {
            question: "Why should I choose Bsecure Information Technology?",
            answer: "Because we provide local expertise in Jharkhand, trusted products, affordable pricing, and long-term support for all our CCTV and IT services."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 lg:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-gray-900 mb-4">
                        Frequently Asked Questions - CCTV Installation Ranchi
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Common questions about CCTV installation, computer repair, and IT services in Ranchi, Hazaribagh, Khunti, and Jharkhand
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="grid gap-8">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                                    {faq.question}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center mt-12">
                    <p className="text-gray-600 mb-4">
                        Have more questions about CCTV installation in Ranchi or our IT services?
                    </p>
                    <a
                        href="tel:+919162118159"
                        className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-primary hover:bg-primary/90 rounded-lg transition-all duration-200"
                    >
                        Call +91 9162118159 for Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}