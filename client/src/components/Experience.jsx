import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { fetchExperience } from '../api';

const Experience = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        const loadExperience = async () => {
            try {
                const data = await fetchExperience();
                setExperience(data);
            } catch (error) {
                console.error("Failed to fetch experience:", error);
            }
        };
        loadExperience();
    }, []);

    return (
        <section id="experience" className="py-32 bg-secondary/30 text-foreground">
            <div className="container mx-auto px-6 max-w-5xl">
                <motion.div
<<<<<<< HEAD
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-24 text-center"
                >
                    <span className="text-primary font-bold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">Experience</span>
                    <h2 className="text-display-large text-foreground">
                        <div className="reveal-text">
                            <motion.span
                                initial={{ y: "100%" }}
                                whileInView={{ y: 0 }}
                                transition={{ duration: 0.8 }}
                            >Career Path</motion.span>
                        </div>
                    </h2>
=======
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 text-center"
                >
                    <span className="text-primary font-bold font-mono text-sm tracking-widest uppercase mb-4 block">Experience</span>
                    <h2 className="text-display-large text-foreground">Career Path</h2>
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
                </motion.div>

                <div className="relative border-l-2 border-primary/20 ml-4 md:ml-0 md:pl-0 space-y-16">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job._id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative md:grid md:grid-cols-5 md:gap-12 items-start"
                        >
                            {/* Timeline Node */}
                            <div className="hidden md:block absolute left-0 top-8 w-4 h-4 rounded-full bg-primary ring-4 ring-white shadow-lg transform -translate-x-[9px]" />

                            {/* Date - Left Side */}
                            <div className="md:col-span-1 md:text-right pt-2 mb-4 md:mb-0 pl-8 md:pl-0">
                                <span className="font-mono text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full inline-block">
                                    {job.period}
                                </span>
                            </div>

                            {/* Content - Right Side */}
                            <div className="md:col-span-4 pl-8 md:pl-0">
                                <motion.div
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2 border-b border-gray-100 pb-4">
                                        <h3 className="text-2xl font-display font-bold text-foreground">{job.role}</h3>
                                        <h4 className="text-lg text-muted-foreground font-medium flex items-center gap-2">
                                            <Briefcase size={16} className="text-primary" /> {job.company}
                                        </h4>
                                    </div>

                                    <ul className="space-y-4">
                                        {job.description.map((point, i) => (
                                            <li key={i} className="text-gray-600 leading-relaxed flex items-start gap-3">
                                                <span className="text-primary mt-2 text-[10px] transform rotate-45">◆</span>
                                                {point}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
