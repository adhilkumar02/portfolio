'use client'

export function Skills() {
    const coreSkills = [
        {
            name: "ROS2",
            icon: (
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {/* Robot head */}
                    <rect x="14" y="10" width="20" height="18" rx="2" strokeWidth="2" />
                    {/* Eyes */}
                    <circle cx="19" cy="18" r="2" fill="currentColor" />
                    <circle cx="29" cy="18" r="2" fill="currentColor" />
                    {/* Antenna */}
                    <line x1="24" y1="10" x2="24" y2="6" strokeWidth="2" />
                    <circle cx="24" cy="5" r="1.5" fill="currentColor" />
                    {/* Mouth */}
                    <path d="M 19 24 Q 24 26 29 24" strokeWidth="2" fill="none" />
                    {/* Body */}
                    <rect x="16" y="28" width="16" height="12" rx="1" strokeWidth="2" />
                    {/* Arms */}
                    <line x1="16" y1="32" x2="10" y2="32" strokeWidth="2" />
                    <line x1="32" y1="32" x2="38" y2="32" strokeWidth="2" />
                    <circle cx="9" cy="32" r="1.5" fill="currentColor" />
                    <circle cx="39" cy="32" r="1.5" fill="currentColor" />
                </svg>
            )
        },
        {
            name: "Machine Learning",
            icon: (
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {/* Neural network nodes */}
                    <circle cx="12" cy="12" r="3" strokeWidth="2" />
                    <circle cx="12" cy="24" r="3" strokeWidth="2" />
                    <circle cx="12" cy="36" r="3" strokeWidth="2" />
                    <circle cx="24" cy="18" r="3" strokeWidth="2" />
                    <circle cx="24" cy="30" r="3" strokeWidth="2" />
                    <circle cx="36" cy="24" r="3" strokeWidth="2" />
                    {/* Connections */}
                    <line x1="15" y1="12" x2="21" y2="18" strokeWidth="1.5" opacity="0.6" />
                    <line x1="15" y1="24" x2="21" y2="18" strokeWidth="1.5" opacity="0.6" />
                    <line x1="15" y1="24" x2="21" y2="30" strokeWidth="1.5" opacity="0.6" />
                    <line x1="15" y1="36" x2="21" y2="30" strokeWidth="1.5" opacity="0.6" />
                    <line x1="27" y1="18" x2="33" y2="24" strokeWidth="1.5" opacity="0.6" />
                    <line x1="27" y1="30" x2="33" y2="24" strokeWidth="1.5" opacity="0.6" />
                </svg>
            )
        },
        {
            name: "Python",
            icon: (
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="currentColor">
                    {/* Circular background */}
                    <circle cx="24" cy="24" r="20" fill="currentColor" />
                    {/* Python snake logo in white */}
                    <g fill="black">
                        {/* Top part of snake */}
                        <path d="M 24,10 C 19,10 15,12 15,16 L 15,20 L 24,20 L 24,21 L 15,21 C 12,21 10,23 10,26 C 10,29 12,31 15,31 L 17,31 L 17,27 C 17,24 20,22 23,22 L 29,22 C 32,22 33,21 33,18 L 33,16 C 33,12 29,10 26,10 Z M 20,13 C 21,13 22,14 22,15 C 22,16 21,17 20,17 C 19,17 18,16 18,15 C 18,14 19,13 20,13 Z" />
                        {/* Bottom part of snake */}
                        <path d="M 24,38 C 29,38 33,36 33,32 L 33,28 L 24,28 L 24,27 L 33,27 C 36,27 38,25 38,22 C 38,19 36,17 33,17 L 31,17 L 31,21 C 31,24 28,26 25,26 L 19,26 C 16,26 15,27 15,30 L 15,32 C 15,36 19,38 22,38 Z M 28,35 C 27,35 26,34 26,33 C 26,32 27,31 28,31 C 29,31 30,32 30,33 C 30,34 29,35 28,35 Z" />
                    </g>
                </svg>
            )
        },
        {
            name: "C++",
            icon: (
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="currentColor">
                    {/* Hexagon background */}
                    <path d="M 24,4 L 40,14 L 40,34 L 24,44 L 8,34 L 8,14 Z" fill="currentColor" />
                    {/* C letter in white */}
                    <g fill="black" stroke="black">
                        <path d="M 26,20 C 24,18 22,17 19,17 C 15,17 12,20 12,24 C 12,28 15,31 19,31 C 22,31 24,30 26,28" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                    </g>
                    {/* ++ symbols in white */}
                    <g fill="black" stroke="black" strokeWidth="2">
                        <line x1="28" y1="20" x2="32" y2="20" />
                        <line x1="30" y1="18" x2="30" y2="22" />
                        <line x1="34" y1="20" x2="38" y2="20" />
                        <line x1="36" y1="18" x2="36" y2="22" />
                        <line x1="28" y1="28" x2="32" y2="28" />
                        <line x1="30" y1="26" x2="30" y2="30" />
                        <line x1="34" y1="28" x2="38" y2="28" />
                        <line x1="36" y1="26" x2="36" y2="30" />
                    </g>
                </svg>
            )
        },
        {
            name: "Embedded System",
            icon: (
                <svg className="w-14 h-14" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                    {/* Chip outline */}
                    <rect x="12" y="12" width="24" height="24" rx="2" strokeWidth="2" />
                    {/* Inner chip */}
                    <rect x="18" y="18" width="12" height="12" rx="1" strokeWidth="2" />
                    {/* Pins - Left */}
                    <line x1="12" y1="16" x2="8" y2="16" strokeWidth="2" />
                    <line x1="12" y1="24" x2="8" y2="24" strokeWidth="2" />
                    <line x1="12" y1="32" x2="8" y2="32" strokeWidth="2" />
                    {/* Pins - Right */}
                    <line x1="36" y1="16" x2="40" y2="16" strokeWidth="2" />
                    <line x1="36" y1="24" x2="40" y2="24" strokeWidth="2" />
                    <line x1="36" y1="32" x2="40" y2="32" strokeWidth="2" />
                    {/* Pins - Top */}
                    <line x1="16" y1="12" x2="16" y2="8" strokeWidth="2" />
                    <line x1="24" y1="12" x2="24" y2="8" strokeWidth="2" />
                    <line x1="32" y1="12" x2="32" y2="8" strokeWidth="2" />
                    {/* Pins - Bottom */}
                    <line x1="16" y1="36" x2="16" y2="40" strokeWidth="2" />
                    <line x1="24" y1="36" x2="24" y2="40" strokeWidth="2" />
                    <line x1="32" y1="36" x2="32" y2="40" strokeWidth="2" />
                </svg>
            )
        }
    ]

    const additionalSkills = [
        "Flask", "Pandas", "Streamlit", "Numpy", "Scikit-learn"
    ]

    return (
        <section id="skills" className="w-full py-12 md:py-20 bg-black text-white">
            <div className="max-w-7xl mx-auto px-4 md:px-12">
                {/* Section Title */}
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">Skills</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-12 md:w-16 bg-red-600"></div>
                        <h3 className="text-base md:text-xl font-semibold text-white uppercase tracking-wider">Core Competencies</h3>
                        <div className="h-[2px] w-12 md:w-16 bg-red-600"></div>
                    </div>
                </div>

                {/* Core Skills Cards */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-6 mb-8 md:mb-12">
                    {coreSkills.map((skill) => (
                        <div
                            key={skill.name}
                            className="group relative p-4 md:p-6 rounded-2xl bg-neutral-900/50 border border-neutral-800 hover:border-red-600 transition-all duration-300 flex flex-col items-center justify-center gap-3 md:gap-4 cursor-pointer"
                        >
                            {/* Icon */}
                            <div className="text-neutral-400 group-hover:text-white transition-colors duration-300 transform scale-90 md:scale-100">
                                {skill.icon}
                            </div>

                            {/* Skill Name */}
                            <h4 className="text-xs md:text-base font-semibold text-white text-center">
                                {skill.name}
                            </h4>

                            {/* Hover Effect - Red Glow */}
                            <div className="absolute inset-0 rounded-2xl bg-red-600/0 group-hover:bg-red-600/5 transition-all duration-300"></div>
                        </div>
                    ))}
                </div>

                {/* Additional Skills Tags */}
                <div className="flex flex-wrap justify-center gap-2 md:gap-3">
                    {additionalSkills.map((skill) => (
                        <span
                            key={skill}
                            className="px-4 py-1.5 md:px-5 md:py-2 rounded-full bg-black border border-neutral-800 text-neutral-400 text-xs md:text-sm font-medium hover:border-red-600 hover:text-white transition-all duration-300 cursor-pointer"
                        >
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    )
}
