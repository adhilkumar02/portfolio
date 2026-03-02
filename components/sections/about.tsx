'use client'

import { useState } from 'react'

export function About() {
    const [isHovered, setIsHovered] = useState(false)

    const skills = [
        "ROS2", "Computer Vision", "Python", "C++", "Embedded Systems", "Deep Learning", "ESP32/Arduino", "Fusion 360"
    ]

    return (
        <section id="about" className="w-full py-12 md:py-20 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 md:px-12">
                {/* About Me Card with Red Border Animation */}
                <div
                    className="relative p-6 md:p-12 rounded-3xl bg-neutral-900/50 backdrop-blur-sm transition-all duration-300 group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {/* Animated Red Border */}
                    <div
                        className={`absolute inset-0 rounded-3xl transition-all duration-500 ${isHovered
                            ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-600 p-[2px] opacity-100'
                            : 'bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 p-[1px] opacity-50'
                            }`}
                    >
                        <div className="w-full h-full bg-neutral-900 rounded-3xl" />
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white">About Me</h2>

                        <div className="space-y-4 text-neutral-300 text-sm md:text-lg leading-relaxed">
                            <p>
                                I&apos;m an engineer at the intersection of <span className="text-white font-semibold"> intelligent systems and hardware</span> — building things that sense, think, and move in the real world. From autonomous robots to edge AI pipelines, I care about making technology that actually works, not just in theory.


                            </p>
                            <p>
                                My toolkit spans <span className="text-white font-semibold">ROS2,Computer Vision, Machine Learning, Python, C++,</span> and <span className="text-white font-semibold">Embedded Systems</span>,  with hands-on experience deploying models on embedded hardware like <span className="text-white font-semibold">ESP32 and Arduino</span>.
                            </p>
                        </div>

                        {/* Skills Tags */}
                        <div className="mt-8 flex flex-wrap gap-2 md:gap-3">
                            {skills.map((skill) => (
                                <span
                                    key={skill}
                                    className="px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-black/50 border border-neutral-700 text-neutral-300 text-xs md:text-sm font-medium hover:border-red-600 hover:text-white transition-all duration-300"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
