'use client'

import { Mail, MapPin, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"

export function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string }>({ type: null, message: '' });

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: null, message: '' });

        if (!form.current) return;

        emailjs.sendForm('service_j7n6hgo', 'template_8niamsp', form.current, 'NFoPvELGHW5rhZwXU')
            .then((result) => {
                setLoading(false);
                setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
                form.current?.reset();
                setTimeout(() => setStatus({ type: null, message: '' }), 5000);
            }, (error) => {
                setLoading(false);
                setStatus({ type: 'error', message: 'Failed to send message. Please try again later.' });
                console.error(error);
            });
    };

    return (
        <section id="contact" className="w-full py-12 md:py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Section Title */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">Contact</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-12 md:w-16 bg-red-600"></div>
                        <h3 className="text-base md:text-xl font-semibold text-white uppercase tracking-wider">LET&apos;S CONNECT</h3>
                        <div className="h-[2px] w-12 md:w-16 bg-red-600"></div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
                    {/* Get in Touch Column */}
                    <div className="bg-neutral-900/50 p-6 md:p-12 rounded-3xl border border-neutral-800">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Get in Touch</h3>
                        <p className="text-neutral-400 mb-8 md:mb-12 leading-relaxed text-sm md:text-base">
                            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out through any of the channels below.
                        </p>

                        <div className="space-y-6 md:space-y-8 mb-8 md:mb-12">
                            {/* Email */}
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 text-red-600">
                                    <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base md:text-lg mb-1">Email</h4>
                                    <a href="mailto:aadhilkumar989@gmail.com" className="text-red-600 hover:text-red-500 transition-colors block mb-1 text-sm md:text-base break-all">
                                        aadhilkumar989@gmail.com
                                    </a>
                                    <p className="text-neutral-500 text-xs md:text-sm">I typically respond within 24 hours</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 md:gap-6">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-neutral-800 flex items-center justify-center flex-shrink-0 text-red-600">
                                    <MapPin className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base md:text-lg mb-1">Location</h4>
                                    <p className="text-white mb-1 text-sm md:text-base">Kochi, Kerala, India</p>
                                    <p className="text-neutral-500 text-xs md:text-sm">Open to remote opportunities</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Media */}
                        <div>
                            <h4 className="text-white font-bold text-base md:text-lg mb-4 md:mb-6">Connect on Social Media</h4>
                            <div className="flex gap-8 md:gap-12 justify-center">
                                <a href="mailto:aadhilkumar989@gmail.com" className="group flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                                        <Mail className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <span className="text-[10px] md:text-xs text-neutral-500 group-hover:text-white transition-colors">Email</span>
                                </a>
                                <Link href="https://www.linkedin.com/in/adhilkumar/" target="_blank" className="group flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300">
                                        <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <span className="text-[10px] md:text-xs text-neutral-500 group-hover:text-white transition-colors">LinkedIn</span>
                                </Link>
                                <Link href="https://github.com/adhilkumar02" target="_blank" className="group flex flex-col items-center gap-2">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-400 group-hover:bg-white group-hover:text-black transition-all duration-300">
                                        <Github className="w-5 h-5 md:w-6 md:h-6" />
                                    </div>
                                    <span className="text-[10px] md:text-xs text-neutral-500 group-hover:text-white transition-colors">GitHub</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Send a Message Column */}
                    <div className="bg-neutral-900/50 p-6 md:p-12 rounded-3xl border border-neutral-800">
                        <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Send a Message</h3>
                        <p className="text-neutral-400 mb-6 md:mb-8 text-sm md:text-base">
                            Have a project in mind or just want to chat? Drop me a message and I&apos;ll get back to you as soon as possible.
                        </p>

                        <form ref={form} onSubmit={sendEmail} className="space-y-4 md:space-y-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-white font-medium text-sm">Name <span className="text-red-600">*</span></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="Your full name"
                                    required
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-600 transition-colors text-base"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-white font-medium text-sm">Email <span className="text-red-600">*</span></label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-600 transition-colors text-base"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-white font-medium text-sm">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="What's this about?"
                                    required
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-600 transition-colors text-base"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-white font-medium text-sm">Message <span className="text-red-600">*</span></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    required
                                    placeholder="Tell me about your project, idea, or just say hello..."
                                    className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-white placeholder:text-neutral-600 focus:outline-none focus:border-red-600 transition-colors resize-none text-base"
                                    suppressHydrationWarning
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 px-8 rounded-xl transition-colors w-full md:w-auto uppercase tracking-wide text-sm"
                                suppressHydrationWarning
                            >
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                            {status.message && (
                                <p className={`text-sm ${status.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>
                                    {status.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
