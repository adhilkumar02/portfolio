export function Education() {
    return (
        <section id="education" className="w-full py-12 md:py-20 bg-black text-white">
            <div className="max-w-4xl mx-auto px-4 md:px-12">
                <div className="text-center mb-8 md:mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-red-600 mb-4">Education</h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="h-[2px] w-12 md:w-16 bg-red-600"></div>
                        <h3 className="text-base md:text-xl font-semibold text-white uppercase tracking-wider">Academic Background</h3>
                        <div className="h-[2px] w-12 md:w-16 bg-red-600"></div>
                    </div>
                </div>

                <div className="space-y-8 md:space-y-12 relative border-l border-neutral-800 ml-3 md:ml-0 pl-6 md:pl-12">
                    <div className="relative">
                        <div className="absolute -left-[33px] md:-left-[57px] top-1.5 md:top-1 w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-white border-2 md:border-4 border-neutral-950"></div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">Diploma in AI and Robotics</h3>
                        <p className="text-neutral-400 text-base md:text-lg mt-1">I-Hub School of Learning, Kochi</p>
                    </div>

                    <div className="relative">
                        <div className="absolute -left-[33px] md:-left-[57px] top-1.5 md:top-1 w-3.5 h-3.5 md:w-5 md:h-5 rounded-full bg-neutral-600 border-2 md:border-4 border-neutral-950"></div>
                        <h3 className="text-xl md:text-2xl font-bold text-white">Higher Secondary in Computer Science</h3>
                        <p className="text-neutral-400 text-base md:text-lg mt-1">Completed with strong focus on programming and systems fundamentals.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
