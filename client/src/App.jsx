import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Journey from './components/Journey';

function App() {
    return (
        <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black overflow-x-hidden">
            <Navbar />
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
