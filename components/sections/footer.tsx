'use client'

import { Github, Linkedin, Mail, ArrowUp } from "lucide-react"
import Link from "next/link"

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return (
        <footer className="w-full bg-black text-white">
            {/* Gradient divider */}
            <div className="h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />

            <div className="max-w-7xl mx-auto px-4 md:px-12 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Logo mark */}
                <Link href="#" className="flex items-center gap-2 group">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-600 group-hover:scale-125 transition-transform" />
                    <span className="text-base font-bold text-white tracking-tight">
                        Adhil<span className="text-red-600">Kumar</span>
                    </span>
                </Link>

                {/* Copyright */}
                <p className="text-neutral-500 text-sm text-center">
                    © 2025 Adhil Kumar. Built with passion for AI &amp; Robotics.
                </p>

                {/* Right side — socials + back to top */}
                <div className="flex items-center gap-4">
                    <a
                        href="mailto:aadhilkumar989@gmail.com"
                        className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300"
                        aria-label="Email"
                    >
                        <Mail className="w-4 h-4" />
                    </a>
                    <Link
                        href="https://www.linkedin.com/in/adhilkumar/"
                        target="_blank"
                        className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-4 h-4" />
                    </Link>
                    <Link
                        href="https://github.com/adhilkumar02"
                        target="_blank"
                        className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black hover:border-white transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <Github className="w-4 h-4" />
                    </Link>

                    {/* Back to top */}
                    <button
                        onClick={scrollToTop}
                        className="w-9 h-9 rounded-full bg-red-600/10 border border-red-600/30 flex items-center justify-center text-red-500 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-300 ml-2"
                        aria-label="Back to top"
                    >
                        <ArrowUp className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </footer>
    )
}
