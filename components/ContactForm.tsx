'use client';
import { ArrowRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('fullName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            service: formData.get('service'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setSubmitStatus('success');
                e.currentTarget.reset();
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Card className="shadow-xl">
            <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Free CCTV Installation Quote in Ranchi</h3>
                <p className="mb-6 border p-4 text-sm font-medium rounded-lg">
                    • Free site visit in Ranchi • Professional security camera setup
                </p>

                {submitStatus === 'success' && (
                    <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <p className="text-green-800 font-medium">Thank you! We'll contact you within 2 hours for your CCTV installation quote.</p>
                    </div>
                )}

                {submitStatus === 'error' && (
                    <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800 font-medium">Sorry, there was an error. Please call us at +91 9162118159</p>
                    </div>
                )}

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
                                <SelectItem value="cctv-installation">CCTV Installation Ranchi</SelectItem>
                                <SelectItem value="intercom-system">Intercom System Installation</SelectItem>
                                <SelectItem value="biometric-system">Biometric Attendance System</SelectItem>
                                <SelectItem value="computer-repair">Computer Repair Services</SelectItem>
                                <SelectItem value="networking">Wi-Fi & Networking Setup</SelectItem>
                                <SelectItem value="ip-camera">IP Camera Installation</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                            Your Requirements
                        </Label>
                        <Textarea
                            id="message"
                            name="message"
                            rows={4}
                            className="mt-2"
                            placeholder="Tell us about your service needs, location in Ranchi/Jharkhand, and any specific requirements"
                        />
                    </div>
                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-lg py-3"
                        disabled={isSubmitting}
                    >
                        <ArrowRight className="w-5 h-5 mr-2" />
                        {isSubmitting ? 'Sending...' : 'Get Free CCTV Quote Now'}
                    </Button>
                    <p className="text-xs text-gray-500 text-center">
                        We'll contact you within 2 hours during business hours for your CCTV installation in Ranchi
                    </p>
                </form>
            </CardContent>
        </Card>
    );
}