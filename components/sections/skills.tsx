'use client'

import { useEffect, useRef, useState } from 'react'

function ProgressBar({ pct }: { pct: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const [visible, setVisible] = useState(false)
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) setVisible(true) },
            { threshold: 0.4 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])
    return (
        <div ref={ref} className="h-0.5 w-full bg-neutral-800 rounded-full overflow-hidden">
            <div
                className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-1000 ease-out"
                style={{ width: visible ? `${pct}%` : '0%' }}
            />
        </div>
    )
}

// Marquee strip of tools
const toolsList = [
    'OpenCV', 'Gazebo', 'RViz', 'MoveIt', 'YOLOv8',
    'ESP32', 'Arduino', 'Fusion 360', 'Streamlit', 'FastAPI',
    'Flask', 'React', 'NumPy', 'Pandas', 'PyTorch',
]

function MarqueeStrip() {
    const items = [...toolsList, ...toolsList] // double for seamless loop
    return (
        <div className="relative w-full overflow-hidden mt-8">
            {/* fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />
            <div
                className="flex gap-3 w-max"
                style={{ animation: 'marquee 28s linear infinite' }}
            >
                {items.map((tool, i) => (
                    <span
                        key={i}
                        className="code-tag px-3 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 whitespace-nowrap text-xs select-none"
                    >
                        &lt; {tool} /&gt;
                    </span>
                ))}
            </div>
        </div>
    )
}

export function Skills() {
    // ─── Featured large skills ───────────────────────────────────────────────
    const featured = [
        {
            name: 'Python',
            pct: 90,
            label: 'Primary Language',
            desc: 'Data pipelines, ML training loops, automation scripts, and backend services.',
            icon: (
                <svg viewBox="0 0 48 48" fill="currentColor" className="w-10 h-10">
                    <circle cx="24" cy="24" r="20" fill="currentColor" />
                    <g fill="black">
                        <path d="M24,10C19,10 15,12 15,16L15,20L24,20L24,21L15,21C12,21 10,23 10,26C10,29 12,31 15,31L17,31L17,27C17,24 20,22 23,22L29,22C32,22 33,21 33,18L33,16C33,12 29,10 26,10ZM20,13C21,13 22,14 22,15C22,16 21,17 20,17C19,17 18,16 18,15C18,14 19,13 20,13Z" />
                        <path d="M24,38C29,38 33,36 33,32L33,28L24,28L24,27L33,27C36,27 38,25 38,22C38,19 36,17 33,17L31,17L31,21C31,24 28,26 25,26L19,26C16,26 15,27 15,30L15,32C15,36 19,38 22,38ZM28,35C27,35 26,34 26,33C26,32 27,31 28,31C29,31 30,32 30,33C30,34 29,35 28,35Z" />
                    </g>
                </svg>
            ),
        },
        {
            name: 'Computer Vision',
            pct: 85,
            label: 'Specialisation',
            desc: 'Object detection, tracking, real-time inference with YOLOv8 and OpenCV.',
            icon: (
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-10 h-10">
                    <path d="M4 24C4 24 10 12 24 12C38 12 44 24 44 24C44 24 38 36 24 36C10 36 4 24 4 24Z" />
                    <circle cx="24" cy="24" r="6" />
                    <path d="M8 8L16 8M8 8L8 16M40 8L32 8M40 8L40 16M8 40L16 40M8 40L8 32M40 40L32 40M40 40L40 32" strokeLinecap="round" />
                </svg>
            ),
        },
    ]

    // ─── Standard skill cards ────────────────────────────────────────────────
    const standard = [
        {
            name: 'ROS2', pct: 80,
            icon: (
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                    <rect x="14" y="10" width="20" height="18" rx="2" strokeWidth="2" />
                    <circle cx="19" cy="18" r="2" fill="currentColor" /><circle cx="29" cy="18" r="2" fill="currentColor" />
                    <line x1="24" y1="10" x2="24" y2="6" strokeWidth="2" /><circle cx="24" cy="5" r="1.5" fill="currentColor" />
                    <path d="M19 24 Q24 26 29 24" fill="none" />
                    <rect x="16" y="28" width="16" height="12" rx="1" strokeWidth="2" />
                    <line x1="16" y1="32" x2="10" y2="32" /><line x1="32" y1="32" x2="38" y2="32" />
                    <circle cx="9" cy="32" r="1.5" fill="currentColor" /><circle cx="39" cy="32" r="1.5" fill="currentColor" />
                </svg>
            ),
        },
        {
            name: 'Deep Learning', pct: 78,
            icon: (
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                    <circle cx="12" cy="12" r="3" /><circle cx="12" cy="24" r="3" /><circle cx="12" cy="36" r="3" />
                    <circle cx="24" cy="18" r="3" /><circle cx="24" cy="30" r="3" />
                    <circle cx="36" cy="24" r="3" />
                    <line x1="15" y1="12" x2="21" y2="18" opacity=".6" /><line x1="15" y1="24" x2="21" y2="18" opacity=".6" />
                    <line x1="15" y1="24" x2="21" y2="30" opacity=".6" /><line x1="15" y1="36" x2="21" y2="30" opacity=".6" />
                    <line x1="27" y1="18" x2="33" y2="24" opacity=".6" /><line x1="27" y1="30" x2="33" y2="24" opacity=".6" />
                </svg>
            ),
        },
        {
            name: 'C++', pct: 75,
            icon: (
                <svg viewBox="0 0 48 48" fill="currentColor" className="w-9 h-9">
                    <path d="M24,4L40,14L40,34L24,44L8,34L8,14Z" />
                    <g fill="black" stroke="black"><path d="M26,20C24,18 22,17 19,17C15,17 12,20 12,24C12,28 15,31 19,31C22,31 24,30 26,28" strokeWidth="2.5" strokeLinecap="round" fill="none" /></g>
                    <g fill="black" stroke="black" strokeWidth="2">
                        <line x1="28" y1="20" x2="32" y2="20" /><line x1="30" y1="18" x2="30" y2="22" />
                        <line x1="34" y1="20" x2="38" y2="20" /><line x1="36" y1="18" x2="36" y2="22" />
                        <line x1="28" y1="28" x2="32" y2="28" /><line x1="30" y1="26" x2="30" y2="30" />
                        <line x1="34" y1="28" x2="38" y2="28" /><line x1="36" y1="26" x2="36" y2="30" />
                    </g>
                </svg>
            ),
        },
        {
            name: 'Embedded', pct: 72,
            icon: (
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-9 h-9">
                    <rect x="12" y="12" width="24" height="24" rx="2" strokeWidth="2" />
                    <rect x="18" y="18" width="12" height="12" rx="1" strokeWidth="2" />
                    <line x1="12" y1="16" x2="8" y2="16" /><line x1="12" y1="24" x2="8" y2="24" /><line x1="12" y1="32" x2="8" y2="32" />
                    <line x1="36" y1="16" x2="40" y2="16" /><line x1="36" y1="24" x2="40" y2="24" /><line x1="36" y1="32" x2="40" y2="32" />
                    <line x1="16" y1="12" x2="16" y2="8" /><line x1="24" y1="12" x2="24" y2="8" /><line x1="32" y1="12" x2="32" y2="8" />
                    <line x1="16" y1="36" x2="16" y2="40" /><line x1="24" y1="36" x2="24" y2="40" /><line x1="32" y1="36" x2="32" y2="40" />
                </svg>
            ),
        },
    ]

    return (
        <section id="skills" className="w-full py-12 md:py-20 bg-black text-white">
            <style>{`
                @keyframes marquee {
                    0%   { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
            `}</style>

            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Header */}
                <div className="text-center mb-2">
                    <span className="code-tag text-red-500 text-xs">&lt; Skills /&gt;</span>
                </div>
                <div className="text-center mb-10 md:mb-14">
                    <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">Skills</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-12 md:w-16 bg-red-600" />
                        <h3 className="text-base md:text-xl font-semibold text-white uppercase tracking-wider">Core Competencies</h3>
                        <div className="h-[2px] w-12 md:w-16 bg-red-600" />
                    </div>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4">

                    {/* ── Featured cards (large) ─────────────────────────── */}
                    {featured.map((skill) => (
                        <div
                            key={skill.name}
                            className="sm:col-span-1 md:col-span-5 group relative p-6 md:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-red-600 transition-all duration-300 overflow-hidden hover:shadow-[0_0_30px_rgba(220,38,38,0.12)] flex flex-col gap-4"
                        >
                            {/* bg number watermark */}
                            <span className="absolute -right-4 -top-4 text-[7rem] font-black text-neutral-800/40 leading-none select-none pointer-events-none group-hover:text-red-900/20 transition-colors duration-500">
                                {skill.name.charAt(0)}
                            </span>

                            {/* top row */}
                            <div className="flex items-start justify-between gap-4 relative z-10">
                                <div className="text-neutral-400 group-hover:text-red-500 transition-colors duration-300">
                                    {skill.icon}
                                </div>
                                <div className="flex flex-col items-end gap-1">
                                    <span className="text-xs uppercase tracking-widest text-neutral-500">{skill.label}</span>
                                    <span className="text-2xl font-black text-white">{skill.pct}<span className="text-red-500 text-base">%</span></span>
                                </div>
                            </div>

                            {/* name + desc */}
                            <div className="relative z-10">
                                <h3 className="text-xl font-bold text-white mb-1">{skill.name}</h3>
                                <p className="text-sm text-neutral-500 leading-relaxed">{skill.desc}</p>
                            </div>

                            {/* progress bar */}
                            <div className="relative z-10">
                                <ProgressBar pct={skill.pct} />
                            </div>
                        </div>
                    ))}

                    {/* ── Spacer / visual accent card ───────────────────── */}
                    <div className="sm:col-span-2 md:col-span-2 flex items-center justify-center rounded-2xl border border-dashed border-neutral-800 bg-neutral-950 py-6 md:py-0">
                        <div className="text-center px-2">
                            <div className="w-8 h-8 rounded-full bg-red-600/10 border border-red-600/30 flex items-center justify-center mx-auto mb-2 glow-red">
                                <div className="w-2 h-2 rounded-full bg-red-500" />
                            </div>
                            <p className="code-tag text-neutral-600 text-[10px] leading-relaxed">and<br />more</p>
                        </div>
                    </div>

                    {/* ── Standard smaller cards ────────────────────────── */}
                    {standard.map((skill) => (
                        <div
                            key={skill.name}
                            className="md:col-span-3 group relative p-5 rounded-2xl bg-neutral-900/60 border border-neutral-800 hover:border-red-600 transition-all duration-300 flex flex-col gap-3 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(220,38,38,0.1)] active:scale-[1.02]"
                        >
                            <div className="flex items-center justify-between">
                                <div className="text-neutral-500 group-hover:text-red-500 transition-colors duration-300">
                                    {skill.icon}
                                </div>
                                <span className="text-xs font-bold text-neutral-600 group-hover:text-red-500 transition-colors">{skill.pct}%</span>
                            </div>
                            <h4 className="text-base font-bold text-white">{skill.name}</h4>
                            <ProgressBar pct={skill.pct} />
                        </div>
                    ))}
                </div>

                {/* ── Marquee tools strip ──────────────────────────────── */}
                <div className="mt-6">
                    <p className="text-center text-xs uppercase tracking-widest text-neutral-600 mb-3">Tools &amp; Frameworks</p>
                    <MarqueeStrip />
                </div>
            </div>
        </section>
    )
}
