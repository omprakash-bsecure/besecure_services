import { Card, CardContent } from '@/components/ui/card';

export function TestimonialsSection() {
    return (
        <section className="py-16">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
                    <p className="mt-4 max-w-[700px] text-gray-500">
                        Don't just take our word for it - hear from our satisfied CCTV customers in Jharkhand
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card>
                        <CardContent className="p-6">
                            <blockquote className="text-gray-700 mb-4">
                                "BSECURE installed our home CCTV system and we couldn't be happier. Professional service and excellent quality cameras."
                            </blockquote>
                            <span className="font-semibold">Rajesh Kumar</span>
                            <p className="text-sm text-gray-600">Homeowner, Ranchi</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <blockquote className="text-gray-700 mb-4">
                                "As a business owner, security is paramount. BSECURE provided a complete CCTV solution that gives me peace of mind."
                            </blockquote>
                            <span className="font-semibold">Priya Sharma</span>
                            <p className="text-sm text-gray-600">Business Owner, Hazaribagh</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className="p-6">
                            <blockquote className="text-gray-700 mb-4">
                                "The team at BSECURE is responsive and knowledgeable. They helped us upgrade our outdated security system efficiently."
                            </blockquote>
                            <span className="font-semibold">Amit Singh</span>
                            <p className="text-sm text-gray-600">Office Manager, Ranchi</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
