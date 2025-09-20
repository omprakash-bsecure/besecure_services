'use client';
import Image from "next/image";
import { Button } from '@/components/ui/button';

export function WhatsAppButton() {
    const phoneNumber = "919162118159"; // Without + and spaces
    const message = encodeURIComponent(
        "Hi BSECURE! I'm interested in your CCTV installation services. Please provide more details about pricing and installation in Ranchi/Hazaribagh."
    );
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    return (
        <div className="fixed bottom-3 right-3 z-50">
            <Button
                asChild
                size={'lg'} className="rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white p-2 lg:min-h-14 md:min-h-12 sm:min-h-12 min-h-10"
            >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                    <img
                        src="/WhatsApp.svg"
                        alt="WhatsApp"
                        className="lg:size-12 md:size-10 sm:size-10 size-8 object-contain"
                    />
                    <span className="sr-only">WhatsApp</span>
                </a>
            </Button>
        </div>
    );
}