import Image from 'next/image';
import React from 'react';

const productLinks = ['Job discovery', 'Worker AI', 'Companies', 'Salary data'];
const navigationLinks = ['Help center', 'Career library', 'Contact'];
const resourceLinks = ['Brand Guideline', 'Newsroom'];

const Footer = () => {
    return (
        <footer className="relative overflow-hidden border-t border-white/5 bg-black px-4 sm:px-8 lg:px-16 pt-16 pb-8">
            {/* Decorative background grid */}
            <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
                <svg className="absolute -top-32 right-0 w-[600px] h-[600px]" viewBox="0 0 600 600" fill="none">
                    {Array.from({ length: 12 }).map((_, i) => (
                        <circle
                            key={i}
                            cx="300"
                            cy="300"
                            r={50 + i * 25}
                            stroke="white"
                            strokeWidth="1"
                            fill="none"
                        />
                    ))}
                    {Array.from({ length: 12 }).map((_, i) => (
                        <line
                            key={`l-${i}`}
                            x1="300"
                            y1="300"
                            x2={300 + 300 * Math.cos((i * Math.PI) / 6)}
                            y2={300 + 300 * Math.sin((i * Math.PI) / 6)}
                            stroke="white"
                            strokeWidth="1"
                        />
                    ))}
                </svg>
            </div>

            <div className="relative max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between gap-12">
                    {/* Logo + tagline */}
                    <div className="max-w-xs">
                        <Image
                            src="/images/logo.png"
                            alt="HireLoop"
                            width={140}
                            height={36}
                            className="h-9 w-auto"
                        />
                        <p className="mt-4 text-sm text-neutral-400 leading-relaxed">
                            The AI-native career platform. Built for people who take their work seriously.
                        </p>
                    </div>

                    {/* Link columns */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-16">
                        <FooterColumn title="Product" links={productLinks} />
                        <FooterColumn title="Navigations" links={navigationLinks} />
                        <FooterColumn title="Resources" links={resourceLinks} />
                    </div>
                </div>

                {/* Bottom row */}
                <div className="mt-16 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <SocialIcon type="facebook" />
                        <SocialIcon type="pinterest" />
                        <SocialIcon type="linkedin" />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-neutral-500 text-center sm:text-right">
                        <span>Copyright 2024 — Programming Hero</span>
                        <span className="flex items-center gap-2">
                            <a href="#" className="hover:text-neutral-300 transition-colors">Terms & Policy</a>
                            <span>-</span>
                            <a href="#" className="hover:text-neutral-300 transition-colors">Privacy Guideline</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, links }) => (
    <div>
        <h4 className="text-indigo-400 font-medium mb-4">{title}</h4>
        <ul className="space-y-3">
            {links.map((link) => (
                <li key={link}>
                    <a href="#" className="text-sm text-neutral-400 hover:text-white transition-colors">
                        {link}
                    </a>
                </li>
            ))}
        </ul>
    </div>
);

const SocialIcon = ({ type }) => {
    const icons = {
        facebook: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.4c-1.4 0-1.8.8-1.8 1.7V12h3l-.5 2.9h-2.5v7A10 10 0 0 0 22 12Z" />
            </svg>
        ),
        pinterest: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M12 2C6.5 2 2 6.5 2 12c0 4.2 2.6 7.8 6.3 9.3-.1-.8-.2-2 0-2.9.2-.8 1.3-5.4 1.3-5.4s-.3-.6-.3-1.6c0-1.5.9-2.6 1.9-2.6.9 0 1.4.7 1.4 1.5 0 .9-.6 2.3-.9 3.6-.3 1.1.5 2 1.6 2 1.9 0 3.4-2 3.4-4.9 0-2.6-1.9-4.4-4.5-4.4-3.1 0-4.9 2.3-4.9 4.7 0 .9.3 1.6.7 2.1.1.1.1.2.1.3-.1.3-.2.9-.3 1.1-.1.2-.2.3-.4.2-1.2-.6-2-2.2-2-3.6 0-2.9 2.1-5.6 6.1-5.6 3.2 0 5.7 2.3 5.7 5.3 0 3.2-2 5.7-4.8 5.7-1 0-1.8-.5-2.1-1.1l-.6 2.2c-.2.7-.7 1.6-1 2.2.8.2 1.6.4 2.5.4 5.5 0 10-4.5 10-10S17.5 2 12 2Z" />
            </svg>
        ),
        linkedin: (
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14ZM8.3 9.6H5.8V18h2.5V9.6Zm.2-2.6a1.4 1.4 0 1 0-2.9 0 1.4 1.4 0 0 0 2.9 0ZM18.2 18v-4.7c0-2.5-1.4-3.7-3.2-3.7-1.5 0-2.1.8-2.5 1.4V9.6h-2.5c0 .2 0 8 0 8.4h2.5v-4.7c0-.2 0-.5.1-.7.2-.5.7-1.1 1.5-1.1 1.1 0 1.5.8 1.5 2.1V18h2.6Z" />
            </svg>
        ),
    };

    const bgClass = type === 'pinterest' ? 'bg-gradient-to-br from-purple-500 to-pink-500' : 'bg-neutral-800';

    return (
        
        <a    href="#"
            className={`w-9 h-9 rounded-lg ${bgClass} flex items-center justify-center text-neutral-300 hover:text-white transition-colors`}
        >
            {icons[type]}
        </a>
    );
};

export default Footer;