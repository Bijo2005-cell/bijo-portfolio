import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import resume from '../image/resume_bijo_k_binoy (2).pdf';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Work', href: '#work' },
        { name: 'Skills', href: '#skills' },
        { name: 'Journey', href: '#journey' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-xl py-3 shadow-lg ring-1 ring-black/5' : 'bg-transparent py-8'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    href="#"
                    className="text-2xl font-display font-bold uppercase tracking-tighter text-foreground z-50 group cursor-none"
                    data-cursor-text="Home"
                >
                    PORT<span className="text-primary group-hover:text-foreground transition-colors">FOLIO</span>
                </motion.a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link, i) => (
                        <motion.a
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.1,
                                ease: [0.215, 0.61, 0.355, 1]
                            }}
                            key={link.name}
                            href={link.href}
                            className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-colors relative group cursor-none"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
                        </motion.a>
                    ))}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6 }}
                        className="flex items-center gap-4 ml-4"
                    >
                        <a
                            href={resume}
                            download="Bijo_K_Binoy_Resume.pdf"
                            className="btn-pill border border-foreground/10 text-foreground/80 hover:bg-primary hover:text-white transition-all flex items-center gap-2 px-5 py-2"
                        >
                            <Download size={14} />
                            Resume
                        </a>
                        <a
                            href="#contact"
                            className="btn-pill bg-foreground text-white hover:bg-primary hover:shadow-xl hover:shadow-primary/20 transition-all px-6 py-2"
                        >
                            Let's Talk
                        </a>
                    </motion.div>
                </div>


                {/* Mobile Toggle */}
                <button
                    className="lg:hidden z-50 text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                            animate={{ opacity: 1, clipPath: "circle(150% at 100% 0)" }}
                            exit={{ opacity: 0, clipPath: "circle(0% at 100% 0)" }}
                            transition={{ type: "spring", damping: 25, stiffness: 100 }}
                            className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center gap-8 lg:hidden"
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.1) }}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-4xl font-display font-bold text-foreground hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.a
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 + (navLinks.length * 0.1) }}
                                href={resume}
                                download="Bijo_K_Binoy_Resume.pdf"
                                onClick={() => setIsOpen(false)}
                                className="text-4xl font-display font-bold text-foreground hover:text-primary transition-colors flex items-center gap-4"
                            >
                                <Download size={32} />
                                Resume
                            </motion.a>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
