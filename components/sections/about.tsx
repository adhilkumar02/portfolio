'use client'

export function About() {
    const skills = [
        "ROS2", "Computer Vision", "Python", "C++",
        "Embedded Systems", "Deep Learning", "ESP32/Arduino", "Raspberry Pi", "Fusion 360"
    ]

    const focusAreas = [
        { label: "Autonomous Systems", icon: "◈" },
        { label: "Edge AI & Deployment", icon: "◈" },
        { label: "Computer Vision Pipelines", icon: "◈" },
        { label: "Embedded Hardware Integration", icon: "◈" },
    ]

    return (
        <section id="about" className="w-full py-12 md:py-24 bg-black text-white">
            <div className="max-w-6xl mx-auto px-4 md:px-12">

                {/* Section header */}
                <div className="mb-10 md:mb-14">
                    <span className="code-tag text-red-500 text-xs tracking-widest">&lt; About /&gt;</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mt-2" style={{ fontFamily: 'var(--font-orbitron)' }}>
                        About Me
                    </h2>
                    <div className="mt-3 flex items-center gap-3">
                        <div className="h-[2px] w-10 bg-red-600" />
                        <div className="h-px flex-1 bg-neutral-800" />
                    </div>
                </div>

                {/* Main card */}
                <div className="relative rounded-2xl border border-neutral-800 overflow-hidden bg-neutral-950">

                    {/* Top accent bar */}
                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />

                    <div className="grid grid-cols-1 lg:grid-cols-2">

                        {/* ── Left: Bio + skill tags ────────────────────── */}
                        <div className="p-8 md:p-10 border-b lg:border-b-0 lg:border-r border-neutral-800">
                            {/* Prompt-style label */}
                            <div className="flex items-center gap-2 mb-6">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                                </div>
                                <span className="code-tag text-neutral-500 text-[11px] ml-2">~/adhilkumar/README.md</span>
                            </div>

                            <div className="space-y-4 text-neutral-300 text-sm md:text-base leading-relaxed">
                                <p>
                                    I&apos;m an engineer at the intersection of{' '}
                                    <span className="text-white font-semibold">intelligent systems and hardware</span>
                                    {' '}— building things that sense, think, and move in the real world.
                                </p>
                                <p>
                                    From autonomous robots to edge AI pipelines, my toolkit spans{' '}
                                    <span className="text-white font-semibold">ROS2, Computer Vision, Python, C++,</span>
                                    {' '}and{' '}
                                    <span className="text-white font-semibold">Embedded Systems</span>
                                    {' '}— deployed on real hardware like{' '}
                                    <span className="text-white font-semibold">ESP32 and Arduino</span>.
                                </p>
                            </div>

                            {/* Skill pills */}
                            <div className="mt-8 flex flex-wrap gap-2">
                                {skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="code-tag px-3 py-1.5 rounded-md bg-black border border-neutral-800 text-neutral-400 text-[11px] hover:border-red-600 hover:text-white transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ── Right: Focus areas terminal block ─────────── */}
                        <div className="p-8 md:p-10 flex flex-col gap-6">
                            <div>
                                <p className="code-tag text-neutral-500 text-[11px] mb-4">
                                    <span className="text-red-500">$</span> cat focus_areas.txt
                                </p>
                                <div className="space-y-3">
                                    {focusAreas.map((area, i) => (
                                        <div
                                            key={i}
                                            className="flex items-center gap-3 group cursor-default"
                                        >
                                            <span className="text-red-600 text-sm flex-shrink-0 group-hover:scale-110 transition-transform">
                                                {area.icon}
                                            </span>
                                            <span className="text-neutral-300 text-sm md:text-base group-hover:text-white transition-colors">
                                                {area.label}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Bottom divider + status line */}
                            <div className="mt-auto pt-6 border-t border-neutral-800">
                                <div className="flex items-center justify-between">
                                    <div className="code-tag text-[11px] text-neutral-600">
                                        <span className="text-red-500">$</span> status
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        <span className="code-tag text-green-500 text-[11px]">Available for opportunities</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
