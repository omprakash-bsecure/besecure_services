'use client';
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Alert, AlertDescription } from '@/components/ui/alert';

export function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);
        console.log('Form submitted:', data);
    };

    return (
        <Card className="shadow-xl">
            <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free CCTV Installation Quote</h3>
                <Alert className="mb-6">
                    <AlertDescription>
                        • Free consultation • Same day service available • Professional installation
                    </AlertDescription>
                </Alert>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                            Your Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="fullName"
                            name="fullName"
                            type="text"
                            className="mt-2"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                            Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            className="mt-2"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                            Email Address
                        </Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            className="mt-2"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <Label htmlFor="service" className="text-sm font-medium text-gray-700">
                            Service Required
                        </Label>
                        <Select name="service">
                            <SelectTrigger className="mt-2">
                                <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="cctv">CCTV Installation</SelectItem>
                                <SelectItem value="intercom">Intercom Systems</SelectItem>
                                <SelectItem value="biometric">Biometric Solutions</SelectItem>
                                <SelectItem value="alarm">Alarm Systems</SelectItem>
                                <SelectItem value="networking">Networking Services</SelectItem>
                                <SelectItem value="computer">Computer Services</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Your Message
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-2"
                            placeholder="Tell us about your security needs, location, and any specific requirements"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary-dark text-lg py-3"
                    >
                        <ArrowRight className="w-5 h-5 mr-2" />
                        Get Free Quote Now
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                        We'll contact you within 2 hours during business hours
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}