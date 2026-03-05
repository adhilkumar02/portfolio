'use client'

import { SplineScene } from "@/components/ui/spline"
import { Mail, Linkedin, Github, ChevronDown } from "lucide-react"
import Link from "next/link"
import { Spotlight } from "@/components/ui/spotlight"

export function Hero() {
    return (
        <section className="relative w-full min-h-[100dvh] md:h-screen overflow-hidden bg-black antialiased flex flex-col md:block">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            {/* Subtle dot-grid background */}
            <div
                className="absolute inset-0 z-0 opacity-[0.04]"
                style={{
                    backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                }}
            />

            <div className="relative z-10 w-full flex-grow md:h-full flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 max-w-7xl mx-auto py-20 md:py-0">
                {/* Left side - Text content */}
                <div className="flex flex-col items-start justify-center space-y-6 md:space-y-4 md:w-[50%] pt-10 md:pt-0 z-20">

                    {/* Floating code badge */}
                    <div className="animate-float">
                        <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-600/10 border border-red-600/30 text-red-400 code-tag text-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                            &lt; AI &amp; Robotics /&gt;
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight">
                        <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-neutral-400 mb-2">Hi, I&apos;m</span>
                        <span className="text-white">Adhil Kumar</span>
                    </h1>
                    <h2 className="text-base md:text-xl font-normal text-neutral-400 uppercase tracking-wider">
                        AI &amp; Robotics Enthusiast
                    </h2>
                    <p className="text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed">
                        I design intelligent systems that bridge the gap between code and creativity.
                    </p>


                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center gap-5 pt-4">

                        {/* ── Primary: filled pill with sliding arrow ── */}
                        <Link
                            href="#projects"
                            className="group inline-flex items-center gap-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-sm uppercase tracking-[0.12em] px-8 py-3.5 rounded-full transition-colors duration-300 w-full md:w-auto justify-center"
                        >
                            View Projects
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>

                        {/* ── Secondary: text-link with underline wipe ── */}
                        <Link
                            href="/cv.pdf"
                            target="_blank"
                            className="group relative inline-flex items-center gap-2 text-neutral-300 hover:text-white font-semibold text-sm uppercase tracking-[0.12em] transition-colors duration-300 w-full md:w-auto justify-center"
                        >
                            {/* underline draws in from left */}
                            <span className="absolute bottom-0 left-0 h-px w-0 bg-white group-hover:w-full transition-all duration-400" />
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
                            </svg>
                            Resume
                        </Link>
                    </div>


                    <div className="flex gap-4 pt-2 justify-center w-full md:w-auto md:justify-start">
                        <Link href="mailto:aadhilkumar989@gmail.com" className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                            <Mail className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/adhilkumar/" target="_blank" className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300 hover:scale-110">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://github.com/adhilkumar02" target="_blank" className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black transition-all duration-300 hover:scale-110">
                            <Github className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Right side - 3D Animation */}
                <div className="w-full md:w-[50%] h-[40vh] md:h-full relative flex items-center justify-center md:justify-end">
                    <div className="w-full h-full max-w-2xl pointer-events-none md:pointer-events-auto">
                        <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" className="w-full h-full" />
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-2">
                <span className="text-neutral-500 text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-5 h-5 text-neutral-500 animate-scroll-bounce" />
            </div>
        </section>
    )
}
