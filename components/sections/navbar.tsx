'use client'

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
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
                <Button
                    variant="ghost"
                    size="icon"
                    className="md:hidden text-white z-50 relative hover:bg-white/10"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                    ) : (
                        <Menu className="w-6 h-6" />
                    )}
                </Button>
            </div>

            {/* Mobile Navigation Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 bg-black/95 backdrop-blur-xl z-40 md:hidden flex items-center justify-center"
                    >
                        <nav className="flex flex-col items-center space-y-8">
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: index * 0.05, duration: 0.3 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "text-3xl font-bold transition-all duration-300",
                                            activeSection === link.name ? "text-red-500" : "text-neutral-400 hover:text-white"
                                        )}
                                        onClick={() => {
                                            setActiveSection(link.name)
                                            setIsMobileMenuOpen(false)
                                        }}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
