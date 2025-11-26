'use client'

import { SplineScene } from "@/components/ui/spline"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github } from "lucide-react"
import Link from "next/link"
import { Spotlight } from "@/components/ui/spotlight"

export function Hero() {
    return (
        <section className="relative w-full min-h-[100dvh] md:h-screen overflow-hidden bg-black antialiased flex flex-col md:block">
            <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="white" />

            <div className="relative z-10 w-full flex-grow md:h-full flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 max-w-7xl mx-auto py-20 md:py-0">
                {/* Left side - Text content */}
                <div className="flex flex-col items-start justify-center space-y-6 md:space-y-4 md:w-[50%] pt-10 md:pt-0 z-20">
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                        Adhil Kumar
                    </h1>
                    <h2 className="text-base md:text-xl font-normal text-neutral-400 uppercase tracking-wider">
                        AI & Robotics Enthusiast
                    </h2>
                    <p className="text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed">
                        I design intelligent systems that bridge the gap between code and creativity.
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                        <Button asChild className="bg-red-600 text-white hover:bg-red-700 uppercase font-bold tracking-wider px-8 text-sm h-12 md:h-10 w-full md:w-auto">
                            <Link href="#projects">View Projects</Link>
                        </Button>
                        <Button variant="outline" className="text-white border-white/20 hover:bg-white/10 hover:text-white bg-transparent text-sm h-12 md:h-10 w-full md:w-auto">
                            <Link href="/cv.pdf" target="_blank">Download Resume</Link>
                        </Button>
                    </div>

                    <div className="flex gap-4 pt-2 justify-center w-full md:w-auto md:justify-start">
                        <Link href="mailto:aadhilkumar989@gmail.com" className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-red-600 hover:text-white transition-all duration-300">
                            <Mail className="w-5 h-5" />
                        </Link>
                        <Link href="https://www.linkedin.com/in/adhilkumar/" target="_blank" className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                        <Link href="https://github.com/adhilkumar02" target="_blank" className="w-12 h-12 rounded-full bg-neutral-900 flex items-center justify-center text-neutral-400 hover:bg-white hover:text-black transition-all duration-300">
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
        </section>
    )
}
