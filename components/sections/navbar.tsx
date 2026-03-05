'use client'

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
    const [isScrolled, setIsScrolled] = React.useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)
    const [activeSection, setActiveSection] = React.useState("Home")
    const [hoveredItem, setHoveredItem] = React.useState<string | null>(null)

    React.useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)

            // Update active section based on scroll position
            const sections = [
                { name: "Home", id: "" },
                { name: "About", id: "about" },
                { name: "Projects", id: "projects" },
                { name: "Skills", id: "skills" },
                { name: "Education", id: "education" },
                { name: "Contact", id: "contact" },
            ]

            let current = "Home"
            for (const section of sections) {
                if (!section.id) continue
                const el = document.getElementById(section.id)
                if (el) {
                    const rect = el.getBoundingClientRect()
                    if (rect.top <= 100) {
                        current = section.name
                    }
                }
            }
            setActiveSection(current)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Prevent scrolling when mobile menu is open
    React.useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isMobileMenuOpen])

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Education", href: "#education" },
        { name: "Contact", href: "#contact" },
    ]

    const displayItem = hoveredItem ?? activeSection

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="#" className="flex items-center gap-2 group z-50 relative">
                        <div className="w-3 h-3 rounded-full bg-red-600 group-hover:scale-110 transition-transform" />
                        <span className="text-xl font-bold text-white tracking-tight">
                            Adhil<span className="text-red-600">Kumar</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation — Pill Nav */}
                    <nav
                        className="hidden md:flex items-center gap-1 relative bg-neutral-900/60 backdrop-blur-sm border border-white/10 rounded-full px-2 py-1.5"
                        onMouseLeave={() => setHoveredItem(null)}
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="relative px-4 py-1.5 text-sm font-medium rounded-full z-10 transition-colors duration-200"
                                style={{
                                    color: displayItem === link.name ? "#fff" : "#a3a3a3",
                                }}
                                onMouseEnter={() => setHoveredItem(link.name)}
                                onClick={() => setActiveSection(link.name)}
                            >
                                {displayItem === link.name && (
                                    <motion.span
                                        layoutId="pill"
                                        className="absolute inset-0 rounded-full bg-red-600/90"
                                        style={{ zIndex: -1 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                    />
                                )}
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[999] relative"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={cn(
                            "block w-6 h-0.5 bg-white transition-all duration-300 origin-center",
                            isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                        )} />
                        <span className={cn(
                            "block w-4 h-0.5 bg-red-500 transition-all duration-300",
                            isMobileMenuOpen ? "opacity-0 w-0" : ""
                        )} />
                        <span className={cn(
                            "block w-6 h-0.5 bg-white transition-all duration-300 origin-center",
                            isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                        )} />
                    </button>
                </div>
            </header>

            {/* Mobile Navigation — Full-screen overlay (outside header to escape z-50 stacking context) */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
                        className="fixed inset-0 bg-black z-[999] md:hidden flex flex-col"
                    >
                        {/* Top bar */}
                        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-900">
                            <Link href="#" className="flex items-center gap-2" onClick={() => setIsMobileMenuOpen(false)}>
                                <div className="w-2.5 h-2.5 rounded-full bg-red-600" />
                                <span className="text-lg font-bold text-white">
                                    Adhil<span className="text-red-600">Kumar</span>
                                </span>
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-neutral-800 text-neutral-400 hover:border-red-600 hover:text-white transition-all"
                                aria-label="Close menu"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" />
                                </svg>
                            </button>
                        </div>

                        {/* Nav links */}
                        <nav className="flex flex-col justify-center flex-1 px-8 gap-1">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ x: 40, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.06 + 0.1, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "group flex items-center gap-4 py-4 border-b border-neutral-900 transition-all duration-200",
                                            activeSection === link.name ? "border-red-900" : "hover:border-neutral-700"
                                        )}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                            setIsMobileMenuOpen(false)
                                        }}
                                    >
                                        <span className="code-tag text-red-600/60 text-xs w-8 flex-shrink-0 group-hover:text-red-500 transition-colors">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <span className={cn(
                                            "text-2xl font-bold tracking-tight transition-colors duration-200",
                                            activeSection === link.name
                                                ? "text-white"
                                                : "text-neutral-500 group-hover:text-white"
                                        )}>
                                            {link.name}
                                        </span>
                                        {activeSection === link.name && (
                                            <span className="ml-auto w-2 h-2 rounded-full bg-red-500 flex-shrink-0" />
                                        )}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>

                        {/* Bottom status bar */}
                        <div className="px-8 py-6 border-t border-neutral-900">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                <span className="code-tag text-green-500 text-[11px]">Available for opportunities</span>
                            </div>
                            <p className="code-tag text-neutral-600 text-[10px]">~/adhilkumar — Kochi, Kerala</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
