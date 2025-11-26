'use client'

import { Github } from "lucide-react"
import Link from "next/link"

export function Projects() {
    const projects = [
        {
            title: "ESP32-CAM-Wifi-Fire-Fighting-RC-Robot",
            description: "Autonomous robot for flame detection and extinguishing with onboard sensors and control.",
            tech: ["C++", "Embedded C"],
            link: "https://github.com/adhilkumar02/ESP32-CAM-Wifi-Fire-Fighting-RC-Robot"
        },
        {
            title: "Car Recommendation System",
            description: "Flask-based intelligent car selector using user preferences and data-driven scoring.",
            tech: ["Python", "Flask", "Pandas"],
            link: "https://github.com/adhilkumar02/Car-Recommendation-System"
        },
        {
            title: "Doctor Appointment System",
            description: "Streamlit-based smart booking tool with simple, guided UX and persistence.",
            tech: ["Python", "Streamlit", "Pandas"],
            link: "https://github.com/adhilkumar02"
        }
    ]

    return (
        <section id="projects" className="w-full py-12 md:py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">Projects</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-12 md:w-16 bg-red-600"></div>
                        <h3 className="text-base md:text-xl font-semibold text-white uppercase tracking-wider">Selected Work</h3>
                        <div className="h-[2px] w-12 md:w-16 bg-red-600"></div>
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-red-600 transition-all duration-300 flex flex-col gap-4"
                        >
                            {/* Project Title */}
                            <h3 className="text-xl font-bold text-white">
                                {project.title}
                            </h3>

                            {/* Project Description */}
                            <p className="text-sm text-neutral-400 leading-relaxed flex-grow">
                                {project.description}
                            </p>

                            {/* Tech Stack Tags */}
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs text-neutral-500 font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* GitHub Link */}
                            <Link
                                href={project.link}
                                target="_blank"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-red-600 transition-colors mt-2 p-2 -ml-2 rounded-lg hover:bg-white/5 w-fit"
                            >
                                <Github className="w-4 h-4" />
                                GitHub
                            </Link>

                            {/* Hover Effect - Red Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-red-600/0 group-hover:bg-red-600/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
