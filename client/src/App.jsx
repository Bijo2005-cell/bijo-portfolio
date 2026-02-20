<<<<<<< HEAD
import React, { useEffect } from 'react';
import Lenis from 'lenis';
=======
import React from 'react';
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Journey from './components/Journey';
<<<<<<< HEAD
import CustomCursor from './components/CustomCursor';

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
            infinite: false,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black overflow-x-hidden">
            <CustomCursor />
            <Navbar />

=======

function App() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black overflow-x-hidden">
            <Navbar />
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
            <main>
                <Hero />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Journey />
                <Contact />
            </main>
            <footer className="py-12 bg-black border-t border-white/10 text-center">
                <div className="container mx-auto px-6">
                    <p className="font-mono text-sm text-gray-500 uppercase mb-4">
                        Designed & Built by Bijo K Binoy
                    </p>
                    <div className="flex justify-center gap-4 text-gray-600">
                        <span>© {new Date().getFullYear()}</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
