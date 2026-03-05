'use client'

import { Github, ExternalLink } from "lucide-react"
import Link from "next/link"

export function Projects() {
    const projects = [
        {
            title: "Helmet Strap Detection",
            description: "Real-time YOLOv8 demo that verifies helmet usage and chin-strap fastening from a live webcam feed.",
            tech: ["Python", "YOLOv8", "OpenCV"],
            link: "https://github.com/adhilkumar02/Helmet_strap_detection",
            category: "CV",
            featured: false,
        },
        {
            title: "Agentic Research Assistant",
            description: "Local-first PDF research tool with a multi-agent FastAPI backend — ingests PDFs, segments & embeds sections via SentenceTransformers + FAISS, and enables grounded Q&A and section-level summaries through a React UI.",
            tech: ["Python", "FastAPI", "FAISS", "React", "LLM"],
            link: "https://github.com/adhilkumar02/Agentic-Research-Assistant",
            category: "AI",
            featured: true,
        },
        {
            title: "ESP32-CAM Fire-Fighting Robot",
            description: "Autonomous robot for flame detection and extinguishing with onboard sensors and wireless control.",
            tech: ["C++", "Embedded C", "ESP32"],
            link: "https://github.com/adhilkumar02/ESP32-CAM-Wifi-Fire-Fighting-RC-Robot",
            category: "Embedded",
            featured: false,
        },
        {
            title: "Car Recommendation System",
            description: "Flask-based intelligent car selector using user preferences and data-driven scoring.",
            tech: ["Python", "Flask", "Pandas"],
            link: "https://github.com/adhilkumar02/Car-Recommendation-System",
            category: "Web",
            featured: false,
        },
        {
            title: "Doctor Appointment System",
            description: "Streamlit-based smart booking tool with simple, guided UX and persistence.",
            tech: ["Python", "Streamlit", "Pandas"],
            link: "https://github.com/adhilkumar02",
            category: "Web",
            featured: false,
        }
    ]

    const categoryColors: Record<string, string> = {
        CV: "bg-purple-600/20 text-purple-400 border-purple-600/30",
        AI: "bg-red-600/20 text-red-400 border-red-600/30",
        Embedded: "bg-amber-600/20 text-amber-400 border-amber-600/30",
        Web: "bg-blue-600/20 text-blue-400 border-blue-600/30",
    }

    return (
        <section id="projects" className="w-full py-12 md:py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-12">

                {/* Section label */}
                <div className="text-center mb-2">
                    <span className="code-tag text-red-500 text-xs">&lt; Projects /&gt;</span>
                </div>

                {/* Section Title */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">Projects</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-12 md:w-16 bg-red-600" />
                        <h3 className="text-base md:text-xl font-semibold text-white uppercase tracking-wider">Selected Work</h3>
                        <div className="h-[2px] w-12 md:w-16 bg-red-600" />
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-red-600 transition-all duration-300 flex flex-col gap-4 hover:-translate-y-2 hover:shadow-[0_8px_30px_rgba(220,38,38,0.15)]"
                        >
                            {/* Number + Category Row */}
                            <div className="flex items-center justify-between">
                                <span className="text-5xl font-black text-neutral-800 leading-none select-none group-hover:text-red-900/40 transition-colors duration-300">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <div className="flex items-center gap-2">
                                    {project.featured && (
                                        <span className="px-2 py-0.5 rounded-full bg-red-600/20 border border-red-600/40 text-red-400 text-[10px] font-bold uppercase tracking-widest">
                                            Featured
                                        </span>
                                    )}
                                    <span className={`px-2.5 py-0.5 rounded-full border text-[11px] font-semibold ${categoryColors[project.category]}`}>
                                        {project.category}
                                    </span>
                                </div>
                            </div>

                            {/* Project Title */}
                            <h3 className="text-xl font-bold text-white leading-tight">
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
                                        className="px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-400 text-xs font-medium"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links Row */}
                            <div className="flex items-center gap-4 mt-2">
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-white hover:text-red-500 transition-colors"
                                >
                                    <Github className="w-4 h-4" />
                                    GitHub
                                </Link>
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-500 hover:text-white transition-colors ml-auto"
                                >
                                    <ExternalLink className="w-4 h-4" />
                                    View
                                </Link>
                            </div>

                            {/* Hover Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-red-600/0 group-hover:bg-red-600/5 transition-all duration-300 pointer-events-none" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
