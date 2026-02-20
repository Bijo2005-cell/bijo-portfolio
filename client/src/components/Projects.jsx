import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { fetchProjects } from '../api';

// Import local images
import sahayatriImg from '../image/sahayatri.jpg';
import foodImg from '../image/food.png';
import movieImg from '../image/movie.png';
import resortImg from '../image/resort.png';

const projectImages = {
    "Sahayatri": sahayatriImg,
    "Food Delivery Platform": foodImg,
    "Movie Booking Platform": movieImg,
    "AI-Powered Resort Website": resortImg
};

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const loadProjects = async () => {
            try {
                const data = await fetchProjects();
                setProjects(data);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            }
        };
        loadProjects();
    }, []);

    return (
        <section id="work" className="py-32 bg-background text-foreground">
            <div className="container mx-auto px-6">
<<<<<<< HEAD
                <div className="flex flex-col md:flex-row justify-between items-end mb-24 border-b border-gray-100 pb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">Selected Work</span>
                        <h2 className="text-display-large text-foreground">
                            <div className="reveal-text">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >Featured</motion.span>
                            </div>
                            <br />
                            <div className="reveal-text">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.1 }}
                                >Projects</motion.span>
                            </div>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 1, delay: index * 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="group cursor-none"
                            data-cursor-text="View"
                        >
                            <div className="relative overflow-hidden rounded-3xl aspect-[16/11] mb-10 bg-gray-100 shadow-2xl border border-white/10 group-hover:shadow-primary/10 transition-shadow duration-700">
                                {/* Image */}
                                <motion.img
                                    src={projectImages[project.title] || project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-center justify-center">
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="btn-pill bg-white text-primary hover:bg-primary hover:text-white border-none h-14 w-40 transform translate-y-8 group-hover:translate-y-0 transition-all duration-500 shadow-2xl"
                                    >
                                        Visit Site
=======
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-gray-100 pb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="text-primary font-bold font-mono text-sm tracking-widest uppercase mb-4 block">Selected Work</span>
                        <h2 className="text-display-large text-foreground">Featured<br />Projects</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:block mb-4"
                    >
                        <p className="text-xl text-muted-foreground max-w-xs"></p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project._id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-8 bg-gray-100 shadow-sm border border-gray-100">
                                {/* Image */}
                                <img
                                    src={projectImages[project.title] || project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                />

                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                    <motion.a
                                        initial={{ scale: 0.8, opacity: 0 }}
                                        whileInView={{ scale: 1, opacity: 1 }} // Needs to be triggered by hover, using CSS mostly
                                        href={project.link}
                                        className="btn-pill bg-white text-primary hover:bg-black hover:text-white border-none transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-xl"
                                    >
                                        View Case Study
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
                                    </motion.a>
                                </div>
                            </div>

<<<<<<< HEAD
                            <div className="flex justify-between items-start px-2">
                                <div className="flex-1 pr-6">
                                    <div className="flex flex-wrap gap-3 mb-6">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-4 py-1.5 bg-secondary/80 text-foreground/60 rounded-xl text-[10px] font-mono font-bold tracking-wider uppercase">
=======
                            <div className="flex justify-between items-start">
                                <div className="flex-1 pr-6">
                                    <h3 className="text-3xl font-display font-bold mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                                        {project.title}
                                        <ArrowRight size={20} className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                                    </h3>
                                    <p className="text-muted-foreground mb-5 line-clamp-2 text-lg">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tags.map(tag => (
                                            <span key={tag} className="px-3 py-1 bg-secondary text-foreground/70 rounded-md text-xs font-mono font-medium">
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
<<<<<<< HEAD
                                    <h3 className="text-4xl font-display font-bold mb-4 group-hover:text-primary transition-colors flex items-center gap-4">
                                        {project.title}
                                        <ArrowRight size={24} className="opacity-0 -translate-x-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary duration-500" />
                                    </h3>
                                    <p className="text-muted-foreground mb-4 line-clamp-2 text-xl font-light leading-relaxed">{project.description}</p>
                                </div>
                                <span className="font-mono text-xs font-bold text-gray-400 mt-4 tracking-widest">{project.year}</span>
=======
                                </div>
                                <span className="font-mono text-sm font-bold text-gray-400 mt-2">{project.year}</span>
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-24 text-center">
                    <a href="https://github.com/Bijo2005-cell" target="_blank" rel="noreferrer" className="btn-pill bg-foreground text-white hover:bg-primary border-none shadow-xl shadow-gray-200">
                        <Github size={16} className="mr-2" /> View More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
