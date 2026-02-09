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
                                    </motion.a>
                                </div>
                            </div>

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
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <span className="font-mono text-sm font-bold text-gray-400 mt-2">{project.year}</span>
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
