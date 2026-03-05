'use client'

export function Education() {
    const entries = [
        {
            degree: "Diploma in AI and Robotics",
            institution: "I-Hub School of Learning, Kochi",
            period: "2025 – 2026",
            description: "Intensive program covering autonomous systems, computer vision, deep learning, ROS2, and embedded hardware integration. Hands-on projects with real robotic platforms.",
            status: "Completed",
        }
    ]

    return (
        <section id="education" className="w-full py-12 md:py-20 bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 md:px-12">

                {/* Section label */}
                <div className="text-center mb-2">
                    <span className="code-tag text-red-500 text-xs">&lt; Education /&gt;</span>
                </div>

                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">Education</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-12 md:w-16 bg-red-600" />
                        <h3 className="text-base md:text-xl font-semibold text-white uppercase tracking-wider">Academic Background</h3>
                        <div className="h-[2px] w-12 md:w-16 bg-red-600" />
                    </div>
                </div>

                {/* Timeline */}
                <div className="relative border-l border-neutral-800 ml-3 md:ml-4 pl-8 md:pl-12 space-y-10">
                    {entries.map((entry, i) => (
                        <div key={i} className="relative group">
                            {/* Glowing dot */}
                            <div className="absolute -left-[41px] md:-left-[49px] top-3 flex items-center justify-center">
                                <div className="w-4 h-4 rounded-full bg-red-600 glow-red z-10" />
                                <div className="absolute w-8 h-8 rounded-full bg-red-600/20 animate-ping" style={{ animationDuration: '2s' }} />
                            </div>

                            {/* Card */}
                            <div className="p-6 md:p-8 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-red-600 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(220,38,38,0.1)]">
                                {/* Title row */}
                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">{entry.degree}</h3>
                                        <p className="text-neutral-400 text-base md:text-lg mt-1">{entry.institution}</p>
                                    </div>
                                    <div className="flex flex-col items-start sm:items-end gap-2 flex-shrink-0">
                                        {/* Period */}
                                        <span className="text-red-500 font-semibold text-sm font-mono">{entry.period}</span>
                                        {/* Status badge */}
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${entry.status === 'Completed'
                                            ? 'bg-green-600/20 border border-green-600/40 text-green-400'
                                            : 'bg-amber-600/20 border border-amber-600/40 text-amber-400'
                                            }`}>
                                            {entry.status}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                    {entry.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
