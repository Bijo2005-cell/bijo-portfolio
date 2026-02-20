import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { fetchEducation } from '../api';

const Journey = () => {
    const [education, setEducation] = useState([]);

    useEffect(() => {
        const loadEducation = async () => {
            try {
                const data = await fetchEducation();
                setEducation(data);
            } catch (error) {
                console.error("Failed to fetch education:", error);
            }
        };
        loadEducation();
    }, []);

    return (
        <section id="journey" className="py-32 bg-foreground text-white relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-foreground via-foreground/95 to-foreground" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-start">
                    <motion.div
<<<<<<< HEAD
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 sticky top-32"
                    >
                        <span className="text-primary font-bold font-mono text-[10px] tracking-[0.4em] uppercase mb-6 block">Education</span>
                        <h2 className="text-display-large text-white">
                            <div className="reveal-text">
                                <motion.span
                                    initial={{ y: "100%" }}
                                    whileInView={{ y: 0 }}
                                    transition={{ duration: 0.8 }}
                                >My Journey</motion.span>
                            </div>
                        </h2>
                        <p className="text-gray-400 mt-10 text-xl font-light leading-relaxed">
=======
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:w-1/3 sticky top-32"
                    >
                        <span className="text-primary font-bold font-mono text-sm tracking-widest uppercase mb-4 block">Education</span>
                        <h2 className="text-display-large text-white">My<br />Journey</h2>
                        <p className="text-gray-400 mt-8 text-xl font-light">
>>>>>>> e3c37c871caa747f6f21109a71a5850105a7335d
                            The academic foundation that paved the way for my technical career.
                        </p>
                    </motion.div>

                    <div className="lg:w-2/3 grid gap-8 w-full">
                        {education.map((edu, index) => (
                            <motion.div
                                key={edu._id}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.15 }}
                                className="group relative overflow-hidden bg-white/5 p-10 rounded-2xl border border-white/10 hover:border-primary/50 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                            >
                                <div className="absolute -top-6 -right-6 p-8 opacity-5 group-hover:opacity-10 transition-opacity text-white rotate-12">
                                    <GraduationCap size={180} />
                                </div>

                                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                                    <span className="text-primary font-mono text-sm font-bold tracking-widest bg-primary/20 px-3 py-1 rounded-full w-fit">
                                        {edu.year}
                                    </span>
                                </div>

                                <h3 className="text-3xl font-display font-bold text-white mb-2">{edu.institution}</h3>
                                <p className="text-xl text-gray-400 font-light">{edu.degree}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Journey;
